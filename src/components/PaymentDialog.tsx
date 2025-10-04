import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet } from "lucide-react";

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
    // Here you would integrate actual payment processing
    setTimeout(() => {
      onOpenChange(false);
      setSelectedMethod(null);
    }, 1000);
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
            className="w-full h-20 text-lg"
            variant="outline"
            disabled={selectedMethod !== null}
          >
            <CreditCard className="mr-2 h-6 w-6" />
            {selectedMethod === "card" ? "Processing..." : "Pay with Card"}
          </Button>
          <Button
            onClick={() => handlePaymentSelect("paypal")}
            className="w-full h-20 text-lg"
            variant="outline"
            disabled={selectedMethod !== null}
          >
            <Wallet className="mr-2 h-6 w-6" />
            {selectedMethod === "paypal" ? "Processing..." : "Pay with PayPal"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
