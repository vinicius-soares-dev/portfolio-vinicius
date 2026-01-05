import {
  AlertTriangle,
  XCircle,
  CheckCircle,
  TrendingUp
} from "lucide-react"

export default function ProblemSolution() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="problem-solution-title"
    >
      {/* Glow decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 grid gap-12 md:grid-cols-2 items-start">

        {/* PROBLEMA */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-primary" size={26} />
            <h2
              id="problem-solution-title"
              className="text-3xl md:text-4xl font-bold text-textPrimary"
            >
              Seu site não pode ser apenas bonito
            </h2>
          </div>

          <p className="text-textSecondary mb-6 max-w-md">
            A maioria dos sites falha não por falta de design,
            mas por não ter estratégia, performance e conversão.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 mt-1" size={18} />
              <span className="text-textSecondary">
                Não aparece no Google
              </span>
            </li>

            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 mt-1" size={18} />
              <span className="text-textSecondary">
                Carrega lento no celular
              </span>
            </li>

            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 mt-1" size={18} />
              <span className="text-textSecondary">
                Não gera contatos nem vendas
              </span>
            </li>

            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 mt-1" size={18} />
              <span className="text-textSecondary">
                Vira só um cartão de visitas online
              </span>
            </li>
          </ul>
        </div>

        {/* SOLUÇÃO */}
        <div className="relative bg-surface border border-border rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-primary" size={26} />
            <h3 className="text-2xl font-bold text-textPrimary">
              O problema não é o site. É a estratégia.
            </h3>
          </div>

          <p className="text-textSecondary mb-8">
            Eu desenvolvo soluções digitais completas,
            combinando código, SEO, copy e performance
            para transformar visitas em oportunidades reais.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={18} />
              <span className="text-textSecondary">
                Estrutura técnica pensada para SEO
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={18} />
              <span className="text-textSecondary">
                Performance real no desktop e mobile
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={18} />
              <span className="text-textSecondary">
                Comunicação clara que gera ação
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1" size={18} />
              <span className="text-textSecondary">
                Soluções que escalam com o negócio
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
