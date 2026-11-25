import { ArrowUpRight, Phone } from "lucide-react"
import { IconeWhatsApp } from "@/components/icones"
import { ASSISTENCIA, zap, type Fone } from "@/data"

const soDigitos = (n: string) => n.replace(/\D/g, "")
const linkFone = (f: Fone) =>
  f.href ?? (f.whatsapp ? `https://wa.me/55${soDigitos(f.numero)}` : `tel:${soDigitos(f.numero)}`)

export function Assistencia() {
  return (
    <section id="assistencia" className="wrap scroll-mt-28 pb-20 md:pb-28">
      <span className="rotulo text-texto-suave">Assistência 24h · Auto</span>
      <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <h2 className="display text-[clamp(2.75rem,6.5vw,5rem)]">Precisa de guincho ou socorro agora?</h2>
        <p className="text-lg leading-relaxed text-texto-suave">
          Telefones de assistência 24h automóvel das seguradoras. Tenha em mãos o número da apólice ou a placa do veículo.
        </p>
      </div>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ASSISTENCIA.map((s) => (
          <li key={s.nome} className="flex flex-col gap-4 rounded-[24px] bg-branco p-5">
            <h3 className="text-lg font-semibold">{s.nome}</h3>
            <ul className="mt-auto flex flex-col gap-1">
              {s.fones.map((f) => (
                <li key={`${f.rotulo ?? ""}-${f.numero}`}>
                  <a
                    href={linkFone(f)}
                    {...(f.whatsapp || f.href ? { target: "_blank", rel: "noopener" } : {})}
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 -mx-3 transition-colors hover:bg-nevoa"
                  >
                    <span className="flex items-baseline gap-1.5">
                      {f.rotulo && <span className="rotulo w-[70px] shrink-0 whitespace-nowrap text-texto-suave">{f.rotulo}</span>}
                      <span className="text-[15px] font-medium whitespace-nowrap tabular-nums">{f.numero}</span>
                    </span>
                    {f.href ? (
                      <ArrowUpRight className="size-4 shrink-0 text-texto-suave" aria-hidden="true" />
                    ) : f.whatsapp ? (
                      <IconeWhatsApp className="size-4 shrink-0 text-texto-suave" />
                    ) : (
                      <Phone className="size-4 shrink-0 text-texto-suave" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <a
            href={zap("Olá, preciso de ajuda com a assistência 24h do meu seguro.")}
            target="_blank"
            rel="noopener"
            className="flex h-full flex-col gap-4 rounded-[24px] bg-onyx p-5 text-branco transition-colors hover:bg-grafite"
          >
            <h3 className="text-lg font-semibold">Não achou?</h3>
            <span className="mt-auto inline-flex items-center gap-2 font-medium">
              <IconeWhatsApp className="size-5" />
              Chame a DS2 no WhatsApp
            </span>
          </a>
        </li>
      </ul>

      <p className="rotulo mt-6 text-texto-suave normal-case">
        * Telefones conferidos nos sites das seguradoras em novembro de 2026. Em caso de dúvida, use o número do cartão
        do segurado ou o app da seguradora.
      </p>
    </section>
  )
}
