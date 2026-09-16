import { useState } from "react";
import cronograma from "../data/cronograma.json";
import { Reveal } from "./ui/Reveal";
import { SectionTitle } from "./ui/SectionTitle";
import { Separator } from "./ui/Separator";

type TipoItemCronograma =
  | "apresentacao"
  | "intervalo"
  | "abertura"
  | "encerramento";

type ItemCronogramaDetalhado = {
  tipo: TipoItemCronograma;
  titulo: string;
  horario?: string;
  autores?: string[];
  orientadores?: string[];
};

type SessaoCronograma = {
  titulo: string;
  horario: string;
  itens: ItemCronogramaDetalhado[];
};

type Atividade = {
  titulo: string;
  horario?: string;
  palestrante?: string;
  descricao: string;
  bio?: string;
  local?: string;
  imagem?: string;
  cor?: "magenta" | "blue";
  sessoes?: SessaoCronograma[];
  premiacao?: string;
};

type DiaCronograma = {
  data: string;
  atividades: Atividade[];
};

const dias = cronograma as DiaCronograma[];

function ListaNomes({
  tituloSingular,
  tituloPlural,
  nomes,
}: {
  tituloSingular: string;
  tituloPlural: string;
  nomes: string[];
}) {
  if (!nomes.length) return null;

  return (
    <p className="mt-1 font-body text-sm leading-relaxed text-ink/75 md:text-base">
      <span className="font-bold text-ink">
        {nomes.length > 1 ? tituloPlural : tituloSingular}:
      </span>{" "}
      {nomes.join(", ")}
    </p>
  );
}

function ItemApresentacao({
  item,
}: {
  item: ItemCronogramaDetalhado;
}) {
  const destaque =
    item.tipo === "intervalo" ||
    item.tipo === "abertura" ||
    item.tipo === "encerramento";

  if (destaque) {
    return (
      <div className="border-b border-light-olive/50 py-5 last:border-b-0">
        {item.horario && (
          <p className="font-body text-sm font-bold tracking-wide text-purple md:text-base">
            {item.horario}
          </p>
        )}

        <p className="mt-1 font-body text-base font-bold tracking-wide md:text-lg">
          {item.titulo}
        </p>
      </div>
    );
  }

  return (
    <article className="border-b border-light-olive/50 py-5 last:border-b-0">
      {item.horario && (
        <p className="font-body text-sm font-bold tracking-wide text-purple md:text-base">
          {item.horario}
        </p>
      )}

      <h5 className="mt-1 font-body text-base font-bold leading-snug tracking-wide md:text-lg">
        {item.titulo}
      </h5>

      {item.autores && (
        <ListaNomes
          tituloSingular="Autor"
          tituloPlural="Autores"
          nomes={item.autores}
        />
      )}

      {item.orientadores && (
        <ListaNomes
          tituloSingular="Orientador"
          tituloPlural="Orientadores"
          nomes={item.orientadores}
        />
      )}
    </article>
  );
}

function SessaoApresentacoes({
  sessao,
}: {
  sessao: SessaoCronograma;
}) {
  return (
    <details className="group border-y border-light-olive/70">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
        <div>
          <h4 className="font-heading text-xl font-black uppercase text-purple md:text-2xl">
            {sessao.titulo}
          </h4>

          <p className="mt-1 font-body text-sm tracking-wide text-ink/70 md:text-base">
            {sessao.horario}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple font-body text-2xl font-light text-purple transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="pb-5 md:pb-7">
        {sessao.itens.map((item, index) => (
          <ItemApresentacao
            key={`${sessao.titulo}-${item.horario ?? "sem-horario"}-${item.titulo}-${index}`}
            item={item}
          />
        ))}
      </div>
    </details>
  );
}

function CronogramaDetalhado({
  sessoes,
}: {
  sessoes: SessaoCronograma[];
}) {
  return (
    <div className="mt-8">
      <p className="mb-4 font-body text-sm text-ink/60 md:text-base">
        Selecione um período para visualizar as apresentações.
      </p>

      <div className="flex flex-col gap-4">
        {sessoes.map((sessao) => (
          <SessaoApresentacoes
            key={sessao.titulo}
            sessao={sessao}
          />
        ))}
      </div>
    </div>
  );
}

export function Cronograma() {
  const [dataSelecionada, setDataSelecionada] = useState(
    dias[0]?.data ?? "",
  );

  const diaSelecionado =
    dias.find((dia) => dia.data === dataSelecionada) ?? dias[0];

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
          <div className="mx-auto max-w-4xl">
            <SectionTitle>Cronograma</SectionTitle>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-4xl overflow-x-auto border-y border-light-olive/80 md:mt-16 md:pl-12 pr-4">
            <div
              role="tablist"
              aria-label="Dias do cronograma"
              className="flex min-w-max items-center justify-center gap-4 px-4 py-6 sm:min-w-0 sm:justify-between md:px-8 md:py-8"
            >
              {dias.map((dia, index) => {
                const selecionado =
                  dia.data === diaSelecionado?.data;

                return (
                  <div
                    key={dia.data}
                    className="flex items-center gap-4 sm:flex-1 sm:justify-around"
                  >
                    <button
                      type="button"
                      role="tab"
                      id={`aba-${dia.data.replace("/", "-")}`}
                      aria-selected={selecionado}
                      aria-controls="painel-cronograma"
                      onClick={() => setDataSelecionada(dia.data)}
                      className={`cursor-pointer whitespace-nowrap font-heading text-xl font-black transition-colors md:text-3xl ${
                        selecionado
                          ? "text-purple"
                          : "text-light-olive hover:text-olive"
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
              {diaSelecionado.atividades.map(
                (atividade, index) => (
                  <Reveal
                    key={`${diaSelecionado.data}-${atividade.titulo}`}
                    delay={index * 75}
                  >
                    <article className="mx-auto w-full max-w-3xl">
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

                            <p className="mt-3 text-justify font-light leading-snug">
                              {atividade.bio}
                            </p>
                          </details>
                        )}

                        {atividade.sessoes && (
                          <CronogramaDetalhado
                            sessoes={atividade.sessoes}
                          />
                        )}
                        
                        {atividade.premiacao && (
                          <div className="mt-5 border-l-4 border-purple pl-4">
                            <p className="font-body text-sm font-bold uppercase tracking-wide text-purple md:text-base">
                              Premiação
                            </p>

                            <p className="mt-1 font-body text-sm font-normal leading-relaxed text-ink md:text-base">
                              {atividade.premiacao}
                            </p>

                            <p className="mt-2 font-body text-sm font-bold tracking-wide text-purple md:text-base">
                              1º lugar · 2º lugar · 3º lugar
                            </p>
                          </div>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ),
              )}
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