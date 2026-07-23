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

const NAV_LINKS = [
  { href: "#sobre-evento", label: "sobre" },
  { href: "#maratona", label: "maratona" },
  { href: "#trabalhos", label: "trabalhos" },
  { href: "#cronograma", label: "cronograma" },
  { href: "#contato", label: "contato" },
];

export function Header() {
  const visible = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  // fecha o menu mobile automaticamente se a tela crescer até o breakpoint desktop
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)");
    const handleChange = () => setMenuOpen(false);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full flex-col border-b border-ink/10 bg-cream font-heading text-base font-bold text-ink uppercase transition-transform duration-300 md:text-xl ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full items-center px-4 py-4 md:p-8">
        <div className="flex flex-1 justify-start">
          <img src="/logotipo.svg" alt="Logo" className="h-10 w-10 md:h-15 md:w-15" />
        </div>

        <nav className="hidden items-center justify-center gap-10 xl:flex 2xl:gap-12">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-75">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          <Button
            variant="outline"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", transitionDuration: "350ms" }}
            className="border-ink px-3 py-2 text-xs whitespace-nowrap text-ink hover:bg-ink/10 md:px-7 md:py-3.5 md:text-sm"
          >
            Inscrever-se
          </Button>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 xl:hidden"
          >
            <span
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", transitionDuration: "350ms" }}
              className={`block h-0.5 w-6 bg-ink transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", transitionDuration: "350ms" }}
              className={`block h-0.5 w-6 bg-ink transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", transitionDuration: "350ms" }}
              className={`block h-0.5 w-6 bg-ink transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`flex flex-col items-center overflow-hidden border-t border-ink/10 transition-[max-height] duration-300 xl:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
            className={`w-full px-4 py-4 text-center transition-all duration-300 ease-out hover:opacity-75 ${
              menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
