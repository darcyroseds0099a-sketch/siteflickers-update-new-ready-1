import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  message: string;
  sender_type: string;
  user_name: string | null;
  created_at: string;
}

const CustomerSupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [hasSetInfo, setHasSetInfo] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && hasSetInfo) {
      loadMessages();
      const unsubscribe = subscribeToMessages();
      return unsubscribe;
    }
  }, [isOpen, hasSetInfo, sessionId]);

  const loadMessages = async () => {
    const { data, error } = await (supabase as any)
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error loading messages:', error);
    } else {
      setMessages(data || []);
    }
  };

  const subscribeToMessages = () => {
    const channel = (supabase as any)
      .channel(`chat_${sessionId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`
        },
        (payload: any) => {
          setMessages(prev => [...prev, payload.new as ChatMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const handleSend = async () => {
    if (!hasSetInfo) {
      if (!userName.trim() || !userEmail.trim()) {
        toast({
          title: "Please enter your name and email",
          variant: "destructive",
        });
        return;
      }
      setHasSetInfo(true);
      return;
    }

    if (message.trim()) {
      try {
        const { error } = await (supabase as any)
          .from('chat_messages')
          .insert({
            session_id: sessionId,
            sender_type: 'user',
            message: message.trim(),
            user_name: userName,
            user_email: userEmail,
          });

        if (error) throw error;

        // Send email notification
        await supabase.functions.invoke('send-chat-notification', {
          body: {
            userName,
            userEmail,
            message: message.trim(),
            sessionId,
          },
        });

        setMessage("");
        
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
      } catch (error) {
        console.error('Error sending message:', error);
        toast({
          title: "Error sending message",
          description: "Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-primary hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open customer support chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-card rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4">
              <h3 className="text-lg font-bold text-primary-foreground">
                Customer Support
              </h3>
              <p className="text-sm text-primary-foreground/90">
                We typically reply in a few minutes
              </p>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-card/95 backdrop-blur-sm">
              {!hasSetInfo ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Please enter your details to start chatting:</p>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Your name"
                    className="glass-card"
                  />
                  <Input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Your email"
                    type="email"
                    className="glass-card"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3 rounded-lg ${
                        msg.sender_type === 'user'
                          ? 'bg-primary/20 ml-8'
                          : 'bg-secondary/20 mr-8'
                      }`}
                    >
                      <p className="text-xs text-muted-foreground mb-1">
                        {msg.sender_type === 'user' ? 'You' : 'Support'}
                      </p>
                      <p className="text-sm text-foreground">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t border-border/50 bg-card/95 backdrop-blur-sm">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={hasSetInfo ? "Type your message..." : "Click send to continue"}
                  className="glass-card"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button 
                  onClick={handleSend}
                  size="icon"
                  className="glow-primary shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Or email us at{" "}
                <a href="mailto:siteflicker@gmail.com" className="text-primary hover:underline">
                  siteflicker@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomerSupportChat;
