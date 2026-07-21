import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/Button";

function useScrollDirection() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // no topo da página, sempre mostra
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // scrollando para baixo
        setVisible(false);
      } else {
        // scrollando para cima
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}

export function Header() {
  const visible = useScrollDirection();

  return (
    <header
      className={`fixed top-0 left-0 z-50 mb-24 flex w-full items-center border-b border-ink/10 bg-cream px-4 py-4 md:p-8 font-heading uppercase text-base md:text-xl font-bold text-ink transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-1 justify-start">
        <img src="/logotipo.svg" alt="Logo" className="h-10 w-10 md:h-15 md:w-15" />
      </div>

      <nav className="hidden xl:flex gap-12 items-center justify-center">
        <a href="#sobre-evento" className="hover:opacity-75 transition-opacity">sobre</a>
        <a href="#maratona" className="hover:opacity-75 transition-opacity">maratona</a>
        <a href="#cronograma" className="hover:opacity-75 transition-opacity">cronograma</a>
        <a href="#contato" className="hover:opacity-75 transition-opacity">contato</a>
      </nav>

      <div className="flex flex-1 justify-end">
        <Button
          variant="outline"
          className="border-ink text-ink hover:bg-ink/10 px-4 py-2 text-xs md:px-7 md:py-3.5 md:text-sm"
        >
          Inscrever-se
        </Button>
      </div>
    </header>
  );
}