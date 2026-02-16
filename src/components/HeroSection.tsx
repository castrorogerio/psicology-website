import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowDown, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-gradient-to-br from-hero-from via-hero-via to-hero-to">

      {/* Soft radial blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[250px] w-[250px] rounded-full bg-hero-blob-1 opacity-60 blur-3xl md:h-[500px] md:w-[500px]" />
        <div className="absolute right-0 top-1/3 h-[200px] w-[200px] rounded-full bg-hero-blob-2 opacity-40 blur-3xl md:h-[400px] md:w-[400px]" />
        <div className="absolute bottom-0 left-1/3 h-[180px] w-[180px] rounded-full bg-hero-blob-3 opacity-50 blur-3xl md:h-[350px] md:w-[350px]" />
      </div>

      {/* Decorative tree — growth & learning */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}hero-tree.png`}
          alt=""
          aria-hidden="true"
          className="absolute -left-10 bottom-0 h-[70%] w-auto object-contain opacity-[0.12] md:h-[85%] md:opacity-[0.15]"
        />
      </div>


      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 pb-12 pt-20 md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-20 lg:px-8">

        {/* Photo — shown first on mobile (via order), second on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex items-center justify-center md:order-2"
        >
          <img
            src={`${import.meta.env.BASE_URL}hero-photo.png`}
            alt="Psicóloga profissional"
            className="h-auto max-h-[280px] w-auto object-contain md:max-h-[700px]"
          />
        </motion.div>

        {/* Text — shown second on mobile, first on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center text-foreground md:order-1 md:text-left md:pl-6 lg:pl-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage-600 md:text-base">
            Neuropsicologia Infantil e Juvenil
          </p>
          <h1 className="mb-4 font-display text-2xl font-bold leading-tight md:mb-6 md:text-4xl lg:text-5xl">
            Apoio Especializado em Perturbações do Neurodesenvolvimento
          </h1>
          <p className="mx-auto mb-6 max-w-lg text-sm text-sage-700 md:mx-0 md:mb-8 md:text-lg">
            Avaliação e intervenção em Autismo, PHDA, Dislexia, Perturbações da Comunicação e outras dificuldades do desenvolvimento em crianças e jovens.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start md:gap-4">
            <a
              href="https://wa.me/351928376272"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 md:px-6 md:py-3 md:text-base lg:px-8 lg:py-3.5 lg:text-lg"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-current md:h-6 md:w-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Marcar Consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-transparent px-5 py-2.5 text-sm font-bold text-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-xl md:px-6 md:py-3 md:text-base lg:px-8 lg:py-3.5 lg:text-lg"
            >
              <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
              Ver Serviços
            </a>
          </div>

          {/* Social */}
          <div className="mt-6 flex items-center justify-center gap-4 md:mt-8 md:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-600 transition-colors hover:text-sage-800"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
