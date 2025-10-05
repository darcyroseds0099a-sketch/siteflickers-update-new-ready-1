import { motion } from "framer-motion";
import { Users, Target, Award, Rocket, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "100+", label: "Happy Clients" },
  { number: "200+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We work as an extension of your team, understanding your goals and delivering results that matter.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Excellence is not negotiable. Every line of code, every design element is crafted with precision and attention to detail.",
  },
  {
    icon: Rocket,
    title: "Results Oriented",
    description: "We measure our success by yours. Our solutions are designed to drive tangible business outcomes and ROI.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-gradient">Siteflickers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a leading digital agency specializing in web development, ecommerce solutions, and AI integration. Our mission is to transform your digital presence and propel your business into the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Partner in <span className="text-gradient">Digital Innovation</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Siteflickers, we're redefining the digital landscape with creative solutions and innovative approaches. As a leading digital services provider, we combine technical expertise with creative vision to deliver impactful results.
                </p>
                <p>
                  Whether it's building an ecommerce empire, crafting a stunning web application, or integrating AI to automate your processes, we transform your ideas into powerful digital experiences that drive real business growth.
                </p>
                <p>
                  Our team of skilled designers, developers, and strategists work closely with you, ensuring clear communication and a seamless process from concept to launch. We don't just build websites—we create digital experiences that make your business stand out.
                </p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                {[
                  "Full-stack web development expertise",
                  "AI & machine learning integration",
                  "Ecommerce platform specialists",
                  "SEO & digital marketing masters",
                  "Mobile-first responsive design",
                  "Ongoing support & maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 mb-20 bg-card/30 py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 glow-primary">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl glass-card p-12 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-gradient opacity-50" />
          <div className="relative z-10">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Let's discuss your project and create something extraordinary.
            </p>
            <Button
              size="lg"
              className="glow-primary text-lg px-10"
              asChild
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
