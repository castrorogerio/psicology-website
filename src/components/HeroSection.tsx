import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowDown, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden bg-[#fcdee2]">

      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-foreground md:pl-12 lg:pl-24"
        >
          <p className="mb-3 text-base font-medium uppercase tracking-widest text-sage-600">
            Neuropsicologia Infantil e Juvenil
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Apoio Especializado em Perturbações do Neurodesenvolvimento
          </h1>
          <p className="mb-8 max-w-lg text-xl text-sage-700">
            Avaliação e intervenção em Autismo, PHDA, Dislexia, Perturbações da Comunicação e outras dificuldades do desenvolvimento em crianças e jovens.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold" asChild>
              <a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                Marcar Consulta Online
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-sage-500 bg-transparent text-foreground hover:bg-sage-200"
              asChild
            >
              <a href="#servicos">
                <ArrowDown className="h-4 w-4" />
                Ver Serviços
              </a>
            </Button>
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center gap-4">
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

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center justify-center relative"
        >
          <div
            className="relative max-h-[700px]"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskComposite: "destination-in",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              maskComposite: "intersect",
            }}
          >
            <img
              src="/hero-photo.png"
              alt="Psicóloga profissional"
              className="h-auto max-h-[700px] w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
