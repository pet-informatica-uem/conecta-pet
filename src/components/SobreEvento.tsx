import { Separator } from "./ui/Separator";

export function SobreEvento() {
  return (
    <>
      <section id="sobre-evento" className="p-8 md:p-32 justify-center border-y border-ink/10 font-heading text-2xl font-bold text-ink">
        {/* TODO */}
        <h1 className="mt-8 md:mt-24 text-center font-heading uppercase font-normal text-3xl md:text-5xl">O que é o Conecta PET?</h1>
        <div className="flex flex-col px-0 md:px-4 2xl:px-64 pt-12 md:pt-36 gap-y-12 md:gap-y-36">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center">
            <img src="/placeholder_azul.png" alt="Conectapeto" className="w-48 h-64 md:w-96 md:h-128"/>
            <p className="font-body font-normal text-base md:text-2xl text-justify">O <strong className="text-purple">ConectaPET</strong> é um evento organizado em parceria pelos grupos <strong className="text-magenta">Conectadas</strong> e <strong className="text-blue">PET-Informática</strong>, destinado aos estudantes dos cursos de Ciência da Computação e Engenharia de Software. A proposta é promover um ambiente de integração entre os acadêmicos, incentivando a troca de experiências, o contato com diferentes áreas da computação e a aproximação entre estudantes que compartilham interesses em tecnologia, pesquisa e desenvolvimento profissional.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center">
            <p className="font-body font-normal text-base md:text-2xl text-justify">Durante o evento, os participantes poderão acompanhar palestras, conhecer trabalhos científicos produzidos por outros estudantes e colocar seus conhecimentos em prática por meio de uma maratona de programação. Com uma programação diversificada, o ConectaPET busca valorizar a produção acadêmica, estimular o aprendizado colaborativo e fortalecer a comunidade do Departamento de Informática.</p>
            <img src="/placeholder_rosa.png" alt="Conectapeto" className="w-48 h-64 md:w-96 md:h-128"/>
          </div>
        </div>
      </section>
      <Separator />
    </>
  )
}
