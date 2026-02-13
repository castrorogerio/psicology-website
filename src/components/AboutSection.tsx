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
          <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Conheça-nos
          </p>
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
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
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Sou psicóloga clínica com anos de experiência no acompanhamento de adultos, adolescentes e casais. Acredito que cada pessoa é única e merece um espaço seguro para explorar os seus pensamentos, emoções e desafios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A minha abordagem é integrativa, combinando técnicas cognitivo-comportamentais com práticas humanistas, para proporcionar um acompanhamento personalizado e eficaz. O meu objetivo é ajudá-lo a encontrar ferramentas para lidar com as dificuldades do dia a dia e promover o seu bem-estar emocional.
              </p>
            </TabsContent>

            <TabsContent value="formacao" className="rounded-lg bg-card p-6 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Mestrado em Psicologia Clínica e da Saúde",
                  "Pós-graduação em Terapia Cognitivo-Comportamental",
                  "Especialização em Psicologia da Criança e do Adolescente",
                  "Membro efetivo da Ordem dos Psicólogos Portugueses (OPP)",
                  "Formação contínua em Mindfulness e Gestão de Stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
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
