import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Achievement Marine",
    description: "Premium marine equipment and yacht accessories marketplace",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    tags: ["E-Commerce", "Marine", "Shopify"],
    liveUrl: "https://achievementmarine.com/",
  },
  {
    title: "Keto Chow",
    description: "Complete nutritional meal replacement solution for ketogenic lifestyle",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    tags: ["Health", "E-Commerce", "Nutrition"],
    liveUrl: "https://ketochow.xyz/",
  },
  {
    title: "Bicycle Blue Book",
    description: "The ultimate bicycle valuation and marketplace platform",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop",
    tags: ["Marketplace", "Analytics", "Database"],
    liveUrl: "https://www.bicyclebluebook.com/",
  },
  {
    title: "Farm To People",
    description: "Connecting local farms with communities for fresh, sustainable produce",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
    tags: ["Agriculture", "E-Commerce", "Local"],
    liveUrl: "https://farmtopeople.com/",
  },
];

const Portfolio = () => {
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
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we transform ideas into exceptional digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card overflow-hidden hover:glow-primary transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <Eye className="w-4 h-4" />
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear about your ideas and help bring them to life
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold glow-primary transition-all duration-300"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
};

export default Portfolio;