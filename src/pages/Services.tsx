import { motion } from "framer-motion"
import {
  Layout,
  Code,
  TrendingUp,
  Palette,
  PenTool,
  Gauge,
  CheckCircle,
  ClipboardList,
  LayoutDashboard,
  Code2,
  Rocket,
} from "lucide-react"
import FinalCTA from "../components/sections/FinalCTA"

/* ===========================
   ANIMAÇÕES BASE
=========================== */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

/* ===========================
   SERVIÇOS
=========================== */

const services = [
  {
    icon: Layout,
    title: "Sites Profissionais",
    desc: "Sites rápidos, modernos e focados em conversão.",
    cta: "Quero um site profissional",
    url: "sites-profissionais",
    items: ["Design exclusivo", "SEO técnico", "Alta performance"]
  },
  {
    icon: Code,
    title: "Sistemas Web",
    desc: "Plataformas sob medida para automatizar processos.",
    cta: "Quero um sistema sob medida",
    url: "sistemas-web",
    items: ["Painel administrativo", "Escalável", "Segurança"]
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    desc: "Campanhas focadas em leads e vendas.",
    cta: "Quero vender com tráfego pago",
    url: "trafego-pago",
    items: ["Google Ads", "Meta Ads", "Otimização contínua"]
  },
  {
    icon: PenTool,
    title: "Copywriting",
    desc: "Textos que guiam, convencem e convertem.",
    cta: "Quero uma copy que converte",
    url: "copywriting",
    items: ["Copy para páginas", "Funis", "CTAs estratégicos"]
  },
  {
    icon: Palette,
    title: "Design Estratégico",
    desc: "Visual alinhado à marca e à conversão.",
    cta: "Quero um design profissional",
    url: "design",
    items: ["UI premium", "UX", "Branding digital"]
  },
  {
    icon: Gauge,
    title: "SEO & Performance",
    desc: "Posicionamento e velocidade como prioridade.",
    cta: "Quero melhorar meu SEO",
    url: "seo-e-perfomance",
    items: ["Core Web Vitals", "SEO on-page", "Monitoramento"]
  }
]


const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico & Estratégia",
    desc: "Entendo seu negócio, público e objetivos antes de qualquer código."
  },
  {
    icon: LayoutDashboard,
    title: "Planejamento & Design",
    desc: "UX, copy e estrutura pensadas para conversão."
  },
  {
    icon: Code2,
    title: "Desenvolvimento & Validações",
    desc: "Implementação com acompanhamento em tempo real."
  },
  {
    icon: Rocket,
    title: "Entrega, Otimização & Escala",
    desc: "Publicação, SEO, performance e evolução contínua."
  }
]


export default function Services() {

  return (
    <main className="bg-background">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluções completas para crescer no digital
            </h1>
            <p className="text-textSecondary text-lg">
              Cada serviço faz parte de uma estratégia maior.
              Tudo é pensado para gerar resultado.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-3"
          >
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={i}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-3xl border border-border bg-surface p-8 overflow-hidden"
                >
                  {/* Glow no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Ícone */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={24} />
                    </div>

                    {/* Conteúdo */}
                    <h3 className="text-2xl font-bold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-textSecondary mb-6">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 text-sm text-textSecondary">
                      {service.items.map((it, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle size={16} className="text-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                      <a
                        href={`/servicos/${service.url}`}
                        target="_self"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          text-primary font-medium
                          opacity-90
                          transition-all
                          group-hover:gap-3
                          group-hover:opacity-100
                        "
                      >
                        {service.cta}
                        <TrendingUp size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

<section className="py-32 bg-surface">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-20">
      Como seu projeto evolui
    </h2>

    <div className="relative border-l border-border pl-10 space-y-20">
      {steps.map((step, i) => {
        const Icon = step.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-8"
          >
            {/* ÍCONE */}
            <div className="absolute -left-[22px] top-1 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon size={18} className="text-primary" />
            </div>

            {/* CONTEÚDO */}
            <h3 className="text-2xl font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-textSecondary leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>

    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 grid gap-16 md:grid-cols-2 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Área exclusiva do cliente
          </h2>

          <p className="text-textSecondary text-base md:text-lg mb-8">
            Você acompanha tudo em tempo real:
            andamento, entregas e próximos passos.
          </p>

          <ul className="space-y-4 text-textSecondary">
            {[
              "Status atualizado",
              "Etapas concluídas",
              "Comunicação centralizada",
              "Total transparência"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* MOCKUP DO SISTEMA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-border bg-surface shadow-2xl overflow-hidden"
        >
          {/* Header fake */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-border bg-background">
            <div>
              <p className="text-xs sm:text-sm text-textSecondary">
                Área do Cliente
              </p>
              <p className="font-semibold text-sm sm:text-base">
                Projeto • Site Institucional
              </p>
            </div>

            <span className="text-xs w-fit px-3 py-1 rounded-full bg-primary/20 text-primary">
              Em andamento
            </span>
          </div>

          {/* Corpo */}
          <div className="grid md:grid-cols-[180px_1fr] min-h-[300px]">

            {/* Sidebar */}
            <aside
              className="
                border-b md:border-b-0 md:border-r border-border
                p-3 md:p-4
                flex md:flex-col gap-2 md:gap-4
                overflow-x-auto md:overflow-visible
                text-sm
              "
            >
              {[
                "Visão geral",
                "Etapas",
                "Entregas",
                "Mensagens"
              ].map((item, i) => (
                <div
                  key={i}
                  className={`
                    whitespace-nowrap
                    px-3 py-2 rounded-md
                    transition
                    ${
                      i === 0
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-textSecondary hover:text-text"
                    }
                  `}
                >
                  {item}
                </div>
              ))}
            </aside>

            {/* Conteúdo */}
            <div className="p-4 md:p-6 space-y-6">

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Status", value: "Em progresso" },
                  { label: "Entrega", value: "15 dias" },
                  { label: "Etapas", value: "3 / 6" }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-background p-4"
                  >
                    <p className="text-xs text-textSecondary mb-1">
                      {card.label}
                    </p>
                    <p className="font-semibold text-sm md:text-base">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progresso */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Progresso do projeto
                </p>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <div className="h-full w-[55%] bg-primary rounded-full transition-all" />
                </div>
              </div>

              {/* Etapas */}
              <div className="space-y-3">
                {[
                  "Briefing aprovado",
                  "Design em andamento",
                  "Desenvolvimento"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>


        <FinalCTA />

    </main>
  )
}
