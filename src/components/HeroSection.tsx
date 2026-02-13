import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowDown, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-sage-700 via-sage-600 to-sage-500">
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-sage-300 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sage-200 blur-3xl" />
      </div>

      <div className="container relative mx-auto grid items-center gap-12 px-4 py-32 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-foreground"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage-200">
            Psicologia Clínica
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Cuide da sua saúde mental com acompanhamento profissional
          </h1>
          <p className="mb-8 max-w-lg text-lg text-sage-200">
            Oferecemos um espaço seguro e acolhedor para o ajudar a encontrar o equilíbrio emocional e o bem-estar que merece.
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
              className="gap-2 border-sage-300 bg-transparent text-primary-foreground hover:bg-sage-600"
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
              className="text-sage-200 transition-colors hover:text-primary-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl bg-sage-400/30 shadow-2xl">
            <div className="flex h-full w-full items-center justify-center text-sage-200">
              <p className="text-center text-sm">A sua foto profissional aqui</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
