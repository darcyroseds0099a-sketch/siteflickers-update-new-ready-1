import { motion } from "framer-motion";
import { Target, Eye, Zap, Users } from "lucide-react";

const milestones = [
  { year: "2020", title: "Founded", description: "Siteflickers was born with a vision to revolutionize digital solutions" },
  { year: "2021", title: "Expansion", description: "Grew our team and expanded service offerings to include AI integration" },
  { year: "2022", title: "Recognition", description: "Awarded 'Best Digital Agency' by industry leaders" },
  { year: "2023", title: "Innovation", description: "Launched cutting-edge web development frameworks" },
  { year: "2024", title: "Global Reach", description: "Serving clients across 25+ countries worldwide" },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative digital solutions that drive growth and create lasting impact.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the global leader in digital transformation, setting new standards for creativity and technology.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly push boundaries, embracing emerging technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in strong partnerships, working closely with clients to achieve shared success.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Siteflickers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering digital transformation through innovation, creativity, and cutting-edge technology
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="glass-card p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Siteflickers emerged from a simple yet powerful vision: to bridge the gap between innovative
                technology and business success. Founded by a team of passionate developers and designers,
                we've grown into a leading digital agency trusted by businesses worldwide.
              </p>
              <p>
                Our journey has been defined by relentless innovation and an unwavering commitment to
                excellence. We don't just build websites and applications—we craft digital experiences that
                transform businesses and captivate audiences.
              </p>
              <p>
                Today, we're proud to be at the forefront of digital transformation, helping companies
                leverage the latest technologies including AI, cloud computing, and advanced web frameworks
                to achieve their goals and exceed expectations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card p-6 rounded-lg inline-block">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-primary glow-primary shrink-0" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
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
                  className="glass-card p-8 rounded-xl hover:glow-primary transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary p-[2px] glow-primary mb-6">
                    <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
