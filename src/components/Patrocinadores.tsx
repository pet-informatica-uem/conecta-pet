import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";

type Patrocinador = {
  nome: string;
  logo: string;
  site?: string;
};

const patrocinadores: Patrocinador[] = [
  {
    nome: "Brownie do Dê",
    logo: "/patrocinadores/brownie-do-de.svg",
    site: "https://www.instagram.com/browniedodeoficial/"
  },
  {
    nome: "Marvin English Pub",
    logo: "/patrocinadores/marvin-english-pub.svg",
    site: "https://www.instagram.com/marvinenglishpub/"
  },
  {
    nome: "Sebo Multimania",
    logo: "/patrocinadores/sebo-multimania.svg",
    site: "https://www.instagram.com/sebomultimania/"
  }
];

export function Patrocinadores() {
  return (
    <section
      id="patrocinadores"
      aria-labelledby="titulo-patrocinadores"
      className="scroll-mt-24 border-t border-ink/10 px-8 py-16 text-ink md:scroll-mt-36 md:px-16 md:py-24"
    >
      <Reveal>
        <SectionTitle>
          <span id="titulo-patrocinadores">Patrocinadores</span>
        </SectionTitle>
      </Reveal>

      {patrocinadores.length > 0 ? (
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-10 md:mt-14 md:gap-x-20">
          {patrocinadores.map((patrocinador, index) => {
            const logo = (
              <img
                src={patrocinador.logo}
                alt={`Logo ${patrocinador.nome}`}
                className="h-32 w-64 object-contain md:h-40 md:w-80"
                loading="lazy"
              />
            );

            return (
              <Reveal key={patrocinador.nome} delay={index * 75}>
                {patrocinador.site ? (
                  <a
                    href={patrocinador.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar o site de ${patrocinador.nome}`}
                    className="block rounded-md transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
                  >
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </Reveal>
            );
          })}
        </div>
      ) : (
        <Reveal delay={100}>
          <p className="mt-10 text-center text-base text-ink/70 md:mt-14 md:text-lg">
            As marcas apoiadoras serão anunciadas em breve.
          </p>
        </Reveal>
      )}
    </section>
  );
}
