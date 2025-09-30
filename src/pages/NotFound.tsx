import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Search className="w-6 h-6 text-muted-foreground" />
            <h2 className="text-3xl font-semibold">Page Not Found</h2>
          </div>
        </motion.div>

        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have wandered into the digital void.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="glow-primary"
            asChild
          >
            <Link to="/">
              <Home className="mr-2 w-5 h-5" />
              Return Home
            </Link>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
