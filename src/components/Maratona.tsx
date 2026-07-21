import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";

export function Maratona() {
  return (
    <>
      <section id="maratona" className="p-8 md:p-32 justify-center border-y border-ink/10 text-ink">
        <h1 className="mt-8 md:mt-24 text-center font-heading uppercase font-normal text-3xl md:text-5xl">Maratona <br />de Programação</h1>
        <div className="flex flex-col px-0 md:px-8 2xl:px-64 pt-12 md:pt-28 gap-y-12 md:gap-y-36">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center justify-center">
            <img src="/placeholder_maratona.png" alt="Maratona" className="w-full max-w-sm h-auto md:w-135 md:h-75"/>
            <p className="font-body font-normal text-base md:text-xl xl:text-2xl text-justify">A Maratona de Programação do ConectaPET será uma competição presencial em equipes de três integrantes. Durante a atividade, os participantes deverão resolver desafios de lógica, algoritmos e programação dentro do tempo estabelecido, colocando em prática seus conhecimentos e o trabalho em equipe.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-24 items-center justify-center">
            <Button variant="outline" className="px-8 md:px-24 text-purple border-purple">LEIA O EDITAL</Button>
            <Button variant="solid" className="">INSCREVA-SE NA MARATONA</Button>
          </div>
        </div>
      </section>
      <Separator />
    </>
  )
}
