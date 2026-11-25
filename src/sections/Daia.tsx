import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconeInstagram } from "@/components/icones"

export function Daia() {
  return (
    <section aria-labelledby="titulo-daia" className="wrap pb-20 md:pb-28">
      <div className="grid overflow-hidden rounded-[40px] bg-onyx text-branco md:grid-cols-[minmax(0,420px)_1fr] md:rounded-[64px]">
        <img
          src="img/daia/daia-explicando.webp"
          alt="Daia, personagem da DS2 criada com IA, explicando com as mãos"
          width={700}
          height={1050}
          loading="lazy"
          className="order-last mx-auto block w-[min(82%,340px)] self-end md:order-none md:mx-0 md:w-full md:pt-12 md:pl-6"
        />
        <div className="flex flex-col justify-center p-7 md:p-14">
          <span className="rotulo w-fit rounded-[64px] bg-coral px-3 py-1.5 text-onyx">Conheça a Daia</span>
          <h2 id="titulo-daia" className="display mt-6 text-[clamp(3rem,7vw,6rem)]">
            Pergunta <br className="hidden sm:block" />
            pra <span className="text-coral">Daia!</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-prata">
            A Daia é uma personagem criada com IA pela DS2 para descomplicar o "segurês". Ela explica seguro de auto, casa,
            empresa e cartórios como uma amiga que entende do assunto. Ficou com dúvida? Pergunta pra Daia!
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="coral">
              <a href="https://daiaexplica.com.br" target="_blank" rel="noopener">
                Ver o site da Daia
                <ArrowUpRight />
              </a>
            </Button>
            <a
              href="https://instagram.com/daiaexplica"
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center gap-2 px-2 font-medium text-coral underline-offset-4 hover:underline"
            >
              <IconeInstagram className="size-5" />
              @daiaexplica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
