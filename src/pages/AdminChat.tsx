import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface ChatMessage {
  id: string;
  message: string;
  sender_type: string;
  user_name: string | null;
  user_email: string | null;
  created_at: string;
  session_id: string;
}

interface Session {
  session_id: string;
  user_name: string | null;
  user_email: string | null;
  last_message: string;
  message_count: number;
}

const AdminChat = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {
    loadSessions();
    
    const channel = supabase
      .channel('admin-chat-updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        () => {
          loadSessions();
          if (selectedSession) {
            loadMessages(selectedSession);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedSession]);

  const loadSessions = async () => {
    const { data, error } = await (supabase as any)
      .from('chat_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading sessions:', error);
      return;
    }

    const sessionMap = new Map<string, Session>();
    data?.forEach((msg: ChatMessage) => {
      if (!sessionMap.has(msg.session_id)) {
        sessionMap.set(msg.session_id, {
          session_id: msg.session_id,
          user_name: msg.user_name,
          user_email: msg.user_email,
          last_message: msg.message,
          message_count: 1
        });
      } else {
        const session = sessionMap.get(msg.session_id)!;
        session.message_count += 1;
      }
    });

    setSessions(Array.from(sessionMap.values()));
  };

  const loadMessages = async (sessionId: string) => {
    const { data, error } = await (supabase as any)
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error loading messages:', error);
      return;
    }

    setMessages(data || []);
  };

  const handleSessionClick = (sessionId: string) => {
    setSelectedSession(sessionId);
    loadMessages(sessionId);
  };

  const handleSendReply = async () => {
    if (!replyMessage.trim() || !selectedSession) return;

    const { error } = await (supabase as any)
      .from('chat_messages')
      .insert({
        session_id: selectedSession,
        message: replyMessage,
        sender_type: 'support',
        user_name: 'Support Team',
        user_email: 'siteflicker@gmail.com'
      });

    if (error) {
      toast.error('Failed to send reply');
      console.error('Error sending reply:', error);
      return;
    }

    toast.success('Reply sent successfully');
    setReplyMessage('');
    loadMessages(selectedSession);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
          Admin Chat Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          {/* Sessions List */}
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Chat Sessions</h2>
            <ScrollArea className="h-[500px]">
              {sessions.map((session) => (
                <div
                  key={session.session_id}
                  onClick={() => handleSessionClick(session.session_id)}
                  className={`p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                    selectedSession === session.session_id
                      ? 'bg-primary/10 border-2 border-primary'
                      : 'bg-secondary/10 hover:bg-secondary/20'
                  }`}
                >
                  <div className="font-semibold">{session.user_name || 'Anonymous'}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    {session.last_message}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {session.message_count} messages
                  </div>
                </div>
              ))}
              {sessions.length === 0 && (
                <p className="text-muted-foreground text-center mt-8">
                  No chat sessions yet
                </p>
              )}
            </ScrollArea>
          </Card>

          {/* Messages View */}
          <Card className="p-4 md:col-span-2">
            {selectedSession ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Conversation</h2>
                <ScrollArea className="h-[400px] mb-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`mb-4 p-3 rounded-lg ${
                        msg.sender_type === 'user'
                          ? 'bg-secondary/20 ml-0 mr-8'
                          : 'bg-primary/10 ml-8 mr-0'
                      }`}
                    >
                      <div className="text-sm font-semibold mb-1">
                        {msg.sender_type === 'user' 
                          ? `${msg.user_name} (${msg.user_email})`
                          : 'Support Team'}
                      </div>
                      <div className="text-sm">{msg.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {new Date(msg.created_at).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </ScrollArea>

                <div className="space-y-2">
                  <Textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your reply..."
                    rows={3}
                  />
                  <Button onClick={handleSendReply} className="w-full">
                    Send Reply
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Select a chat session to view messages
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
