import { ArrowUpRight, Building2, Car, Heart, House, Plane } from "lucide-react"
import { zap } from "@/data"

const SEGUROS = [
  { nome: "Auto", texto: "Carro, moto e frota, com assistência 24h.", icone: Car, msg: "auto" },
  { nome: "Residencial", texto: "Casa ou apartamento, próprio ou alugado.", icone: House, msg: "residencial" },
  { nome: "Empresarial", texto: "Escritórios, comércios e prédios comerciais.", icone: Building2, msg: "empresarial" },
  { nome: "Vida", texto: "Proteção financeira para quem depende de você.", icone: Heart, msg: "de vida" },
  { nome: "Viagem", texto: "Assistência médica e bagagem no Brasil e no exterior.", icone: Plane, msg: "viagem" },
]

export function OutrosSeguros() {
  return (
    <section id="outros" className="wrap scroll-mt-28 pb-20 md:pb-28">
      <span className="rotulo text-texto-suave">Para você e sua empresa</span>
      <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <h2 className="display text-[clamp(2.75rem,6.5vw,5rem)]">Outros seguros</h2>
        <p className="text-lg leading-relaxed text-texto-suave">
          Além dos cartórios, a DS2 cota e acompanha os seguros do dia a dia. Escolha um e a conversa abre pronta no
          WhatsApp.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SEGUROS.map(({ nome, texto, icone: Icone, msg }) => (
          <li key={nome}>
            <a
              href={zap(`Olá, quero uma cotação de seguro ${msg}.`)}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col rounded-[28px] bg-branco p-6 transition-colors duration-200 hover:bg-onyx hover:text-branco focus-visible:bg-onyx focus-visible:text-branco"
            >
              <div className="flex items-start justify-between">
                <Icone className="size-8 stroke-[1.5]" aria-hidden="true" />
                <ArrowUpRight
                  className="size-5 text-texto-suave transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-branco"
                  aria-hidden="true"
                />
              </div>
              <h3 className="titulo-2 mt-12 text-2xl">{nome}</h3>
              <p className="mt-2 text-[15px] leading-snug text-texto-suave group-hover:text-prata group-focus-visible:text-prata">
                {texto}
              </p>
              <span className="sr-only">(abre o WhatsApp)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
