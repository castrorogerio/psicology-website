import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-sage-200">
      {/* CTA banner */}
      <div className="bg-sage-700 py-10">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
          <h3 className="font-display text-xl font-bold text-primary-foreground md:text-2xl">
            Precisas de ajuda?
          </h3>
          <p className="text-lg text-sage-200">
            Estamos aqui para si. Marque a sua consulta hoje.
          </p>
          <a
            href="https://wa.me/351928376272"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-6 py-3 text-base font-bold text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 lg:px-8 lg:py-3.5 lg:text-lg"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale Connosco no WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-6 text-center text-base">
        <p className="flex items-center gap-1">
          Feito com <Heart className="h-4 w-4 text-sage-400" /> Anabela Castro
        </p>
        <p className="text-sage-400">
          © {new Date().getFullYear()} Anabela Castro — Neuropsicologia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
