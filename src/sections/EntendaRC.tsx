const PONTOS = [
  {
    titulo: "Base de reclamação",
    texto:
      'A maioria das apólices de RC Profissional funciona por "claims made": vale a apólice em vigor quando a reclamação é feita, não quando o ato foi praticado. Por isso, manter o seguro renovado sem interrupção é essencial.',
  },
  {
    titulo: "Retroatividade",
    texto:
      "A data de retroatividade define desde quando os atos praticados ficam cobertos. É ela que protege o tabelião por atos anteriores à vigência, desde que estejam dentro da retroatividade inicial da apólice e que as renovações sejam feitas dentro do prazo.",
  },
  {
    titulo: "Aviso rápido",
    texto:
      "Recebeu uma notificação, citação ou reclamação? Avise a corretora logo. O aviso no prazo é uma condição da apólice, e a DS2 conduz o processo com a seguradora.",
  },
]

export function EntendaRC() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="flex items-end gap-6">
        <div className="min-w-0 flex-1">
          <span className="rotulo text-texto-suave">Entenda o seguro RC</span>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <h2 className="display text-[clamp(2.75rem,6.5vw,5rem)]">Três pontos que fazem diferença na hora do sinistro</h2>
            <p className="text-lg leading-relaxed text-texto-suave">
              Seguro de RC tem regras próprias. Conhecer estes três pontos evita surpresa quando chega uma citação.
            </p>
          </div>
        </div>
        {/* Daia "espiando" por trás dos cards: a parte de baixo some atrás deles. */}
        <img
          src="img/daia/daia-pensativa.webp"
          alt=""
          width={600}
          height={900}
          loading="lazy"
          className="-mb-24 hidden w-[200px] shrink-0 md:block lg:w-[240px]"
        />
      </div>

      <ol className="relative z-10 mt-12 grid gap-4 md:grid-cols-3">
        {PONTOS.map((p, i) => (
          <li key={p.titulo} className="flex flex-col rounded-[28px] bg-branco p-7 md:p-8">
            <span className="display text-[64px] text-fumaca md:text-[80px]" aria-hidden="true">
              0{i + 1}
            </span>
            <h3 className="titulo-2 mt-6 text-2xl">{p.titulo}</h3>
            <p className="mt-3 leading-relaxed text-texto-suave">{p.texto}</p>
          </li>
        ))}
      </ol>

      <p className="rotulo mt-8 text-texto-suave normal-case">
        * As coberturas, limites e franquias variam conforme a seguradora e as condições da apólice contratada.
      </p>
    </section>
  )
}
