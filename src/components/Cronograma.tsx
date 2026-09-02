import { useState } from "react";
import cronograma from "../data/cronograma.json";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { Separator } from "./ui/Separator";

type Atividade = {
  titulo: string;
  horario?: string;
  palestrante?: string;
  descricao: string;
  bio?: string;
  local?: string;
  imagem?: string;
  cor?: "magenta" | "blue";
};

type DiaCronograma = {
  data: string;
  atividades: Atividade[];
};

const dias = cronograma as DiaCronograma[];

export function Cronograma() {
  const [dataSelecionada, setDataSelecionada] = useState(dias[0]?.data ?? "");
  const diaSelecionado = dias.find((dia) => dia.data === dataSelecionada) ?? dias[0];
  const idAbaSelecionada = diaSelecionado
    ? `aba-${diaSelecionado.data.replace("/", "-")}`
    : undefined;

  return (
    <>
      <section
        id="cronograma"
        className="scroll-mt-24 border-t border-ink/10 px-4 py-16 text-ink md:scroll-mt-36 md:px-10 md:py-24 lg:px-14"
      >
        <Reveal>
          <SectionTitle>Cronograma</SectionTitle>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-4xl overflow-x-auto border-y border-light-olive/80 md:mt-16">
            <div
              role="tablist"
              aria-label="Dias do cronograma"
              className="flex min-w-max items-center justify-center gap-4 px-4 py-6 sm:min-w-0 sm:justify-between md:px-8 md:py-8"
            >
              {dias.map((dia, index) => {
                const selecionado = dia.data === diaSelecionado?.data;

                return (
                  <div key={dia.data} className="flex items-center gap-4 sm:flex-1 sm:justify-around">
                    <button
                      type="button"
                      role="tab"
                      id={`aba-${dia.data.replace("/", "-")}`}
                      aria-selected={selecionado}
                      aria-controls="painel-cronograma"
                      onClick={() => setDataSelecionada(dia.data)}
                      className={`font-heading text-xl cursor-pointer font-black whitespace-nowrap transition-colors md:text-3xl ${
                        selecionado ? "text-purple" : "text-light-olive hover:text-olive"
                      }`}
                    >
                      {dia.data}
                    </button>

                    {index < dias.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rounded-full bg-light-olive md:h-3 md:w-3"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div
          id="painel-cronograma"
          role="tabpanel"
          aria-labelledby={idAbaSelecionada}
          className="mx-auto mt-12 min-h-72 max-w-4xl md:mt-16"
        >
          {diaSelecionado?.atividades.length ? (
            <div className="flex flex-col gap-12 md:gap-10">
              {diaSelecionado.atividades.map((atividade, index) => {
                return (
                  <Reveal key={`${diaSelecionado.data}-${atividade.titulo}`} delay={index * 75}>
                    <article className="mx-auto max-w-3xl">
                      <div className="flex flex-col">
                        {atividade.horario && (
                          <p className="font-body text-2xl tracking-wide md:text-3xl">
                            {atividade.horario}
                          </p>
                        )}
                        <h3 className="mt-2 font-body text-2xl font-bold tracking-wide">
                          {atividade.titulo}
                        </h3>
                        {atividade.palestrante && (
                          <p className="mt-2 font-body text-base font-bold tracking-wide text-purple md:text-lg">
                            {atividade.palestrante}
                          </p>
                        )}
                        <hr className="my-4 border-light-olive" />
                        <p className="font-body text-sm font-normal text-justify md:text-base lg:text-xl xl:text-2xl">
                          {atividade.descricao}
                        </p>
                        {atividade.local && (
                          <p className="mt-4 font-body text-base font-bold tracking-wide md:text-lg">
                            {atividade.local}
                          </p>
                        )}
                        {atividade.bio && (
                          <details className="mt-4 font-body text-base md:text-lg">
                            <summary className="cursor-pointer font-bold text-purple transition-opacity hover:opacity-75">
                              Sobre o palestrante
                            </summary>
                            <p className="mt-3 font-light leading-snug text-justify">
                              {atividade.bio}
                            </p>
                          </details>
                        )}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <Reveal>
              <div className="flex min-h-72 items-center justify-center rounded-2xl bg-magenta px-8 py-16 text-center md:mx-auto md:max-w-xl">
                <p className="font-heading text-xl font-bold uppercase text-cream md:text-2xl">
                  Programação em breve
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
      <Separator />
    </>
  );
}
