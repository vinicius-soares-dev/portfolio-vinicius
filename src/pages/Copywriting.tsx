import { motion } from "framer-motion"
import {
  ArrowRight,
  PenTool,
  Target,
  MessageSquareText,
  TrendingUp,
  CheckCircle,
  Rocket,
} from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import WhatsAppButton from "../components/WhatsAppButton"

export default function Copywriting() {
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
          Palavras que
          <span className="text-primary"> conectam</span>,
          <span className="text-primary"> convencem</span> e
          <span className="text-primary"> vendem</span>
        </motion.h1>

        <p className="text-textSecondary max-w-2xl text-lg mb-10">
          Copywriting estratégico para transformar visitantes
          em leads e clientes. Nada de texto genérico.
          Cada palavra tem um propósito.
        </p>

        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
        >
          Quero uma copy que converte
          <ArrowRight />
        </a>
      </section>

      {/* RESULTADOS (FICTÍCIOS) */}
      <section className="relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-8">

          {[
            { icon: TrendingUp, value: "+187%", label: "Taxa de conversão" },
            { icon: Target, value: "-42%", label: "Custo por lead" },
            { icon: MessageSquareText, value: "+3x", label: "Engajamento" },
            { icon: Rocket, value: "Mais", label: "Vendas qualificadas" },
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

      {/* O QUE FAÇO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Serviços de Copywriting
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <CopyCard
            icon={PenTool}
            title="Copy para Sites & Landing Pages"
            desc="Textos que guiam o usuário até a ação."
            items={[
              "Headline estratégica",
              "Storytelling",
              "CTAs persuasivos",
            ]}
          />

          <CopyCard
            icon={MessageSquareText}
            title="Copy para Anúncios"
            desc="Anúncios que chamam atenção e geram cliques."
            items={[
              "Google Ads",
              "Meta Ads",
              "Mensagens diretas",
            ]}
          />

          <CopyCard
            icon={Target}
            title="Funis & Jornada do Cliente"
            desc="Comunicação certa no momento certo."
            items={[
              "Topo, meio e fundo de funil",
              "Sequência lógica",
              "Conversão contínua",
            ]}
          />

        </div>
      </section>

      {/* COMO EU ESCREVO */}
      <section className="relative z-10 bg-surface">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Copy não é inspiração.
            <span className="text-primary"> É método.</span>
          </h3>

          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Antes de escrever qualquer palavra,
            eu estudo o público, a dor,
            a objeção e o momento de compra.
            O texto nasce com estratégia.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Por que minha copy funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <CopyCard
            icon={CheckCircle}
            title="Foco em conversão"
            desc="Não escrevo pra agradar, escrevo pra converter."
            items={[
              "Clareza",
              "Direção",
              "Objetivo",
            ]}
          />

          <CopyCard
            icon={Target}
            title="Base em dados"
            desc="Copy alinhada com tráfego, UX e métricas."
            items={[
              "Teste",
              "Otimização",
              "Escala",
            ]}
          />

          <CopyCard
            icon={Rocket}
            title="Copy integrada"
            desc="Texto alinhado com design e tecnologia."
            items={[
              "UX",
              "Design",
              "Performance",
            ]}
          />

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Seu produto pode vender mais
          </h3>
          <p className="opacity-90 mb-8">
            Se a copy não guia o cliente,
            ele não compra.
          </p>
          <a
            href="https://wa.me/5532999823915"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-primary px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
          >
            Quero melhorar minha copy
            <ArrowRight />
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
}

/* CARD */
function CopyCard({
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
