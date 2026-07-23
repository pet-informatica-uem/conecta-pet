import { Separator } from "./ui/Separator";
import { SectionTitle } from "./ui/SectionTitle";

const rowClass = "flex flex-col items-center justify-center gap-4 md:gap-6 lg:flex-row lg:gap-10 xl:gap-16";
const imageClass = "w-32 h-44 md:w-56 md:h-72 lg:w-96 lg:h-134";
const textClass = "font-body font-normal text-sm md:text-lg lg:text-xl xl:text-2xl text-justify";

export function SobreEvento() {
  return (
    <>
      <section id="sobre-evento" className="scroll-mt-24 md:scroll-mt-36 min-h-[60svh] md:min-h-[90svh] p-4 md:p-10 lg:p-14 justify-center border-y border-ink/10 font-heading text-2xl font-bold text-ink">
        <SectionTitle>O que é o Conecta PET?</SectionTitle>
        <div className="flex flex-col px-0 md:px-6 lg:px-10 xl:px-20 2xl:px-64 pt-6 md:pt-12 lg:pt-14 gap-y-6 md:gap-y-10 lg:gap-y-12">
          <div className={rowClass}>
            <img src="/placeholder_azul.png" alt="" className={imageClass} />
            <p className={textClass}>
              O <strong className="text-purple">ConectaPET</strong> é um evento organizado em
              parceria pelos grupos <strong className="text-magenta">Conectadas</strong> e{" "}
              <strong className="text-blue">PET-Informática</strong>, destinado aos estudantes dos
              cursos de Ciência da Computação e Engenharia de Software. A proposta é promover um
              ambiente de integração entre os acadêmicos, incentivando a troca de experiências, o
              contato com diferentes áreas da computação e a aproximação entre estudantes que
              compartilham interesses em tecnologia, pesquisa e desenvolvimento profissional.
            </p>
          </div>
          <div className={rowClass}>
            <p className={textClass}>
              Durante o evento, os participantes poderão acompanhar palestras, conhecer trabalhos
              científicos produzidos por outros estudantes e colocar seus conhecimentos em prática
              por meio de uma maratona de programação. Com uma programação diversificada, o
              ConectaPET busca valorizar a produção acadêmica, estimular o aprendizado colaborativo
              e fortalecer a comunidade do Departamento de Informática.
            </p>
            <img src="/placeholder_rosa.png" alt="" className={imageClass} />
          </div>
        </div>
      </section>
      <Separator />
    </>
  )
}
