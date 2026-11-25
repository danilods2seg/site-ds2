import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconeWhatsApp } from "@/components/icones"
import { POR_QUE, zap } from "@/data"
import { cn } from "@/lib/utils"
const PRODUTOS = [
  {
    tag: "Carro-chefe",
    titulo: "RC Profissional para Cartórios",
    texto:
      "Seguro de Responsabilidade Civil Profissional (E&O) para notários, registradores, oficiais de protesto e seus escreventes.",
    itens: [
      "Indenização a terceiros por erros na prática dos atos, conforme a apólice",
      "Custos de defesa em processos e reclamações",
      "Opção de cobertura retroativa para atos anteriores à contratação",
      "Ajuda da DS2 do aviso de sinistro até o desfecho",
    ],
    cta: "Cotar RC para meu cartório",
    msg: "Olá, quero uma cotação de seguro RC para cartório.",
    claro: true,
  },
  {
    tag: "Provimento CNJ 227",
    titulo: "Seguro Garantia para Cartórios",
    texto: "Garantia exigida pelo Provimento CNJ 227 para o passivo trabalhista da serventia.",
    itens: [
      "Não é preciso ter bens no valor total do passivo",
      "O seguro cobre apenas o déficit do passivo trabalhista",
      "Custo definido após análise da seguradora",
      "Orientação sobre a documentação e o prazo",
    ],
    cta: "Falar sobre o Seguro Garantia",
    msg: "Olá, quero saber sobre o Seguro Garantia do Provimento 227.",
    claro: false,
  },
]

export function Cartorios() {
  return (
    <section className="rounded-t-[40px] bg-onyx text-branco md:rounded-t-[64px]">
      {/* Por que a DS2 */}
      <div className="wrap py-16 md:py-20">
        <h2 className="rotulo text-fumaca">Por que a DS2</h2>
        <ol className="mt-6 grid gap-px overflow-hidden rounded-[28px] bg-grafite sm:grid-cols-2 lg:grid-cols-4">
          {POR_QUE.map((item, i) => (
            <li key={item} className="flex flex-col gap-6 bg-onyx p-6 md:min-h-[180px] md:justify-between">
              <span className="rotulo text-fumaca">0{i + 1}</span>
              <span className="text-lg leading-snug font-medium text-branco">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Duas proteções */}
      <div id="cartorios" className="wrap scroll-mt-28 pb-20 md:pb-24">
        <span className="rotulo text-fumaca">Para cartórios e tabelionatos</span>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="display text-[clamp(2.75rem,6.5vw,5rem)]">Duas proteções que todo titular deveria conhecer</h2>
          <p className="text-lg leading-relaxed text-prata">
            O titular do cartório responde pessoalmente pelos prejuízos causados a terceiros na prestação do serviço (Lei
            8.935/94). O seguro certo protege o seu patrimônio quando uma reclamação chega.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PRODUTOS.map((p) => (
            <article
              key={p.titulo}
              className={cn(
                "flex flex-col rounded-[28px] p-7 md:rounded-[32px] md:p-10",
                p.claro ? "bg-branco text-onyx" : "bg-grafite text-branco",
              )}
            >
              <span
                className={cn(
                  "rotulo w-fit rounded-[64px] px-3 py-1.5",
                  p.claro ? "bg-onyx text-branco" : "bg-prata text-onyx",
                )}
              >
                {p.tag}
              </span>
              <h3 className="titulo-2 mt-6 text-[28px] md:text-[34px]">{p.titulo}</h3>
              <p className={cn("mt-3 leading-relaxed", p.claro ? "text-texto-suave" : "text-prata")}>{p.texto}</p>
              <ul className="mt-6 flex flex-col gap-3 border-t pt-6" style={{ borderColor: p.claro ? "var(--prata)" : "#45454a" }}>
                {p.itens.map((item) => (
                  <li key={item} className="flex gap-3 leading-snug">
                    <Check className={cn("mt-0.5 size-[18px] shrink-0", p.claro ? "text-onyx" : "text-prata")} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button asChild size="lg" variant={p.claro ? "default" : "claro"} className="w-full sm:w-fit">
                  <a href={zap(p.msg)} target="_blank" rel="noopener">
                    <IconeWhatsApp />
                    {p.cta}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
