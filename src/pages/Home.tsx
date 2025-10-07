import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Rocket, TrendingUp, CheckCircle2, Star, Code, Palette, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Scene3D from "@/components/Scene3D";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "100%", label: "Positive Rating" },
    { value: "100+", label: "Happy Clients" },
  ];

  const services = [
    {
      icon: Palette,
      title: "Website Design",
      description: "At Siteflickers, we craft visually appealing, fully responsive, highly interactive designs that create seamless user experiences. What sets us apart is our attention to detail and a thorough understanding of modern design trends, ensuring every website reflects the essence of your brand.",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Our mission is to build websites that empower businesses and brands to grow and make a global impact. At Siteflickers, we focus on expanding your market reach, driving sales, and increasing brand awareness through custom web development services.",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "At Siteflickers, we help brands grow through strategic digital marketing that delivers real impact. From building your online presence to driving targeted campaigns, we combine data-driven insights with creative strategies to reach your audience effectively.",
    },
  ];

  const whyChoose = [
    {
      title: "Plan & Strategy",
      description: "We specialize in custom web design services efficiently planning and creating tactful strategies based on your specific needs. We examine the project's scope to ensure its efficacy staying true to our goal of delivering solutions that align perfectly with your business objectives.",
    },
    {
      title: "Design & Develop",
      description: "We design and develop user-friendly websites based on our strategy to specifically target your business niche and current trends certifying growth and boosting user engagement. Every website we create is optimized to deliver seamless functionality and a memorable user experience.",
    },
    {
      title: "Test & Deliver",
      description: "We guarantee thorough quality assurance checks and ensure flawless functionality testing before the final delivery to our clients per their final approval. This meticulous process ensures that your website meets and exceeds industry standards and user expectations.",
    },
  ];

  const projects = [
    {
      title: "Ecommerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Digital Marketing Campaign",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "What services does Siteflickers offer?",
      answer: "We specialize in web design, web development, and digital marketing to help businesses establish a strong online presence and achieve their goals.",
    },
    {
      question: "Why should I choose Siteflickers for my project?",
      answer: "Siteflickers is known for delivering customized solutions, innovative designs, and measurable results. We prioritize client collaboration to ensure your vision is brought to life precisely.",
    },
    {
      question: "Do you offer customized web solutions?",
      answer: "Absolutely! We provide fully customized web solutions that align with your specific business needs and target audience, ensuring a unique and impactful digital presence.",
    },
    {
      question: "How does the project process work at Siteflickers?",
      answer: "Our process includes planning, strategy creation, design and development, thorough testing, and timely delivery. We keep you involved and informed at every step for a seamless experience.",
    },
    {
      question: "Can Siteflickers help improve my website's visibility online?",
      answer: "Yes, our digital marketing services, including SEO, PPC, and social media management, are designed to increase your website's visibility, drive traffic, and boost engagement.",
    },
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
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                Guiding Through Digital
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Siteflickers is a leading website design and website development company that seamlessly blends creativity with functionality to elevate your online presence. Driven by innovation and a commitment to excellence, we craft visually stunning, high-performing websites customized to the needs of our diverse clientele.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="glow-primary text-lg px-10 py-7 text-primary-foreground font-bold"
                  asChild
                >
                  <Link to="/contact">
                    Get a Free Quote Today!
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Your Partner Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Partner in Innovative{" "}
                <span className="text-gradient">Digital Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Siteflickers, we're redefining the digital industry with creative solutions. As a leading digital services provider, we combine innovation with expertise to deliver impactful results. Our skilled team works closely with you, ensuring clear communication and a seamless process from concept to launch.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether it's web design, development, or digital marketing, we transform your ideas into powerful digital experiences. Let us help your business stand out and thrive in today's competitive market with solutions that are as professional as they are approachable.
              </p>
              <Button size="lg" className="glow-primary" asChild>
                <Link to="/about">
                  More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl glass-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
                  alt="Digital Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary uppercase tracking-wider mb-4 font-semibold">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elevating Your Business with{" "}
              <span className="text-gradient">Innovative Ideas</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
              Turn your ideas into reality with Siteflickers with our top-notch web design services, web development, and digital marketing strategies. Our team works closely with you to ensure each project meets your business goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
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
            className="text-center mt-16"
          >
            <div className="glass-card inline-block p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Transform Your Online Presence with Siteflickers!</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Our team crafts stunning digital experiences that captivate and convert. Let's bring your vision to life together.
              </p>
              <Button size="lg" className="glow-primary" asChild>
                <Link to="/contact">
                  Start Your Journey with Us Today!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary uppercase tracking-wider mb-4 font-semibold">WHO WE ARE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One-Stop Solution To Grow Your Business{" "}
              <span className="text-gradient">Towards Success</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Siteflickers is a digital agency that provides creative, well-tailored, and professional solutions to an array of clients worldwide. Our team of committed experts dedicated to quality helps our valuable clients achieve online success and promote business growth by branding top-notch solutions.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our approach is to understand your individualistic goals and identify your needs. We then gather our expert team ensuring excellence to develop a thorough guide meeting your specific requirements. The collective expertise of our team guarantees:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Identification and solving challenges on time and within budget",
                  "Efficient solutions by applying progressive technologies",
                  "Effortless design and delivery",
                  "100% customer satisfaction",
                  "To continuously work hard to refine our services",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-foreground">
                Our dedicated team will go the extra mile to propel your business towards success and growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl glass-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary uppercase tracking-wider mb-4 font-semibold">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Your Digital Journey with{" "}
              <span className="text-gradient">Innovation, Precision, and Results</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
              Choosing Siteflickers as your digital partner is the one-stop solution you need. We pride ourselves on delivering more than just services—we provide solutions that drive success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/contact">
                Consult With Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary uppercase tracking-wider mb-4 font-semibold">Featured Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects showcasing our expertise and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary text-sm font-medium">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/portfolio">
                All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group"
              >
                <summary className="text-lg font-bold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

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
            <p className="text-primary uppercase tracking-wider mb-4 font-semibold">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's create something <span className="text-gradient">amazing together</span>
            </h2>
            <Button
              size="lg"
              className="glow-primary text-xl px-12 py-8 font-bold"
              asChild
            >
              <Link to="/contact">
                Get a Free Quote
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
