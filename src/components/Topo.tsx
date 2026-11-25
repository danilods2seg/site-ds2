import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { IconeWhatsApp } from "@/components/icones"
import { MENU, TELEFONE, zap } from "@/data"

export function Topo() {
  return (
    <header className="sticky top-0 z-40 bg-prata-claro/90 backdrop-blur-md">
      <div className="wrap flex h-20 items-center justify-between gap-4 md:h-28">
        <a href="#inicio" className="shrink-0" aria-label="DS2 Corretora de Seguros, início">
          <img src="img/logo-escuro.png" alt="DS2 Corretora de Seguros" width={480} height={368} className="h-12 w-auto md:h-16" />
        </a>

        <nav aria-label="Menu principal" className="hidden rounded-[48px] bg-branco px-2 py-2 lg:block">
          <ul className="flex items-center">
            {MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-[40px] px-4 py-2.5 text-[15px] font-medium text-texto-suave transition-colors hover:bg-nevoa hover:text-onyx"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="hidden sm:inline-flex">
            <a href={zap()} target="_blank" rel="noopener">
              <IconeWhatsApp />
              {TELEFONE}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="claro" size="icon-lg" className="size-12 rounded-full lg:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-0 bg-onyx p-8 text-branco">
              <SheetTitle className="rotulo text-fumaca">Menu</SheetTitle>
              <nav aria-label="Menu principal (celular)" className="mt-4">
                <ul className="flex flex-col gap-1">
                  {MENU.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <a href={item.href} className="display block py-2 text-[40px] text-branco hover:text-prata">
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button asChild variant="zap" size="lg" className="mt-auto">
                <a href={zap()} target="_blank" rel="noopener">
                  <IconeWhatsApp />
                  {TELEFONE}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
