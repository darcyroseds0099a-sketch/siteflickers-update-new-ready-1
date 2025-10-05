import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Rocket, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/Scene3D";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  const brands = [
    { name: "Tech Corp", logo: "TC" },
    { name: "Digital Solutions", logo: "DS" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Future Systems", logo: "FS" },
    { name: "Cloud Enterprise", logo: "CE" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>

        <div className="container mx-auto px-4 z-10 relative pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm border border-primary/30"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-foreground font-semibold">
                  Leading Digital Innovation Agency
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                Transform Your Digital Presence
                <br />
                <span className="text-gradient">with Siteflickers</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Cutting-edge web development, AI integration, and digital marketing solutions that propel your business into the future. Our mission is to design a website that showcases your brand image—let's explore & grow your online business together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="glow-primary text-lg px-10 py-7 text-primary-foreground font-bold"
                  asChild
                >
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 glass-card border-accent/40 hover:border-accent accent-glow hover:bg-accent/10 font-bold"
                  asChild
                >
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>100+ Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8 font-semibold">
              Trusted All Across The USA
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center w-32 h-20 glass-card rounded-lg border border-border/50 hover:border-primary/30 transition-all"
                >
                  <span className="text-2xl font-bold text-gradient">{brand.logo}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Custom ecommerce design & development, responsive interfaces, secure solutions, SEO optimization, and seamless payment gateway integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Ecommerce Website Design",
                description: "Custom-built online stores with secure payment integration, inventory management, and conversion-optimized checkout flows.",
              },
              {
                icon: Zap,
                title: "Web App Development",
                description: "High-performance web applications using cutting-edge technologies like React, Node.js, and cloud infrastructure.",
              },
              {
                icon: Shield,
                title: "SEO & Digital Marketing",
                description: "Data-driven strategies to boost your online visibility, drive organic traffic, and maximize ROI through targeted campaigns.",
              },
              {
                icon: TrendingUp,
                title: "AI Integration & Automation",
                description: "Leverage artificial intelligence to automate workflows, enhance user experiences, and gain competitive advantages.",
              },
              {
                icon: Sparkles,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android devices.",
              },
              {
                icon: CheckCircle2,
                title: "Brand Identity & UI/UX",
                description: "Compelling brand identities and user interfaces that resonate with your audience and drive engagement.",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="glow-primary text-lg px-8"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">Siteflickers</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Custom Solutions",
                description: "Every project is tailored to your unique business needs and target audience, not cookie-cutter templates.",
              },
              {
                title: "Cutting-Edge Tech",
                description: "We use the latest technologies and frameworks to ensure your website is fast, secure, and scalable.",
              },
              {
                title: "Results-Driven",
                description: "Our focus is on measurable outcomes—increased traffic, higher conversions, and business growth.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="text-gradient">Flick Your Site to Life</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's transform your digital presence with innovative solutions that drive real results. Get your free consultation today.
            </p>
            <Button
              size="lg"
              className="glow-primary text-xl px-12 py-8 font-bold"
              asChild
            >
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
