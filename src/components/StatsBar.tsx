import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Clientes acompanhados" },
  { value: 3000, suffix: "+", label: "Horas de consultas" },
  { value: 10, suffix: "", label: "Anos de experiência" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
      {count.toLocaleString("pt-PT")}
      {suffix}
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium text-sage-200">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
