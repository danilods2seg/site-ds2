export const TELEFONE = "(11) 3259-7040"
export const EMAIL = "rc@ds2seguros.com.br"
export const INSTAGRAM = "ds2seg"

export function zap(texto = "Olá, vim pelo site da DS2.") {
  return `https://wa.me/551132597040?text=${encodeURIComponent(texto)}`
}

export const MENU = [
  { href: "#cartorios", label: "Cartórios" },
  { href: "#outros", label: "Outros seguros" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#assistencia", label: "Assistência 24h" },
  { href: "#contato", label: "Contato" },
]

export const POR_QUE = [
  "39 anos no mercado de seguros",
  "Foco em RC Profissional para notários e registradores",
  "Cotação com as principais seguradoras do ramo",
  "Acompanhamento de perto em caso de sinistro",
]

// Logos em public/img/seguradoras/ (origem: sites oficiais e Wikimedia Commons, nov/2026).
// "maior": logos quadrados ou com muito respiro, que precisam de mais altura para ficar do mesmo peso visual.
// "largo": logos muito horizontais, que ficam miúdos com a altura padrão.
export const SEGURADORAS: { nome: string; logo: string; maior?: boolean; largo?: boolean }[] = [
  { nome: "Tokio Marine", logo: "tokio-marine.png", largo: true },
  { nome: "Allianz", logo: "allianz.svg" },
  { nome: "AXA", logo: "axa.svg", maior: true },
  { nome: "Akad", logo: "akad.svg", maior: true },
  { nome: "Darwin", logo: "darwin.svg" },
  { nome: "Porto", logo: "porto.svg" },
  { nome: "Bradesco Seguros", logo: "bradesco.svg", largo: true },
  { nome: "HDI", logo: "hdi.png", maior: true },
  { nome: "Mapfre", logo: "mapfre.svg", largo: true },
  { nome: "Zurich", logo: "zurich.svg" },
  { nome: "Yelum (ex-Liberty)", logo: "yelum.svg", maior: true },
  { nome: "Azul Seguros", logo: "azul.svg", maior: true },
  { nome: "SulAmérica", logo: "sulamerica.svg" },
  { nome: "MetLife", logo: "metlife.svg" },
  { nome: "Sura", logo: "sura.svg", maior: true },
  { nome: "Suhai", logo: "suhai.svg" },
]

// Assistência 24h auto. Conferido nos sites oficiais das seguradoras em 24/11/2026.
// whatsapp: true → o link abre o WhatsApp em vez de ligar.
// href → link para um site (ex.: portal de assistência); "numero" vira o texto do link.
export type Fone = { rotulo?: string; numero: string; whatsapp?: boolean; href?: string }
export const ASSISTENCIA: { nome: string; fones: Fone[] }[] = [
  { nome: "Allianz", fones: [{ numero: "0800 013 0700" }] },
  { nome: "Azul", fones: [{ rotulo: "Capitais", numero: "4004-3700" }, { rotulo: "Demais", numero: "0300 123 2985" }] },
  // Site oficial lista só a Central de Relacionamento (auto e sinistros); o antigo 4004-2757 não aparece mais.
  { nome: "Bradesco", fones: [{ rotulo: "Capitais", numero: "4004-0237" }, { rotulo: "Demais", numero: "0800 237 0237" }] },
  // Darwin não divulga 0800 de assistência: atendimento/sinistro pelo (11) 3512-7210 e assistência 24h pelo portal.
  {
    nome: "Darwin",
    fones: [
      { rotulo: "Telefone", numero: "(11) 3512-7210" },
      { rotulo: "WhatsApp", numero: "(11) 3512-7210", whatsapp: true },
      { rotulo: "Online", numero: "Pedir assistência", href: "https://assistencia.abraseuatendimento.com.br/darwin" },
    ],
  },
  {
    nome: "HDI",
    fones: [
      { rotulo: "WhatsApp", numero: "(11) 99524-8188", whatsapp: true },
      { rotulo: "Capitais", numero: "3003-5390" },
      { rotulo: "Demais", numero: "0800 434 4340" },
    ],
  },
  { nome: "Itaú", fones: [{ rotulo: "Capitais", numero: "3003-1010" }, { rotulo: "Demais", numero: "0800 720 1010" }] },
  {
    nome: "Mapfre",
    fones: [
      { numero: "0800 775 4545" },
      { rotulo: "WhatsApp", numero: "(11) 4004-0101", whatsapp: true },
    ],
  },
  {
    nome: "Porto Seguro",
    fones: [
      { rotulo: "Grande SP", numero: "333 76786" },
      { rotulo: "Capitais", numero: "4004-76786" },
      { rotulo: "Demais", numero: "0300 337 6786" },
    ],
  },
  { nome: "Tokio Marine", fones: [{ numero: "0800 31 86546" }] },
  { nome: "Yelum (ex-Liberty)", fones: [{ numero: "0800 701 4120" }] },
  { nome: "Zurich", fones: [{ numero: "0800 729 1400" }] },
]

export const TIPOS_SEGURO = [
  "RC Profissional para cartório",
  "Seguro Garantia (Provimento 227)",
  "Auto",
  "Residencial",
  "Empresarial",
  "Vida",
  "Viagem",
]
