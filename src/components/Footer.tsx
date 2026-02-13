import { Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-sage-200">
      {/* CTA banner */}
      <div className="bg-sage-700 py-10">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
          <h3 className="font-display text-2xl font-bold text-primary-foreground">
            Precisas de ajuda?
          </h3>
          <p className="text-sage-200">
            Estamos aqui para si. Marque a sua consulta hoje.
          </p>
          <Button size="lg" variant="secondary" className="gap-2 font-semibold" asChild>
            <a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              Fale Connosco no WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-6 text-center text-sm">
        <p className="flex items-center gap-1">
          Feito com <Heart className="h-3 w-3 text-sage-400" /> Psicologia Clínica
        </p>
        <p className="text-sage-400">
          © {new Date().getFullYear()} Psicologia Clínica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
