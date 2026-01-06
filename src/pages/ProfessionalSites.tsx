import { motion } from "framer-motion"
import {
  ArrowRight,
  Globe,
  Zap,
  Search,
  Smartphone,
  Layout,
} from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import WhatsAppButton from "../components/WhatsAppButton"

export default function ProfessionalSites() {
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
          Sites profissionais que
          <span className="text-primary"> vendem</span>,
          posicionam e
          <span className="text-primary"> geram autoridade</span>
        </motion.h1>

        <p className="text-textSecondary max-w-2xl text-lg mb-10">
          Nada de sites genéricos.
          Desenvolvemos experiências digitais rápidas, estratégicas
          e pensadas para conversão.
        </p>

        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
        >
          Solicitar orçamento do meu site
          <ArrowRight />
        </a>
      </section>

      {/* RESULTADOS */}
      <section className="relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-8">

          {[
            { icon: Zap, value: "+92%", label: "Mais velocidade" },
            { icon: Search, value: "+3x", label: "Visibilidade no Google" },
            { icon: Smartphone, value: "100%", label: "Responsivo" },
            { icon: Globe, value: "+48%", label: "Taxa de conversão" },
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
          O que está incluso no seu site
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <ServiceCard
            icon={Layout}
            title="Design Estratégico"
            desc="Layout exclusivo, pensado na experiência do usuário
            e em guiar o visitante até a conversão."
            items={[
              "Design moderno e personalizado",
              "UX/UI focado em conversão",
              "Identidade visual alinhada à marca",
            ]}
          />

          <ServiceCard
            icon={Zap}
            title="Alta Performance"
            desc="Sites rápidos, leves e otimizados
            para entregar a melhor experiência possível."
            items={[
              "Core Web Vitals",
              "Carregamento ultra rápido",
              "Código limpo e otimizado",
            ]}
          />

          <ServiceCard
            icon={Search}
            title="SEO Técnico"
            desc="Seu site preparado para ser encontrado
            no Google desde o primeiro dia."
            items={[
              "SEO on-page",
              "Estrutura otimizada",
              "Indexação correta",
            ]}
          />

        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="relative z-10 bg-surface">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Seu site não é um custo.
            <span className="text-primary"> É um ativo.</span>
          </h3>

          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Um site bem feito trabalha por você 24h por dia,
            gera autoridade, filtra clientes e potencializa
            todos os seus outros canais de marketing.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Vamos tirar seu projeto do papel?
          </h3>
          <p className="opacity-90 mb-8">
            Me conta sobre seu negócio e eu te digo
            exatamente o que faz sentido construir.
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
