import { motion } from "framer-motion"
import {
  ArrowRight,
  Palette,
  Layout,
  MousePointerClick,
  Eye,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import WhatsAppButton from "../components/WhatsAppButton"

export default function DesignEstrategico() {
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
            number: { value: 30 },
            color: { value: "#2563eb" },
            opacity: { value: 0.12 },
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
          Design que
          <span className="text-primary"> posiciona</span>,
          <span className="text-primary"> encanta</span> e
          <span className="text-primary"> converte</span>
        </motion.h1>

        <p className="text-textSecondary max-w-2xl text-lg mb-10">
          UI e UX pensados estrategicamente para guiar o usuário,
          gerar confiança e transformar atenção em ação.
        </p>

        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
        >
          Quero um design profissional
          <ArrowRight />
        </a>
      </section>

      {/* MÉTRICAS (FICTÍCIAS) */}
      <section className="relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-8">

          {[
            { icon: Eye, value: "+92%", label: "Tempo na página" },
            { icon: MousePointerClick, value: "+2.4x", label: "Cliques em CTA" },
            { icon: TrendingUp, value: "+148%", label: "Conversão" },
            { icon: Sparkles, value: "Marca", label: "Mais autoridade" },
          ].map((item, i) => (
            <motion.div
              key={i}
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

      {/* SERVIÇOS DE DESIGN */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Serviços de Design Estratégico
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <DesignCard
            icon={Layout}
            title="UI Design"
            desc="Interface moderna, clara e profissional."
            items={[
              "Layout limpo",
              "Hierarquia visual",
              "Identidade visual",
            ]}
          />

          <DesignCard
            icon={MousePointerClick}
            title="UX Design"
            desc="Experiência pensada para conversão."
            items={[
              "Fluxo do usuário",
              "Mapeamento de ações",
              "Redução de fricção",
            ]}
          />

          <DesignCard
            icon={Palette}
            title="Design para Conversão"
            desc="Cada detalhe com um propósito."
            items={[
              "CTAs estratégicos",
              "Psicologia das cores",
              "Escaneabilidade",
            ]}
          />

        </div>
      </section>

      {/* COMO EU PENSO DESIGN */}
      <section className="relative z-10 bg-surface">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Design não é arte.
            <span className="text-primary"> É comunicação visual.</span>
          </h3>

          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Antes de qualquer pixel,
            eu entendo o público, o objetivo
            e o caminho que o usuário deve seguir.
            O visual existe para guiar decisões.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Por que meu design gera resultado
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <DesignCard
            icon={CheckCircle}
            title="Pensado para conversão"
            desc="Não faço layout bonito que não vende."
            items={[
              "Objetivo claro",
              "Ação guiada",
              "Foco em resultado",
            ]}
          />

          <DesignCard
            icon={Eye}
            title="Experiência fluida"
            desc="Usuário entende e age sem esforço."
            items={[
              "Menos distração",
              "Mais clareza",
              "Fluxo natural",
            ]}
          />

          <DesignCard
            icon={Sparkles}
            title="Integração total"
            desc="Design alinhado com copy e código."
            items={[
              "Copy estratégica",
              "Performance",
              "SEO friendly",
            ]}
          />

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Seu visual comunica o valor do seu negócio?
          </h3>
          <p className="opacity-90 mb-8">
            Design ruim afasta.
            Design estratégico converte.
          </p>
          <a
            href="https://wa.me/5532999823915"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-primary px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
          >
            Quero melhorar meu design
            <ArrowRight />
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}

/* CARD */
function DesignCard({
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
