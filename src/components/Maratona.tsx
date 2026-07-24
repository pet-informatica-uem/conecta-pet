import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";
import { SectionTitle } from "./ui/SectionTitle";
import { Reveal } from "./ui/Reveal";

export function Maratona() {
  return (
    <>
      <section id="maratona" className="scroll-mt-24 md:scroll-mt-36 min-h-[60svh] lg:min-h-[90svh] p-4 md:p-10 lg:p-14 justify-center border-y border-ink/10 text-ink">
        <Reveal>
          <SectionTitle>Maratona <br />de Programação</SectionTitle>
        </Reveal>

        <div className="flex flex-col px-0 md:px-8 lg:px-12 xl:px-28 2xl:px-64 pt-6 md:pt-12 lg:pt-16 gap-y-10 md:gap-y-16 lg:gap-y-32">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-6 lg:gap-10 xl:gap-24 items-center justify-center">
            <Reveal direction="left">
              <img src="/placeholder_maratona.png" alt="Maratona" className="w-56 h-auto max-w-none shrink-0 md:w-96 lg:w-116"/>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <p className="font-body font-normal text-sm md:text-base lg:text-xl xl:text-2xl text-justify">A Maratona de Programação do ConectaPET será uma competição presencial em equipes de três integrantes. Durante a atividade, os participantes deverão resolver desafios de lógica, algoritmos e programação dentro do tempo estabelecido, colocando em prática seus conhecimentos e o trabalho em equipe.</p>
            </Reveal>
          </div>

          <Reveal className="flex flex-col items-center gap-4 md:gap-6">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-purple animate-soft-pulse">Inscrições em breve</span>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-8 lg:gap-12 xl:gap-24 items-center justify-center">
              <Button
                href="https://docs.google.com/document/d/1OMc-C67T-2_aMTDQ7LfFCwIDKxE5mdCBuj6IKwL2sHQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-8 md:px-12 lg:px-16 xl:px-24 text-purple border-purple"
              >
                LEIA O EDITAL
              </Button>
              <Button disabled variant="solid" className="disabled:opacity-40 disabled:cursor-not-allowed">INSCREVA-SE NA MARATONA</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Separator />
    </>
  )
}