import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Brain, Lightbulb, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro Contacto",
    description:
      "Entre em contacto por telefone, WhatsApp ou formulário. Conversamos sobre as suas preocupações e agendamos a primeira consulta.",
  },
  {
    icon: ClipboardList,
    title: "Entrevista Clínica",
    description:
      "Reunião com os pais para recolher a história de desenvolvimento, antecedentes clínicos e identificar as principais dificuldades da criança.",
  },
  {
    icon: Brain,
    title: "Avaliação Neuropsicológica",
    description:
      "Aplicação de provas padronizadas para avaliar as competências cognitivas, linguísticas, motoras e comportamentais da criança.",
  },
  {
    icon: Lightbulb,
    title: "Devolutiva e Plano",
    description:
      "Apresentação dos resultados e elaboração de um plano de intervenção personalizado, com estratégias para casa e para a escola.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento",
    description:
      "Sessões regulares de intervenção e reavaliação periódica para monitorizar o progresso e ajustar as estratégias.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-base font-medium uppercase tracking-widest text-primary">
            Passo a passo
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Como Funciona
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-muted-foreground">
            Do primeiro contacto ao acompanhamento contínuo — saiba o que esperar em cada etapa.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-10 flex items-start gap-5 last:mb-0 md:gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step number + icon */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md md:mx-auto">
                <step.icon className="h-5 w-5" />
              </div>

              {/* Content card */}
              <div
                className={`flex-1 rounded-lg bg-card p-5 shadow-sm ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <span className="mb-1 block text-sm font-semibold text-primary">
                  Passo {i + 1}
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
