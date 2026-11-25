import { Topo } from "@/components/Topo"
import { Destaque } from "@/sections/Destaque"
import { Cartorios } from "@/sections/Cartorios"
import { EntendaRC } from "@/sections/EntendaRC"
import { OutrosSeguros } from "@/sections/OutrosSeguros"
import { QuemSomos } from "@/sections/QuemSomos"
import { Daia } from "@/sections/Daia"
import { Assistencia } from "@/sections/Assistencia"
import { Contato } from "@/sections/Contato"
import { Rodape, ZapFlutuante } from "@/sections/Rodape"
export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-onyx focus:px-4 focus:py-3 focus:text-branco"
      >
        Pular para o conteúdo
      </a>
      <Topo />
      <main id="conteudo">
        <Destaque />
        <Cartorios />
        <EntendaRC />
        <OutrosSeguros />
        <QuemSomos />
        <Daia />
        <Assistencia />
        <Contato />
      </main>
      <Rodape />
      <ZapFlutuante />
    </>
  )
}
