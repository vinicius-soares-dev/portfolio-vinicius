import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Target, BarChart3 } from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import WhatsAppButton from "../components/WhatsAppButton"

export default function TrafficPaid() {
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
            number: { value: 40 },
            color: { value: "#2563eb" },
            opacity: { value: 0.15 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
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
          Tráfego Pago que gera
          <span className="text-primary"> leads reais</span> e
          <span className="text-primary"> vendas consistentes</span>
        </motion.h1>

        <p className="text-textSecondary max-w-2xl text-lg mb-10">
          Gestão estratégica de anúncios focada em crescimento,
          previsibilidade e retorno sobre investimento.
        </p>

        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
        >
          Solicitar diagnóstico gratuito
          <ArrowRight />
        </a>
      </section>

      {/* RESULTADOS */}
      <section className="relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-8">

          {[
            { icon: TrendingUp, value: "+312%", label: "ROI médio" },
            { icon: Users, value: "+4.800", label: "Leads gerados" },
            { icon: Target, value: "R$ 0,89", label: "CPL médio" },
            { icon: BarChart3, value: "+67%", label: "Taxa de conversão" },
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
          O que entregamos na prática
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Tráfego Pago */}
          <ServiceCard
            title="Gestão de Tráfego Pago"
            desc="Criação, otimização e escala de campanhas no Google Ads e Meta Ads,
            com foco total em conversão e lucro."
            items={[
              "Google Ads (Pesquisa, Display e YouTube)",
              "Meta Ads (Instagram e Facebook)",
              "Funil e remarketing",
              "Otimização contínua",
            ]}
          />

          {/* Social Media */}
          <ServiceCard
            title="Social Media Estratégico"
            desc="Planejamento e execução de conteúdo estratégico para redes sociais,
            alinhado com campanhas pagas."
            items={[
              "Calendário estratégico",
              "Conteúdo voltado para conversão",
              "Posicionamento de marca",
              "Parceria com designers profissionais",
            ]}
          />

          {/* Gestão */}
          <ServiceCard
            title="Gestão Completa de Redes"
            desc="Cuidamos de tudo: conteúdo, anúncios, métricas e crescimento,
            enquanto você foca no seu negócio."
            items={[
              "Gestão mensal",
              "Relatórios claros",
              "Ajustes estratégicos",
              "Crescimento sustentável",
            ]}
          />

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para escalar seus resultados?
          </h3>
          <p className="opacity-90 mb-8">
            Vamos montar uma estratégia sob medida para o seu negócio.
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

/* COMPONENTE AUXILIAR */
function ServiceCard({
  title,
  desc,
  items,
}: {
  title: string
  desc: string
  items: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-surface border border-border rounded-2xl p-8 hover:-translate-y-1 transition"
    >
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
