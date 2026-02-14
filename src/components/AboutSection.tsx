import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";

const experienceEntries = [
  {
    clinic: "Douro Vida",
    period: "2026 – presente",
    current: true,
  },
  {
    clinic: "NeuroImprove Clinic",
    period: "2021 – 2026",
    current: false,
  },
  {
    clinic: "Clínica da Vila",
    period: "2021 – 2026",
    current: false,
  },
  {
    clinic: "Oficina Terapêutica",
    period: "2021 – 2025",
    current: false,
  },
  {
    clinic: "O2A – Centro de Terapia e Desenvolvimento",
    period: "2021 – 2025",
    current: false,
  },
  {
    clinic: "Arco Iris – Centro Psicopedagógico e Terapêutico",
    period: "2019 – 2022",
    current: false,
  },
  {
    clinic: "Cuid&Educa – Psicologia, Terapia da Fala e Ocupacional e Intervenção Educativa",
    period: "2016 – 2023",
    current: false,
  },
  {
    clinic: "Elos – Núcleo de Terapia, Educação, Formação e Investigação",
    period: "2016 – 2019",
    current: false,
  },
];

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
            <TabsList className="mx-auto mb-6 grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="sobre" className="gap-2">
                <User className="h-4 w-4" />
                Sobre Mim
              </TabsTrigger>
              <TabsTrigger value="experiencia" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Experiência Profissional
              </TabsTrigger>
              <TabsTrigger value="formacao" className="gap-2">
                <GraduationCap className="h-4 w-4" />
                Formação
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sobre" className="rounded-lg bg-card p-6 shadow-sm">
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                Sou a Anabela Castro, Psicóloga Clínica com especialização avançada em Intervenção Multidisciplinar em Perturbações do Neurodesenvolvimento, com especial foco em Perturbação do Espetro do Autismo. Com mais de 10 anos de experiência clínica, dedico a minha prática à avaliação, diagnóstico e intervenção em perturbações do neurodesenvolvimento em crianças, jovens e suas famílias.
              </p>
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                Ao longo do meu percurso profissional, desenvolvi uma vasta experiência em diversas áreas da psicologia clínica infantil e juvenil, incluindo Perturbação de Hiperatividade/Défice de Atenção (PHDA), Perturbações da Comunicação e Linguagem, Perturbações do Comportamento, Ansiedade, Regulação Emocional, entre outras.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que cada criança tem um potencial único. O meu compromisso é oferecer um acompanhamento rigoroso, empático e adaptado, trabalhando em estreita colaboração com as famílias e equipas multidisciplinares para promover o desenvolvimento e o bem-estar de cada criança.
              </p>
            </TabsContent>

            <TabsContent value="experiencia" className="rounded-lg bg-card p-6 shadow-sm">
              <div className="relative space-y-0">
                {experienceEntries.map((entry, i) => (
                  <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    {/* Timeline line & dot */}
                    <div className="flex flex-col items-center">
                      <span
                        className={`mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 ${
                          entry.current
                            ? "border-primary bg-primary"
                            : "border-primary/60 bg-background"
                        }`}
                      />
                      {i < experienceEntries.length - 1 && (
                        <span className="w-px flex-1 bg-primary/20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <p className="text-base font-semibold text-foreground leading-snug">
                        Psicóloga Clínica
                      </p>
                      <p className="text-base text-muted-foreground">{entry.clinic}</p>
                      <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground/70">
                        <span>{entry.period}</span>
                        {entry.current && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            Atual
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="formacao" className="rounded-lg bg-card p-6 shadow-sm">
              {/* Core qualifications */}
              <h3 className="mb-4 text-lg font-semibold text-foreground">Habilitações</h3>
              <ul className="space-y-3">
                {[
                  "Mestrado em Psicologia Clínica e da Saúde",
                  "Especialização em Perturbações do Neurodesenvolvimento",
                  "Especialização Avançada em Intervenção Multidisciplinar na Perturbação do Espetro do Autismo (PEA)",
                  "Formação em Avaliação e Intervenção na Perturbação do Espetro do Autismo",
                  "Membro efetivo da Ordem dos Psicólogos Portugueses (OPP - 23102)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Complementary training */}
              <h3 className="mb-4 mt-8 text-lg font-semibold text-foreground">Formações Complementares</h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Especialização Avançada em Intervenção Multidisciplinar na Perturbação do Espetro do Autismo (PEA)",
                    institution: "CRIAP, Porto",
                    year: "2025",
                  },
                  {
                    title: "Avaliação Neuropsicológica com a BANC",
                    institution: "Hogrefe, Lisboa",
                    year: "2024",
                  },
                  {
                    title: "Autism Diagnostic Observational Schedule",
                    institution: "Clinica da Fala, Porto",
                    year: "2020",
                  },
                  {
                    title: "Intervenção com Crianças e Jovens em Risco",
                    institution: "Ordem dos Psicólogos, Porto",
                    year: "2020",
                  },
                  {
                    title: "Intervenção em Psicologia do Desporto (Curso Intensivo)",
                    institution: "(Re)Construir – Psicologia e Desenvolvimento Pessoal, Vila Nova de Gaia",
                    year: "2020",
                  },
                  {
                    title: "Comunicação Interpessoal e Partilha de Informação",
                    institution: "Ordem dos Psicólogos, Porto",
                    year: "2020",
                  },
                  {
                    title: "Literacia em Saúde – O Papel do Psicólogo",
                    institution: "Ordem dos Psicólogos, Porto",
                    year: "2020",
                  },
                  {
                    title: "Modelo TEACCH de Avaliação e Intervenção nas PEA",
                    institution: "ELOS, Porto",
                    year: "2016",
                  },
                ].map((course, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                    <div>
                      <span className="font-medium text-foreground">{course.title}</span>
                      <span className="block text-sm text-muted-foreground/70">
                        {course.institution} ({course.year})
                      </span>
                    </div>
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
