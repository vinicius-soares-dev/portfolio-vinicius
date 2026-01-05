import { Link } from "react-router-dom"
import {
  Code2,
  BarChart3,
  PenTool,
  ArrowRight
} from "lucide-react"

export default function Services() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="services-title"
      id="services"

    >
      {/* Glow sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[200px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">

        {/* Title */}
        <div className="max-w-3xl mb-20">
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-textPrimary mb-4"
          >
            Como posso ajudar o seu negócio
          </h2>
          <p className="text-textSecondary text-lg">
            Serviços pensados para trabalhar juntos,
            gerando mais visibilidade, conversão e crescimento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Desenvolvimento */}
          <div
            className="
              group relative bg-surface border border-border rounded-2xl p-8
              transition-all duration-300
              hover:-translate-y-1 hover:border-primary/40
              hover:shadow-[0_0_0_1px_rgba(37,99,235,0.3)]
            "
          >
            <div className="mb-6">
              <Code2 className="text-primary" size={32} />
            </div>

            <h3 className="text-xl font-bold text-textPrimary mb-3">
              Desenvolvimento Web
            </h3>

            <p className="text-textSecondary mb-5">
              Sites, landing pages e sistemas sob medida,
              focados em performance, SEO e escalabilidade.
            </p>

            <ul className="text-textSecondary space-y-2 mb-8 text-sm">
              <li>• Sites institucionais</li>
              <li>• Landing pages de alta conversão</li>
              <li>• Sistemas web personalizados</li>
            </ul>

            <Link
              to="/servicos"
              className="
                inline-flex items-center gap-2 text-primary font-medium
                group-hover:gap-3 transition-all
              "
            >
              Ver detalhes
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Marketing */}
          <div
            className="
              group relative bg-surface border border-border rounded-2xl p-8
              transition-all duration-300
              hover:-translate-y-1 hover:border-primary/40
              hover:shadow-[0_0_0_1px_rgba(37,99,235,0.3)]
            "
          >
            <div className="mb-6">
              <BarChart3 className="text-primary" size={32} />
            </div>

            <h3 className="text-xl font-bold text-textPrimary mb-3">
              Marketing Digital & Tráfego Pago
            </h3>

            <p className="text-textSecondary mb-5">
              Estratégias para atrair o público certo,
              gerar leads e transformar visitas em oportunidades.
            </p>

            <ul className="text-textSecondary space-y-2 mb-8 text-sm">
              <li>• Google Ads</li>
              <li>• Funil e jornada do cliente</li>
              <li>• Otimização de conversão</li>
            </ul>

            <Link
              to="/servicos"
              className="
                inline-flex items-center gap-2 text-primary font-medium
                group-hover:gap-3 transition-all
              "
            >
              Ver detalhes
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Copy & Design */}
          <div
            className="
              group relative bg-surface border border-border rounded-2xl p-8
              transition-all duration-300
              hover:-translate-y-1 hover:border-primary/40
              hover:shadow-[0_0_0_1px_rgba(37,99,235,0.3)]
            "
          >
            <div className="mb-6">
              <PenTool className="text-primary" size={32} />
            </div>

            <h3 className="text-xl font-bold text-textPrimary mb-3">
              Copywriting & Design
            </h3>

            <p className="text-textSecondary mb-5">
              Texto estratégico e visual profissional
              para gerar confiança e incentivar ação.
            </p>

            <ul className="text-textSecondary space-y-2 mb-8 text-sm">
              <li>• Copy para sites e landing pages</li>
              <li>• Design estratégico</li>
              <li>• Experiência do usuário (UX)</li>
            </ul>

            <Link
              to="/servicos"
              className="
                inline-flex items-center gap-2 text-primary font-medium
                group-hover:gap-3 transition-all
              "
            >
              Ver detalhes
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
