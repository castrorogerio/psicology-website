import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Flame, Users, Baby, Frown, SmilePlus, Shield, MessageCircle } from "lucide-react";

const featuredServices = [
  {
    icon: Brain,
    title: "Perturbação do Espetro do Autismo (PEA)",
    description: "Avaliação e intervenção especializada em dificuldades na comunicação social e padrões de comportamento repetitivos em crianças e jovens.",
  },
  {
    icon: Flame,
    title: "PHDA",
    description: "Perturbação de Hiperatividade com Défice de Atenção. Estratégias práticas para melhorar o foco, a organização e o controlo de impulsos.",
  },
];

const specialties = [
  { icon: Heart, label: "Dislexia" },
  { icon: Frown, label: "Disgrafia" },
  { icon: Baby, label: "Atraso Global" },
  { icon: Users, label: "Pert. Comunicação" },
  { icon: Shield, label: "Pert. Motoras" },
  { icon: SmilePlus, label: "Pert. Comportamento" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-base font-medium uppercase tracking-widest text-primary">
            Como posso ajudar
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Serviços
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            Avaliação e intervenção nas principais perturbações do neurodesenvolvimento em crianças e jovens.
          </p>
        </motion.div>

        {/* Featured services */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-none bg-background shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Specialty grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="cursor-pointer border-none bg-background shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-3 p-5">
                  <spec.icon className="h-7 w-7 text-primary" />
                  <span className="text-base font-medium text-foreground">{spec.label}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-base text-muted-foreground"
        >
          Não encontra o que procura?{" "}
          <a
            href="https://wa.me/351900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            <MessageCircle className="mr-1 inline h-4 w-4" />
            Contacte-nos pelo WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
