import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";
import { SectionTitle } from "./ui/SectionTitle";

export function Maratona() {
  return (
    <>
      <section id="maratona" className="min-h-[60svh] lg:min-h-[90svh] p-4 md:p-10 lg:p-14 justify-center border-y border-ink/10 text-ink">
        <SectionTitle>Maratona <br />de Programação</SectionTitle>

        <div className="flex flex-col px-0 md:px-8 lg:px-12 xl:px-32 2xl:px-90 pt-6 md:pt-12 lg:pt-16 gap-y-10 md:gap-y-16 lg:gap-y-32">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-6 lg:gap-10 xl:gap-24 items-center justify-center">
            <img src="/placeholder_maratona.png" alt="Maratona" className="w-56 h-auto max-w-none shrink-0 md:w-96 lg:w-116"/>
            <p className="font-body font-normal text-sm md:text-base lg:text-xl xl:text-2xl text-justify">A Maratona de Programação do ConectaPET será uma competição presencial em equipes de três integrantes. Durante a atividade, os participantes deverão resolver desafios de lógica, algoritmos e programação dentro do tempo estabelecido, colocando em prática seus conhecimentos e o trabalho em equipe.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-8 lg:gap-12 xl:gap-24 items-center justify-center">
            <Button variant="outline" className="px-8 md:px-12 lg:px-16 xl:px-24 text-purple border-purple">LEIA O EDITAL</Button>
            <Button variant="solid">INSCREVA-SE NA MARATONA</Button>
          </div>
        </div>
      </section>
      <Separator />
    </>
  )
}
