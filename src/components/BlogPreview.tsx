import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Sinais precoces da Perturbação do Espetro do Autismo",
    author: "Dra. Anabela Castro",
    excerpt: "Identificar os primeiros sinais de PEA é fundamental para uma intervenção atempada. Conheça os marcos do desenvolvimento a observar nos primeiros anos de vida.",
    date: "10 Fev 2026",
  },
  {
    title: "PHDA na escola: estratégias para pais e professores",
    author: "Dra. Anabela Castro",
    excerpt: "A PHDA pode impactar o desempenho escolar e as relações sociais. Descubra estratégias práticas para apoiar crianças com défice de atenção e hiperatividade.",
    date: "5 Fev 2026",
  },
  {
    title: "Dislexia: como identificar e intervir precocemente",
    author: "Dra. Inês Ferreira",
    excerpt: "A dislexia afeta a capacidade de leitura e escrita, mas com uma intervenção adequada é possível desenvolver estratégias eficazes de aprendizagem.",
    date: "28 Jan 2026",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-base font-medium uppercase tracking-widest text-primary">
            Últimos artigos
          </p>
          <h2 className="mb-12 font-display text-4xl font-bold text-foreground md:text-5xl">
            Blog
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full cursor-pointer border-none shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <p className="mb-2 text-sm font-medium text-primary">{post.date}</p>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">{post.author}</p>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                      Ler artigo <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
