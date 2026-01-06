import { motion } from "framer-motion"
import {
  ArrowRight,
  Zap,
  Search,
  BarChart3,
  Gauge,
  LineChart,
} from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import WhatsAppButton from "../components/WhatsAppButton"

export default function SeoPerformance() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine)
  }, [])

  return (
    <main className="relative overflow-hidden bg-background text-textPrimary">

      {/* Partículas */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 35 },
            color: { value: "#2563eb" },
            opacity: { value: 0.15 },
            size: { value: 2 },
            move: { enable: true, speed: 0.5 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold max-w-3xl mb-6"
        >
          SEO e performance para
          <span className="text-primary"> atrair</span>,
          <span className="text-primary"> converter</span> e
          <span className="text-primary"> escalar</span>
        </motion.h1>

        <p className="text-textSecondary max-w-2xl text-lg mb-10">
          Não adianta ter um site bonito se ninguém encontra.
          Eu preparo sua estrutura para o Google,
          melhoro a velocidade e transformo visitas em oportunidades reais.
        </p>

        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
        >
          Quero melhorar meu posicionamento
          <ArrowRight />
        </a>
      </section>

      {/* RESULTADOS */}
      <section className="relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-8">

          {[
            { icon: Search, value: "+3x", label: "Mais tráfego orgânico" },
            { icon: Zap, value: "-60%", label: "Tempo de carregamento" },
            { icon: BarChart3, value: "+45%", label: "Conversões" },
            { icon: LineChart, value: "Top 5", label: "Posições no Google" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-8 text-center"
            >
              <item.icon className="mx-auto text-primary mb-4" size={32} />
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-textSecondary mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          O que eu faço no seu SEO
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <ServiceCard
            icon={Search}
            title="SEO Técnico"
            desc="Estrutura sólida para o Google entender,
            indexar e priorizar seu site."
            items={[
              "SEO on-page",
              "Indexação correta",
              "Sitemap e robots.txt",
            ]}
          />

          <ServiceCard
            icon={Gauge}
            title="Performance"
            desc="Sites rápidos convertem mais
            e ranqueiam melhor."
            items={[
              "Core Web Vitals",
              "Otimização de imagens",
              "Código limpo e leve",
            ]}
          />

          <ServiceCard
            icon={BarChart3}
            title="SEO Estratégico"
            desc="Conteúdo e estrutura pensados
            para gerar tráfego qualificado."
            items={[
              "Pesquisa de palavras-chave",
              "Arquitetura de páginas",
              "SEO focado em conversão",
            ]}
          />

        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="relative z-10 bg-surface">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-6">
            SEO não é mágica.
            <span className="text-primary"> É processo.</span>
          </h3>

          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Posicionamento sólido vem de base técnica,
            performance, conteúdo estratégico
            e acompanhamento contínuo.
            É isso que eu entrego.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Quer aparecer no Google do jeito certo?
          </h3>
          <p className="opacity-90 mb-8">
            Analiso seu site e te mostro exatamente
            onde estão as oportunidades de crescimento.
          </p>
          <a
            href="https://wa.me/5532999823915"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-primary px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
          >
            Falar comigo no WhatsApp
            <ArrowRight />
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}

/* CARD */
function ServiceCard({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: any
  title: string
  desc: string
  items: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 transition"
    >
      <Icon className="text-primary mb-4" size={28} />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-textSecondary mb-6">{desc}</p>
      <ul className="space-y-2 text-sm text-textSecondary">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  )
}
