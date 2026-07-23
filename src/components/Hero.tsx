import { Button } from './ui/Button'
import { Separator } from './ui/Separator'

export function Hero() {
  return (
    <>
      <section id="hero" className="flex min-h-[calc(100svh-10rem-44px)] flex-col items-center justify-center gap-12 px-6 pt-20 pb-16 text-center md:min-h-[calc(100svh-11rem-44px)] md:gap-16 2xl:gap-24">
        <div className="flex w-full max-w-3xl flex-col gap-2 md:gap-4">
          <img src="/hero_logo.svg" alt="ConectaPET" className="w-full" />
          <p className="text-left font-heading text-xl md:text-3xl font-black text-ink pl-2">16/09 • 19/09</p>
        </div>

        <div className="flex max-w-md flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-heading text-xl md:text-2xl font-black text-ink">
              UM EVENTO PARA NOS CONECTAR
            </h1>
            <p className="font-body md:text-lg text-center">
              O futuro não surge por acaso. Ele nasce da curiosidade, da pesquisa e da coragem de
              explorar o desconhecido.
            </p>
          </div>

          <Button variant="solid"
            onClick={() => document.getElementById('sobre-evento')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Saiba Mais
          </Button>
        </div>
      </section>
      <Separator />
    </>
  )
}
