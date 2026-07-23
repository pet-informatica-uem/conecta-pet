import { Separator } from "./ui/Separator";
import { SectionTitle } from "./ui/SectionTitle";
import { Reveal } from "./ui/Reveal";

const rowClass = "flex flex-col items-center justify-center gap-4 md:gap-6 lg:flex-row lg:gap-10 xl:gap-16";
const imageClass = "w-32 md:w-56 lg:w-72 xl:w-96 aspect-[229/322] object-cover";
const textClass = "font-body font-normal text-sm md:text-lg lg:text-xl xl:text-2xl text-justify";

export function SobreEvento() {
  return (
    <>
      <section id="sobre-evento" className="scroll-mt-24 md:scroll-mt-36 min-h-[60svh] md:min-h-[90svh] p-4 md:p-10 lg:p-14 justify-center border-y border-ink/10 font-heading text-2xl font-bold text-ink">
        <Reveal>
          <SectionTitle>O que é o Conecta PET?</SectionTitle>
        </Reveal>
        <div className="flex flex-col px-0 md:px-6 lg:px-10 xl:px-20 2xl:px-64 pt-6 md:pt-12 lg:pt-14 gap-y-6 md:gap-y-10 lg:gap-y-12">
          <div className={rowClass}>
            <Reveal direction="left" className="shrink-0">
              <img src="/placeholder_azul.png" alt="" className={imageClass} />
            </Reveal>
            <Reveal direction="right" delay={100}>
              <p className={textClass}>
                O <strong className="text-purple">ConectaPET</strong> é um evento organizado em
                parceria pelos grupos <strong className="text-magenta">Conectadas</strong> e{" "}
                <strong className="text-blue">PET-Informática</strong>, destinado aos estudantes dos
                cursos de Ciência da Computação e Engenharia de Software. A proposta é promover um
                ambiente de integração entre os acadêmicos, incentivando a troca de experiências, o
                contato com diferentes áreas da computação e a aproximação entre estudantes que
                compartilham interesses em tecnologia, pesquisa e desenvolvimento profissional.
              </p>
            </Reveal>
          </div>
          <div className={rowClass}>
            <Reveal direction="left">
              <p className={textClass}>
                Durante o evento, os participantes poderão acompanhar palestras, conhecer trabalhos
                científicos produzidos por outros estudantes e colocar seus conhecimentos em prática
                por meio de uma maratona de programação. Com uma programação diversificada, o
                ConectaPET busca valorizar a produção acadêmica, estimular o aprendizado colaborativo
                e fortalecer a comunidade do Departamento de Informática.
              </p>
            </Reveal>
            <Reveal direction="right" delay={100} className="shrink-0">
              <img src="/placeholder_rosa.png" alt="" className={imageClass} />
            </Reveal>
          </div>
        </div>
      </section>
      <Separator />
    </>
  )
}
