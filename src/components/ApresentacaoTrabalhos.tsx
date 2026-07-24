import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";
import { SectionTitle } from "./ui/SectionTitle";
import { Reveal } from "./ui/Reveal";

export function ApresentacaoTrabalhos() {
  return (
    <>
      <section id="trabalhos" className="scroll-mt-24 md:scroll-mt-36 min-h-[60svh] lg:min-h-[90svh] p-4 md:p-10 lg:p-14 justify-center border-y border-ink/10 text-ink">
        <Reveal>
          <SectionTitle>Apresentação <br />de Trabalhos</SectionTitle>
        </Reveal>

        <div className="flex flex-col px-0 md:px-8 lg:px-12 xl:px-28 2xl:px-64 pt-6 md:pt-12 lg:pt-16 gap-y-10 md:gap-y-16 lg:gap-y-32">
          <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-6 lg:gap-10 xl:gap-24 items-center justify-center">
            <Reveal direction="right">
              <img src="/placeholder_maratona.png" alt="Apresentação de Trabalhos" className="w-56 h-auto max-w-none shrink-0 md:w-96 lg:w-116"/>
            </Reveal>
            <Reveal direction="left" delay={100}>
              <p className="font-body font-normal text-sm md:text-base lg:text-xl xl:text-2xl text-justify">A Apresentação de Trabalhos do ConectaPET é um espaço dedicado à divulgação de pesquisas e projetos desenvolvidos por estudantes. Os participantes poderão submeter trabalhos científicos e apresentá-los à comunidade acadêmica, compartilhando conhecimento e experiências com colegas e professores.</p>
            </Reveal>
          </div>

          <Reveal className="flex flex-col items-center gap-4 md:gap-6">
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-purple animate-soft-pulse">Submissões em breve</span>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-8 lg:gap-12 xl:gap-24 items-center justify-center">
              <Button
                href="https://docs.google.com/document/d/1S3M8XKWakRC0qiXyRsNV8Ve3rRzkdJQl/edit?usp=sharing&ouid=112062102356446715824&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-8 md:px-12 lg:px-16 xl:px-24 text-purple border-purple"
              >
                LEIA O EDITAL
              </Button>
              <Button disabled variant="solid" className="disabled:opacity-40 disabled:cursor-not-allowed">SUBMETA SEU TRABALHO</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <Separator />
    </>
  )
}