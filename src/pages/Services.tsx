import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Code, Search, Smartphone, Sparkles, Bot, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import ClickSpark from "@/components/ClickSpark";

const services = [
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Design & Development",
    description: "Build powerful online stores that convert visitors into customers with secure payment integration, inventory management, and seamless checkout experiences.",
    features: [
      "Custom ecommerce platform development",
      "Payment gateway integration (Stripe, PayPal)",
      "Inventory management systems",
      "Mobile-responsive shopping experiences",
      "Conversion rate optimization",
      "Analytics & tracking setup",
    ],
  },
  {
    icon: Code,
    title: "Custom Web Development",
    description: "From simple landing pages to complex web applications, we build scalable, high-performance websites using modern technologies like React, Node.js, and cloud infrastructure.",
    features: [
      "React & Next.js development",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "Database design & optimization",
      "Cloud hosting & deployment",
      "Performance optimization",
    ],
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Increase your online visibility and drive organic traffic with data-driven SEO strategies, content marketing, and targeted digital campaigns.",
    features: [
      "Technical SEO audit & optimization",
      "Keyword research & strategy",
      "Content marketing & copywriting",
      "Link building campaigns",
      "Local SEO optimization",
      "Analytics & performance tracking",
    ],
  },
  {
    icon: Bot,
    title: "AI Integration & Automation",
    description: "Leverage the power of artificial intelligence to automate workflows, enhance user experiences, and gain competitive advantages in your industry.",
    features: [
      "AI chatbots & virtual assistants",
      "Automated content generation",
      "Predictive analytics & insights",
      "Process automation solutions",
      "Machine learning model integration",
      "Natural language processing",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices, helping you reach customers wherever they are.",
    features: [
      "iOS & Android app development",
      "Cross-platform solutions (React Native)",
      "App Store optimization",
      "Push notification systems",
      "In-app purchase integration",
      "Offline functionality",
    ],
  },
  {
    icon: Sparkles,
    title: "Brand Identity & UI/UX Design",
    description: "Create compelling brand identities and user interfaces that resonate with your target audience and drive meaningful engagement.",
    features: [
      "Logo & brand identity design",
      "UI/UX design & prototyping",
      "Design systems & style guides",
      "User research & testing",
      "Wireframing & mockups",
      "Design-to-development handoff",
    ],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-12 sm:mb-16 md:mb-20">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card text-xs sm:text-sm border border-primary/30 mb-6 sm:mb-8">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-foreground font-semibold">
                Comprehensive Digital Solutions
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Transform your digital presence with our full-stack development, design, and marketing services. From concept to launch, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Scroll Stack */}
      <section className="px-4">
        <div className="container mx-auto max-w-7xl">
          <ScrollStack>
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <ScrollStackItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 md:p-12 rounded-3xl"
                  >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                      {/* Icon & Title Side */}
                      <div className="space-y-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-primary">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <ClickSpark
                          sparkColor="hsl(var(--primary))"
                          sparkSize={8}
                          sparkRadius={20}
                          sparkCount={10}
                          duration={500}
                        >
                          <Button
                            size="lg"
                            className="glow-primary w-full md:w-auto"
                            asChild
                          >
                            <Link to="/contact">
                              Get Started
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                          </Button>
                        </ClickSpark>
                      </div>

                      {/* Features Side */}
                      <div className="space-y-6">
                        <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          What's Included
                        </h3>
                        <ul className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                              </div>
                              <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mt-16 sm:mt-20 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl glass-card p-6 sm:p-8 md:p-12 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-gradient opacity-50" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <ClickSpark
              sparkColor="hsl(var(--primary))"
              sparkSize={10}
              sparkRadius={25}
              sparkCount={12}
              duration={600}
            >
              <Button
                size="lg"
                className="glow-primary text-base md:text-lg px-6 md:px-10"
                asChild
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </ClickSpark>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
