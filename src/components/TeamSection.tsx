import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dra. Ana Silva",
    opp: "OPP 12345",
    bio: "Psicóloga clínica especializada em ansiedade e depressão, com abordagem cognitivo-comportamental.",
  },
  {
    name: "Dr. João Santos",
    opp: "OPP 67890",
    bio: "Psicólogo clínico com foco em terapia de casal e relações interpessoais.",
  },
  {
    name: "Dra. Maria Costa",
    opp: "OPP 11223",
    bio: "Especialista em psicologia infantil e do adolescente, com formação em terapia lúdica.",
  },
];

const TeamSection = () => {
  return (
    <section id="equipa" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            A nossa equipa
          </p>
          <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-4xl">
            Equipa
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-sage-100">
                    <span className="font-display text-2xl font-semibold text-primary">
                      {member.name.split(" ").slice(-1)[0][0]}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="mb-3 text-xs font-medium text-primary">{member.opp}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
