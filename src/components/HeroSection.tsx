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

      {/* Decorative neural network & brain wave patterns */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large neural network — right side */}
        <svg
          className="absolute -bottom-16 -right-10 h-[800px] w-[700px] text-sage-400 opacity-[0.25]"
          viewBox="0 0 700 800"
          fill="none"
          aria-hidden="true"
        >
          {/* Neural connections (dendrites) */}
          <path d="M480 780 C475 720 490 660 470 580 C455 510 480 450 460 370 C445 300 470 240 450 160 C440 110 455 60 445 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M480 680 C420 640 370 620 310 580" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M465 540 C400 510 350 480 290 440" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M470 400 C420 370 370 350 320 310" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M455 260 C410 235 380 210 340 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M450 140 C420 120 395 95 370 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M485 620 C530 580 570 560 620 530" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M475 470 C520 440 560 420 610 390" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M460 330 C500 300 540 280 580 250" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M452 200 C490 175 520 155 555 130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

          {/* Secondary branching */}
          <path d="M310 580 C280 560 250 530 220 510" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M310 580 C290 610 270 635 245 660" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M290 440 C260 420 230 395 200 380" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M290 440 C275 470 255 495 235 520" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M320 310 C295 290 265 275 240 255" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M620 530 C645 515 665 495 685 475" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M610 390 C635 370 655 350 680 325" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

          {/* Synaptic nodes (neuron bodies) */}
          <circle cx="480" cy="680" r="8" fill="currentColor" opacity="0.4" />
          <circle cx="465" cy="540" r="7" fill="currentColor" opacity="0.38" />
          <circle cx="470" cy="400" r="7" fill="currentColor" opacity="0.35" />
          <circle cx="455" cy="260" r="6" fill="currentColor" opacity="0.32" />
          <circle cx="450" cy="140" r="5" fill="currentColor" opacity="0.28" />

          {/* Left terminal nodes */}
          <circle cx="310" cy="580" r="6" fill="currentColor" opacity="0.35" />
          <circle cx="290" cy="440" r="5.5" fill="currentColor" opacity="0.32" />
          <circle cx="320" cy="310" r="5" fill="currentColor" opacity="0.3" />
          <circle cx="340" cy="180" r="4.5" fill="currentColor" opacity="0.28" />
          <circle cx="370" cy="70" r="4" fill="currentColor" opacity="0.25" />

          {/* Far-left terminal nodes */}
          <circle cx="220" cy="510" r="4" fill="currentColor" opacity="0.25" />
          <circle cx="245" cy="660" r="4" fill="currentColor" opacity="0.25" />
          <circle cx="200" cy="380" r="3.5" fill="currentColor" opacity="0.22" />
          <circle cx="235" cy="520" r="3.5" fill="currentColor" opacity="0.22" />
          <circle cx="240" cy="255" r="3.5" fill="currentColor" opacity="0.2" />

          {/* Right terminal nodes */}
          <circle cx="620" cy="530" r="6" fill="currentColor" opacity="0.35" />
          <circle cx="610" cy="390" r="5.5" fill="currentColor" opacity="0.32" />
          <circle cx="580" cy="250" r="5" fill="currentColor" opacity="0.3" />
          <circle cx="555" cy="130" r="4.5" fill="currentColor" opacity="0.28" />
          <circle cx="685" cy="475" r="3.5" fill="currentColor" opacity="0.22" />
          <circle cx="680" cy="325" r="3.5" fill="currentColor" opacity="0.22" />

          {/* Synapse glow dots (small) */}
          <circle cx="395" cy="630" r="2.5" fill="currentColor" opacity="0.3" />
          <circle cx="380" cy="490" r="2.5" fill="currentColor" opacity="0.28" />
          <circle cx="395" cy="355" r="2.5" fill="currentColor" opacity="0.25" />
          <circle cx="400" cy="220" r="2" fill="currentColor" opacity="0.22" />
          <circle cx="550" cy="575" r="2.5" fill="currentColor" opacity="0.28" />
          <circle cx="540" cy="430" r="2.5" fill="currentColor" opacity="0.25" />
          <circle cx="520" cy="290" r="2" fill="currentColor" opacity="0.22" />
        </svg>

        {/* Brain wave / EEG pattern — top right */}
        <svg
          className="absolute -right-4 top-[8%] h-[120px] w-[420px] text-sage-300 opacity-[0.2]"
          viewBox="0 0 420 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60 C20 60 25 58 35 45 C42 35 48 30 55 55 C60 70 65 75 75 60 C85 45 88 40 95 60 C105 85 110 80 120 60 C130 40 135 42 145 55 C152 65 158 60 165 45 C172 30 178 35 185 55 C192 72 198 70 208 60 C218 50 222 48 230 58 C238 68 245 65 255 50 C262 38 268 40 275 55 C285 72 290 68 300 58 C310 48 315 50 322 60 C330 72 338 68 348 55 C355 45 360 48 368 58 C375 68 382 65 392 55 C398 48 405 50 420 60"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 75 C25 75 30 73 40 82 C48 88 52 90 60 78 C68 66 72 64 82 75 C92 86 96 84 105 75 C115 66 120 68 130 78 C138 86 144 84 155 75 C165 66 170 68 180 76 C188 82 195 80 208 74 C218 68 225 70 238 78 C248 84 255 82 268 74 C278 66 285 68 298 76 C308 84 315 80 328 74 C338 68 345 70 358 78 C368 84 375 82 388 76 C398 70 405 72 420 76"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>

        {/* Small neural cluster — bottom left */}
        <svg
          className="absolute -bottom-6 left-[3%] h-[300px] w-[250px] text-sage-300 opacity-[0.2]"
          viewBox="0 0 250 300"
          fill="none"
          aria-hidden="true"
        >
          {/* Connections */}
          <path d="M125 280 C120 240 130 200 120 160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M120 160 C100 130 80 110 55 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M120 160 C145 130 170 115 195 95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M120 160 C115 120 120 80 115 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M55 90 C40 75 25 55 15 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M55 90 C70 70 60 50 65 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M195 95 C210 75 225 55 240 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M195 95 C185 70 190 50 185 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          {/* Nodes */}
          <circle cx="125" cy="280" r="6" fill="currentColor" opacity="0.4" />
          <circle cx="120" cy="160" r="7" fill="currentColor" opacity="0.45" />
          <circle cx="55" cy="90" r="5" fill="currentColor" opacity="0.35" />
          <circle cx="195" cy="95" r="5" fill="currentColor" opacity="0.35" />
          <circle cx="115" cy="40" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="15" cy="35" r="3" fill="currentColor" opacity="0.22" />
          <circle cx="65" cy="25" r="3" fill="currentColor" opacity="0.22" />
          <circle cx="240" cy="35" r="3" fill="currentColor" opacity="0.22" />
          <circle cx="185" cy="25" r="3" fill="currentColor" opacity="0.22" />
          {/* Tiny synapse dots */}
          <circle cx="122" cy="210" r="2" fill="currentColor" opacity="0.25" />
          <circle cx="88" cy="125" r="2" fill="currentColor" opacity="0.22" />
          <circle cx="158" cy="128" r="2" fill="currentColor" opacity="0.22" />
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-8 px-4 pb-12 pt-24 md:gap-12 md:px-6 md:py-20 md:grid-cols-2 lg:px-10">
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
          <h1 className="mb-4 font-display text-3xl font-bold leading-tight md:mb-6 md:text-5xl lg:text-6xl">
            Apoio Especializado em Perturbações do Neurodesenvolvimento
          </h1>
          <p className="mb-6 max-w-lg text-lg text-sage-700 md:mb-8 md:text-xl">
            Avaliação e intervenção em Autismo, PHDA, Dislexia, Perturbações da Comunicação e outras dificuldades do desenvolvimento em crianças e jovens.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="gap-2 font-semibold" asChild>
              <a href="https://wa.me/351928376272" target="_blank" rel="noopener noreferrer">
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
          <img
            src={`${import.meta.env.BASE_URL}hero-photo.png`}
            alt="Psicóloga profissional"
            className="h-auto max-h-[700px] w-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
