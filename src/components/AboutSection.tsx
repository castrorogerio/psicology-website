import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-2 text-center text-base font-medium uppercase tracking-widest text-primary">
            Conheça-nos
          </p>
          <h2 className="mb-10 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
            Sobre Mim
          </h2>

          <Tabs defaultValue="sobre" className="w-full">
            <TabsList className="mx-auto mb-6 grid w-full max-w-sm grid-cols-2">
              <TabsTrigger value="sobre" className="gap-2">
                <User className="h-4 w-4" />
                Sobre Mim
              </TabsTrigger>
              <TabsTrigger value="formacao" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Formação
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sobre" className="rounded-lg bg-card p-6 shadow-sm">
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                Sou a Anabela Castro, neuropsicóloga especializada na avaliação e intervenção em perturbações do neurodesenvolvimento em crianças e jovens. Acredito que cada criança tem um potencial único e merece um acompanhamento adaptado às suas necessidades.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalho com famílias na identificação precoce e intervenção em Perturbação do Espetro do Autismo, PHDA, Dislexia, Perturbações da Comunicação e Atraso Global do Desenvolvimento. O meu objetivo é potenciar as competências de cada criança e apoiar os pais neste percurso.
              </p>
            </TabsContent>

            <TabsContent value="formacao" className="rounded-lg bg-card p-6 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Mestrado em Neuropsicologia",
                  "Especialização em Perturbações do Neurodesenvolvimento",
                  "Formação em Avaliação e Intervenção na Perturbação do Espetro do Autismo",
                  "Membro efetivo da Ordem dos Psicólogos Portugueses (OPP)",
                  "Formação contínua em PHDA e Perturbações Específicas da Aprendizagem",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
