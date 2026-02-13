import { useState } from "react";
import { X } from "lucide-react";

const WhatsAppButton = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <a
      href="https://wa.me/351900000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-[#4a5e3a] p-4 pr-10 text-white shadow-xl transition-opacity hover:opacity-95"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDismissed(true);
        }}
        className="absolute top-2 right-2 text-white/70 hover:text-white"
        aria-label="Fechar"
      >
        <X className="h-4 w-4" />
      </button>
      <svg viewBox="0 0 32 32" className="h-10 w-10 shrink-0 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.746 3.074 9.378L1.062 31.16l5.964-1.97A15.93 15.93 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.32 22.616c-.396 1.116-1.97 2.042-3.18 2.312-.828.18-1.908.324-5.546-1.192-4.654-1.938-7.648-6.66-7.882-6.966-.226-.306-1.848-2.462-1.848-4.696s1.17-3.33 1.584-3.786c.414-.456.906-.57 1.208-.57.3 0 .606.003.87.016.28.012.654-.106.102 1.554-.282.654-1.584 3.858-1.722 4.14-.138.282-.228.612-.048.984.186.372.276.6.552.924.276.324.582.726.828.972.276.276.564.576.966.978.396.396.39.744.054 1.2-.33.456-1.476 3.636-1.914 4.068-.438.432-.846.372-1.242.228-.396-.15-1.674-.618-3.186-1.968-1.176-1.05-1.974-2.35-2.202-2.748-.234-.396-.024-.612.174-.81.18-.18.396-.462.594-.696.198-.234.264-.396.396-.66.132-.27.066-.504-.036-.702-.096-.198-.87-2.094-1.188-2.868-.318-.756-.642-.654-.87-.666-.234-.012-.498-.018-.762-.018-.264 0-.696.102-1.062.504-.366.396-1.398 1.368-1.398 3.33z" />
      </svg>
      <div>
        <p className="text-base font-semibold leading-tight">
          Anabela Castro - Neuropsicologia
        </p>
        <p className="mt-1 text-sm text-white/80">
          Precisas de ajuda? Fala comigo!
        </p>
      </div>
    </a>
  );
};

export default WhatsAppButton;
