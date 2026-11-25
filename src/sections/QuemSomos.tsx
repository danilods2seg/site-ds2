import { SEGURADORAS } from "@/data"
import { cn } from "@/lib/utils"

import type { ReactNode } from "react"

const NUMEROS: { chave: string; valor: ReactNode; texto: string }[] = [
  { chave: "anos", valor: "39", texto: "anos no mercado de seguros" },
  { chave: "2009", valor: "2009", texto: "emitindo apólices de RC para cartórios: 17 anos de atuação no segmento" },
  {
    chave: "premios",
    valor: (
      <>
        <span className="mr-1 align-top text-[0.45em]">R$</span>5 mi+
      </>
    ),
    texto: "em prêmios emitidos exclusivamente em RC Profissional para cartórios, notários e registradores",
  },
  { chave: "227", valor: "227", texto: "Seguro Garantia do Provimento CNJ" },
]

export function QuemSomos() {
  return (
    <section id="quem-somos" className="wrap scroll-mt-28 pb-20 md:pb-28">
      <div className="rounded-[40px] bg-branco p-7 md:rounded-[64px] md:p-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="rotulo text-texto-suave">Quem somos</span>
            <h2 className="display mt-4 text-[clamp(3.5rem,8vw,7rem)]">Tradição em seguros</h2>
            <div className="mt-8 flex flex-col gap-4 text-lg leading-relaxed text-texto-suave">
              <p>
                A DS2 Corretora de Seguros está há 39 anos no mercado. Ao longo desse tempo, se especializou em
                Responsabilidade Civil Profissional para cartórios: tabelionatos de notas e de protesto, registros de
                imóveis, civis e de títulos e documentos.
              </p>
              <p className="font-medium text-onyx">
                Desde 2009, protegendo a atividade notarial e registral, com mais de R$ 5 milhões em prêmios de seguros de
                Responsabilidade Civil Profissional emitidos.
              </p>
              <p>
                Nosso trabalho vai além de cotar: explicamos as condições da apólice em linguagem clara e acompanhamos o
                cliente de perto quando surge uma reclamação.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-3 self-start min-[420px]:grid-cols-2">
            {NUMEROS.map((n) => (
              <div key={n.chave}className="flex flex-col justify-between gap-6 rounded-[24px] bg-nevoa p-5 md:min-h-[210px] md:p-6">
                <dt className="display text-[56px] whitespace-nowrap md:text-[clamp(2.75rem,4.2vw,4rem)]">{n.valor}</dt>
                <dd className="text-[15px] leading-snug text-texto-suave">{n.texto}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 border-t border-prata pt-8">
          <h3 className="rotulo text-texto-suave">Seguradoras com que trabalhamos</h3>
          <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SEGURADORAS.map((s) => (
              <li
                key={s.nome}
                title={s.nome}
                className="group grid h-20 place-items-center rounded-[20px] bg-nevoa px-5 md:h-24 md:px-8"
              >
                <img
                  src={`img/seguradoras/${s.logo}`}
                  alt={s.nome}
                  loading="lazy"
                  className={cn(
                    "w-auto max-w-full object-contain opacity-60 mix-blend-multiply grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0",
                    s.maior ? "max-h-12 md:max-h-14" : s.largo ? "max-h-9 md:max-h-11" : "max-h-7 md:max-h-9",
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
