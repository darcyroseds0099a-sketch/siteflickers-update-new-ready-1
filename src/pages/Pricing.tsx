import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PaymentDialog from "@/components/PaymentDialog";
import ClickSpark from "@/components/ClickSpark";

const Pricing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  const packages = [
    {
      name: "Website Only",
      price: "$999",
      description: "Perfect for startups and small businesses",
      features: [
        "Custom Website Design",
        "Responsive Layout",
        "5 Pages Included",
        "Basic SEO Setup",
        "1 Month Support",
      ],
      popular: false,
    },
    {
      name: "Digital Marketing Only",
      price: "$500",
      description: "Boost your online presence",
      features: [
        "Social Media Management",
        "Content Strategy",
        "Monthly Analytics Report",
        "Ad Campaign Setup",
        "Email Marketing",
      ],
      popular: false,
    },
    {
      name: "Website + Digital Marketing",
      price: "$1,239",
      description: "Complete digital presence starter",
      features: [
        "Everything in Website Only",
        "Everything in Digital Marketing",
        "Integrated Analytics",
        "2 Months Support",
        "Priority Updates",
      ],
      popular: true,
    },
    {
      name: "Full Package",
      price: "$2,500",
      description: "Website + SEO + Digital Marketing",
      features: [
        "Premium Website Design",
        "Advanced SEO Optimization",
        "Complete Digital Marketing",
        "Monthly Performance Reports",
        "3 Months Priority Support",
        "Content Management System",
      ],
      popular: false,
    },
    {
      name: "Enterprise AI Integration",
      price: "$3,499",
      description: "Complete solution with AI-powered features",
      features: [
        "Everything in Full Package",
        "Custom AI Chatbot Integration",
        "Automated Customer Support",
        "AI-Powered Analytics",
        "Machine Learning Insights",
        "6 Months Premium Support",
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your <span className="text-gradient">Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect package to transform your digital presence
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-xl relative ${
                pkg.popular ? "ring-2 ring-primary glow-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gradient">
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <ClickSpark
                sparkColor={pkg.popular ? "hsl(194, 100%, 50%)" : "hsl(276, 88%, 53%)"}
                sparkSize={10}
                sparkRadius={20}
                sparkCount={10}
                duration={500}
              >
                <Button
                  onClick={() => setSelectedPlan({ name: pkg.name, price: pkg.price })}
                  className={`w-full ${
                    pkg.popular ? "glow-primary" : ""
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get This Plan
                </Button>
              </ClickSpark>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center glass-card p-12 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss a tailored package that
            perfectly fits your needs and budget.
          </p>
          <ClickSpark
            sparkColor="hsl(194, 100%, 50%)"
            sparkSize={12}
            sparkRadius={25}
            sparkCount={12}
            duration={600}
          >
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="glow-primary"
            >
              Contact Us for Custom Quote
            </Button>
          </ClickSpark>
        </motion.div>
      </div>

      {/* Payment Dialog */}
      <PaymentDialog
        open={selectedPlan !== null}
        onOpenChange={(open) => !open && setSelectedPlan(null)}
        planName={selectedPlan?.name || ""}
        price={selectedPlan?.price || ""}
      />
    </main>
  );
};

export default Pricing;
