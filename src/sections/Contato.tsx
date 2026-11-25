import { useState, type FormEvent } from "react"
import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { IconeInstagram, IconeWhatsApp } from "@/components/icones"
import { EMAIL, INSTAGRAM, TELEFONE, TIPOS_SEGURO, zap } from "@/data"

const CAMPO = "h-12 rounded-lg border-0 bg-branco px-4 text-base md:text-base focus-visible:ring-2 focus-visible:ring-onyx"

export function Contato() {
  const [nome, setNome] = useState("")
  const [seguro, setSeguro] = useState(TIPOS_SEGURO[0])
  const [msg, setMsg] = useState("")

  function enviar(e: FormEvent) {
    e.preventDefault()
    const texto = `Olá, sou ${nome.trim()}. Quero uma cotação de ${seguro}.${msg.trim() ? " " + msg.trim() : ""}`
    window.open(zap(texto), "_blank", "noopener")
  }

  const canais = [
    { rotulo: "Telefone e WhatsApp", valor: TELEFONE, href: zap(), icone: <IconeWhatsApp className="size-5" />, externo: true },
    { rotulo: "E-mail", valor: EMAIL, href: `mailto:${EMAIL}`, icone: <Mail className="size-5" />, externo: false },
    { rotulo: "Instagram", valor: `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}`, icone: <IconeInstagram className="size-5" />, externo: true },
  ]

  return (
    <section id="contato" className="scroll-mt-28 rounded-t-[40px] bg-onyx text-branco md:rounded-t-[64px]">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <span className="rotulo text-fumaca">Contato</span>
          <h2 className="display mt-4 text-[clamp(3.5rem,9vw,8.125rem)]">Fale com a DS2</h2>
          <p className="mt-6 text-lg text-prata">O jeito mais rápido é o WhatsApp. Respondemos em horário comercial.</p>

          <ul className="mt-10 flex flex-col">
            {canais.map((c) => (
              <li key={c.rotulo} className="border-t border-[#2f2f33]">
                <a
                  href={c.href}
                  {...(c.externo ? { target: "_blank", rel: "noopener" } : {})}
                  className="flex items-center gap-4 py-4 transition-colors hover:text-prata"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-grafite">{c.icone}</span>
                  <span className="flex flex-col">
                    <span className="rotulo text-fumaca">{c.rotulo}</span>
                    <span className="text-lg font-medium">{c.valor}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 border-y border-[#2f2f33] py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-grafite">
                <MapPin className="size-5" />
              </span>
              <address className="flex flex-col not-italic">
                <span className="rotulo text-fumaca">Endereço</span>
                <span className="leading-snug">
                  Rua Barão de Itapetininga, 37, Bloco 4, Sala 207
                  <br />
                  República, São Paulo, SP, 01042-916
                </span>
              </address>
            </li>
          </ul>
        </div>

        <form onSubmit={enviar} className="flex flex-col gap-5 self-start rounded-[32px] bg-nevoa p-7 text-onyx md:p-10">
          <div>
            <h3 className="titulo-2 text-[28px]">Pedir cotação</h3>
            <p className="mt-1 text-texto-suave">Preencha e a mensagem abre pronta no seu WhatsApp.</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="f-nome">Nome</Label>
            <Input id="f-nome" required autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} className={CAMPO} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="f-seguro">Seguro</Label>
            <NativeSelect id="f-seguro" value={seguro} onChange={(e) => setSeguro(e.target.value)} className={CAMPO}>
              {TIPOS_SEGURO.map((t) => (
                <NativeSelectOption key={t}>{t}</NativeSelectOption>
              ))}
            </NativeSelect>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="f-msg">Mensagem (opcional)</Label>
            <Textarea
              id="f-msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ex.: Tabelionato de Notas em Campinas, apólice vence em março."
              className="min-h-28 rounded-lg border-0 bg-branco px-4 py-3 text-base md:text-base focus-visible:ring-2 focus-visible:ring-onyx"
            />
          </div>
          <Button type="submit" size="lg" variant="zap" className="mt-1">
            <IconeWhatsApp />
            Enviar pelo WhatsApp
          </Button>
        </form>
      </div>
    </section>
  )
}
