import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconeWhatsApp } from "@/components/icones"
import { zap } from "@/data"

export function Destaque() {
  return (
    <section id="inicio" className="wrap pt-6 md:pt-10">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_clamp(300px,31vw,430px)] lg:gap-x-6">
        <div className="pb-8 md:pb-12 lg:pb-24">
          <span className="rotulo inline-flex items-center gap-2 rounded-[64px] bg-branco px-4 py-2 text-onyx">
            <span className="size-1.5 rounded-full bg-onyx" aria-hidden="true" />
            Especialistas em cartórios
          </span>

          <h1 className="display mt-6 text-[clamp(2.75rem,7.6vw,7.5rem)] text-onyx lg:text-[clamp(4rem,5.6vw,5.75rem)]">
            Seguro de Responsabilidade Civil para cartórios,{" "}
            <span className="text-texto-suave">com quem entende do assunto.</span>
          </h1>

          <p className="mt-10 max-w-[620px] text-lg leading-[1.45] text-texto-suave md:mt-12 md:text-xl">
            A DS2 cuida da proteção de tabeliães, registradores e oficiais: do seguro RC Profissional ao Seguro Garantia do
            Provimento CNJ 227. Atendemos também você e sua família em auto, residência, empresa, vida e viagem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={zap("Olá, quero uma cotação de seguro RC para cartório.")} target="_blank" rel="noopener">
                <IconeWhatsApp />
                Pedir cotação pelo WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="contorno">
              <a href="#cartorios">
                Conhecer os seguros
                <ArrowDown />
              </a>
            </Button>
          </div>
        </div>

        {/* A Daia fica "em pé" sobre o bloco preto da seção seguinte. */}
        <img
          src="img/daia/daia-apontando.webp"
          alt="Daia, personagem da DS2, sorrindo e apontando para o título"
          width={820}
          height={1002}
          fetchPriority="high"
          className="ml-auto block w-[min(78vw,340px)] self-end sm:w-[360px] lg:w-full"
        />
      </div>
    </section>
  )
}
