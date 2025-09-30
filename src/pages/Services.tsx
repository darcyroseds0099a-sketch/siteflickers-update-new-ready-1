import { motion } from "framer-motion";
import { Globe, Code, Search, TrendingUp, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Building",
    description:
      "Custom-designed websites that perfectly represent your brand. From landing pages to complex web applications, we create digital experiences that engage and convert.",
    features: ["Responsive Design", "User-Centric UX", "Brand Integration", "Fast Performance"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Robust, scalable web applications built with modern technologies. We specialize in creating high-performance solutions tailored to your unique business needs.",
    features: ["React & Next.js", "Custom Solutions", "API Integration", "Cloud Deployment"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies that improve your search rankings and drive organic traffic. We optimize every aspect of your digital presence for maximum visibility.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Analytics & Reporting"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns that deliver results. From social media to email marketing, we create strategies that grow your audience and boost conversions.",
    features: ["Social Media", "Email Campaigns", "Content Marketing", "Analytics"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Harness the power of artificial intelligence to automate processes, enhance user experiences, and gain competitive advantages with cutting-edge AI solutions.",
    features: ["Chatbots", "Automation", "Machine Learning", "Predictive Analytics"],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and drive sustainable growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl hover:glow-primary transition-all duration-300"
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-8">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-secondary p-[2px] glow-primary">
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center glass-card p-12 rounded-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your digital presence and achieve your business goals
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold glow-primary transition-all duration-300"
          >
            Contact Us Today
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
