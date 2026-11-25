import { IconeWhatsApp } from "@/components/icones"
import { INSTAGRAM, TELEFONE, zap } from "@/data"

export function Rodape() {
  return (
    <footer className="bg-onyx text-fumaca">
      <div className="wrap flex flex-col gap-6 border-t border-[#2f2f33] pt-10 pb-24 text-sm md:flex-row md:items-center md:justify-between md:pb-10 md:pr-24">
        <img src="img/logo-claro.png" alt="DS2 Corretora de Seguros" width={480} height={368} loading="lazy" className="h-12 w-auto self-start md:self-center" />
        <p>
          © {new Date().getFullYear()} DS2 Corretora de Seguros ·{" "}
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener" className="hover:text-branco">
            @{INSTAGRAM}
          </a>{" "}
          · {TELEFONE}
        </p>
      </div>
    </footer>
  )
}

export function ZapFlutuante() {
  return (
    <a
      href={zap()}
      target="_blank"
      rel="noopener"
      aria-label="Falar com a DS2 no WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-zap text-branco transition-transform hover:scale-105 md:right-6 md:bottom-6 md:size-16"
    >
      <IconeWhatsApp className="size-7 md:size-8" />
    </a>
  )
}
