import { Button } from './ui/Button'

export function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center gap-10 px-6 pt-20 pb-16 text-center">
      <div className="flex w-full max-w-2xl flex-col gap-2">
        <img src="/hero_logo.svg" alt="ConectaPET" className="w-full" />
        <p className="text-left font-heading text-3xl font-black text-ink pl-2">16/09 • 19/09</p>
      </div>

      <div className="flex max-w-md flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-heading text-2xl font-black text-ink">
            UM EVENTO PARA NOS CONECTAR
          </h1>
          <p className="font-body text-lg font-light text-ink">
            O futuro não surge por acaso. Ele nasce da curiosidade, da pesquisa e da coragem de
            explorar o desconhecido.
          </p>
        </div>

        <Button variant="solid">Venha conhecer</Button>
      </div>
    </section>
  )
}
