import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName: string;
  price: string;
}

const PaymentDialog = ({ open, onOpenChange, planName, price }: PaymentDialogProps) => {
  const [selectedMethod, setSelectedMethod] = useState<"card" | "paypal" | null>(null);

  const handlePaymentSelect = (method: "card" | "paypal") => {
    setSelectedMethod(method);
    
    if (method === "paypal") {
      // Redirect to PayPal - you'll need to integrate PayPal API with Cloud
      window.open("https://www.paypal.com/paypalme/yourpaypalhandle", "_blank");
      setTimeout(() => {
        onOpenChange(false);
        setSelectedMethod(null);
      }, 500);
    } else {
      // For card payments, you'll need Stripe integration with Cloud
      setTimeout(() => {
        onOpenChange(false);
        setSelectedMethod(null);
      }, 1000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose Payment Method</DialogTitle>
          <DialogDescription>
            You selected {planName} - {price}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            onClick={() => handlePaymentSelect("card")}
            className="w-full h-24 text-lg flex-col gap-2"
            variant="outline"
            disabled={selectedMethod !== null}
          >
            <div className="flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              <div className="flex gap-2">
                <svg className="h-8 w-12" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#EB001B"/>
                  <rect x="16" width="16" height="32" fill="#F79E1B"/>
                  <rect x="16" width="32" height="32" rx="4" fill="#FF5F00" fillOpacity="0.5"/>
                </svg>
                <svg className="h-8 w-12" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#1434CB"/>
                  <path d="M20 10h8v12h-8z" fill="#fff"/>
                </svg>
              </div>
            </div>
            <span className="text-sm">
              {selectedMethod === "card" ? "Processing..." : "Credit / Debit Card"}
            </span>
          </Button>
          <Button
            onClick={() => handlePaymentSelect("paypal")}
            className="w-full h-24 text-lg flex-col gap-2"
            variant="outline"
            disabled={selectedMethod !== null}
          >
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.01-.3.04-.45l1.32-6.65c.06-.3.24-.54.49-.7.25-.15.55-.19.83-.12h3.28c2.42 0 4.31-.57 5.47-1.65 1.16-1.08 1.62-2.68 1.33-4.64-.28-1.96-1.21-3.39-2.7-4.14C16.62 2.5 14.67 2 12.21 2H5.53c-.56 0-1.04.4-1.14.95L1.07 19.4a.546.546 0 0 0 .11.46c.11.14.27.22.45.22h4.36l1.33-6.7v-.01h-.01z" fill="#003087"/>
              <path d="M20.7 7.53c-.29 1.94-1.16 3.36-2.58 4.22-1.42.86-3.31 1.27-5.62 1.22l-.86 4.35a.546.546 0 0 1-.11.23.56.56 0 0 1-.38.16H7.1l-.97 4.87c-.03.15-.01.3.04.45.06.15.16.27.29.36.13.09.28.13.43.13h3.68c.28 0 .52-.2.57-.47l1.41-7.11h2.67c2.41 0 4.29-.57 5.45-1.64 1.16-1.08 1.62-2.67 1.33-4.63-.01-.04-.02-.07-.03-.11-.01-.03-.02-.07-.03-.1-.04-.13-.08-.26-.13-.39-.05-.12-.1-.24-.15-.36-.06-.12-.12-.24-.19-.35z" fill="#0070E0"/>
              <path d="M9.18 7.95c.09-.46.48-.78.95-.78h5.36c.87 0 1.66.09 2.37.28.71.19 1.33.48 1.86.87.27.2.5.42.71.66.21.24.38.5.53.78.07.14.14.28.19.43.06.15.11.3.15.45.18.66.26 1.37.21 2.13-.29 1.96-1.21 3.38-2.69 4.13-1.48.75-3.43 1.13-5.81 1.13H9.73c-.28 0-.53.19-.6.46L7.8 24.16a.3.3 0 0 0 .06.25c.06.08.15.12.25.12h3.82c.49 0 .91-.35 1-.83l1.42-7.17h2.91c2.66 0 4.73-.63 6.01-1.82 1.28-1.19 1.78-2.94 1.45-5.1-.33-2.16-1.34-3.74-2.97-4.57C20.13 4.21 18.01 3.8 15.4 3.8H8.31c-.62 0-1.15.44-1.26 1.05L3.55 21.3c-.04.2 0 .4.11.57.11.17.29.27.49.27h4.81l.99-5.01 1.32-6.69v.02-.01-.01z" fill="#003087"/>
            </svg>
            <span className="text-sm">
              {selectedMethod === "paypal" ? "Redirecting..." : "PayPal"}
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
