import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipa", href: "#equipa" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="font-display text-2xl font-semibold text-primary">
          Anabela Castro - Perturbações do Neurodesenvolvimento
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button size="default" className="gap-2 text-base" asChild>
            <a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              Marcar Consulta
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-7 w-7 text-foreground" /> : <Menu className="h-7 w-7 text-foreground" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-6 py-5 lg:px-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/70 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="default" className="mt-2 gap-2 text-base" asChild>
              <a href="https://wa.me/351900000000" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                Marcar Consulta
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
