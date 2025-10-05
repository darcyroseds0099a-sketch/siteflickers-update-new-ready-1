import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/Scene3D";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm border border-primary/20"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">
                  Leading Digital Innovation
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Elevate Your Brand with
                <br />
                <span className="text-gradient">Cutting-Edge Digital Solutions</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our mission is to design and develop exceptional digital experiences that showcase your brand's unique identity. Let's explore and grow your online business together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="glow-primary text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 glass-card border-primary/30 hover:border-primary"
                  asChild
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
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

      {/* Features Overview */}
      <section className="py-20 px-4">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovative Design",
                description: "Stunning, modern interfaces that captivate your audience and drive conversions with cutting-edge design principles.",
              },
              {
                icon: Target,
                title: "Precision Development",
                description: "Custom-built solutions using the latest technologies, ensuring your website performs flawlessly across all devices.",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                description: "Data-backed strategies and SEO optimization that deliver measurable growth and maximize your ROI.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-lg hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
};

export default Home;
