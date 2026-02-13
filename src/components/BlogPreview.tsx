import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Como reconhecer os sinais de burnout",
    author: "Dra. Ana Silva",
    excerpt: "O burnout é um estado de esgotamento emocional, físico e mental causado pelo stress prolongado. Saiba como identificar os primeiros sinais.",
    date: "10 Fev 2026",
  },
  {
    title: "A importância da saúde mental no trabalho",
    author: "Dr. João Santos",
    excerpt: "Descubra estratégias práticas para manter o equilíbrio emocional e aumentar a produtividade no ambiente profissional.",
    date: "5 Fev 2026",
  },
  {
    title: "Ansiedade: quando procurar ajuda profissional",
    author: "Dra. Maria Costa",
    excerpt: "A ansiedade é uma emoção normal, mas quando se torna excessiva pode afetar a qualidade de vida. Saiba quando é hora de pedir ajuda.",
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
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Últimos artigos
          </p>
          <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-4xl">
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
                  <p className="mb-2 text-xs font-medium text-primary">{post.date}</p>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{post.author}</p>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:underline">
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
