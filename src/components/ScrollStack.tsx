import { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollStackItemProps {
  children: ReactNode;
  index?: number;
  total?: number;
}

export const ScrollStackItem = ({ children, index = 0, total = 1 }: ScrollStackItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0.8, 1, 1, 0.8]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [100, 0, 0, -100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
        zIndex: total - index,
      }}
      className="sticky top-24 mb-8"
    >
      {children}
    </motion.div>
  );
};

interface ScrollStackProps {
  children: ReactNode;
}

const ScrollStack = ({ children }: ScrollStackProps) => {
  const [items, setItems] = useState<ReactNode[]>([]);

  useEffect(() => {
    const childArray = Array.isArray(children) ? children : [children];
    setItems(childArray);
  }, [children]);

  return (
    <div className="relative py-12">
      {items.map((child, index) => {
        if (child && typeof child === "object" && "type" in child && child.type === ScrollStackItem) {
          return (
            <ScrollStackItem key={index} index={index} total={items.length}>
              {(child as any).props.children}
            </ScrollStackItem>
          );
        }
        return (
          <ScrollStackItem key={index} index={index} total={items.length}>
            {child}
          </ScrollStackItem>
        );
      })}
    </div>
  );
};

export default ScrollStack;
