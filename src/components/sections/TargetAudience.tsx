import { Check, X } from "lucide-react"

export default function TargetAudience() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      aria-labelledby="target-title"
    >
      {/* Linha central decorativa */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-border/60" />

      <div className="relative max-w-7xl mx-auto px-4 py-28">

        {/* Title */}
        <div className="max-w-3xl mb-24">
          <h2
            id="target-title"
            className="text-3xl md:text-4xl font-bold text-textPrimary mb-4"
          >
            Esse serviço é para você?
          </h2>
          <p className="text-textSecondary text-lg">
            Esse projeto não é genérico — ele é pensado para quem
            leva o digital a sério.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 items-start">

          {/* É PARA VOCÊ */}
          <div
            className="
              group relative bg-surface rounded-3xl p-10
              border border-primary/30
              transform md:-rotate-1
              transition-all duration-300
              hover:rotate-0 hover:-translate-y-2
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition" />

            <h3 className="relative text-2xl font-bold text-textPrimary mb-8">
              É para você se:
            </h3>

            <ul className="relative space-y-5">
              {[
                "Quer um site que gere resultados reais",
                "Se preocupa com SEO, performance e conversão",
                "Busca algo profissional e sob medida",
                "Quer alguém que entenda tecnologia e negócio",
                "Prefere qualidade a soluções genéricas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <Check size={16} className="text-primary" />
                  </span>
                  <span className="text-textSecondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NÃO É PARA VOCÊ */}
          <div
            className="
              group relative bg-surface rounded-3xl p-10
              border border-red-500/30
              transform md:rotate-1
              transition-all duration-300
              hover:rotate-0 hover:-translate-y-2
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-red-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition" />

            <h3 className="relative text-2xl font-bold text-textPrimary mb-8">
              Não é para você se:
            </h3>

            <ul className="relative space-y-5">
              {[
                "Procura apenas o menor preço",
                "Quer algo pronto ou feito às pressas",
                "Não se preocupa com estratégia",
                "Quer copiar concorrentes",
                "Não pretende investir no digital",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                    <X size={16} className="text-red-500" />
                  </span>
                  <span className="text-textSecondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
