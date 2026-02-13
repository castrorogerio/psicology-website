import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    text: "Encontrei aqui o apoio que precisava para ultrapassar uma fase difícil. A abordagem é profissional e muito humana.",
  },
  {
    name: "Ricardo P.",
    text: "As consultas ajudaram-me a ganhar uma nova perspetiva sobre os meus desafios. Recomendo a quem procura orientação profissional.",
  },
  {
    name: "Sofia L.",
    text: "Um espaço seguro e acolhedor. Senti-me ouvida e compreendida desde a primeira sessão.",
  },
  {
    name: "Miguel A.",
    text: "A terapia de casal foi transformadora para a nossa relação. Obrigado pelo profissionalismo e dedicação.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testemunhos" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-base font-medium uppercase tracking-widest text-primary">
            O que dizem os nossos clientes
          </p>
          <h2 className="mb-12 font-display text-4xl font-bold text-foreground md:text-5xl">
            Testemunhos
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl bg-background p-8 shadow-md text-center"
            >
              <Quote className="mx-auto mb-4 h-8 w-8 text-primary/30" />
              <p className="mb-6 text-xl italic leading-relaxed text-muted-foreground">
                "{testimonials[current].text}"
              </p>
              <p className="font-display text-lg font-semibold text-foreground">
                {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === current ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Testemunho ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
