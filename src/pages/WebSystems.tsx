import { motion } from "framer-motion"
import {
  ArrowRight,
  Code2,
  Database,
  ShieldCheck,
  LayoutDashboard,
  Workflow,
  Rocket,
} from "lucide-react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"
import WhatsAppButton from "../components/WhatsAppButton"

export default function WebSystems() {
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
          Sistemas web sob medida para
          <span className="text-primary"> automatizar</span>,
          <span className="text-primary"> escalar</span> e
          <span className="text-primary"> organizar</span> seu negócio
        </motion.h1>

        <p className="text-textSecondary max-w-2xl text-lg mb-10">
          Desenvolvemos plataformas personalizadas que resolvem
          gargalos operacionais, reduzem retrabalho
          e dão total controle da operação.
        </p>

        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:scale-[1.03] transition"
        >
          Quero um sistema sob medida
          <ArrowRight />
        </a>
      </section>

      {/* IMPACTO */}
      <section className="relative z-10 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-4 gap-8">

          {[
            { icon: Workflow, value: "-65%", label: "Menos processos manuais" },
            { icon: LayoutDashboard, value: "100%", label: "Controle centralizado" },
            { icon: Rocket, value: "+3x", label: "Produtividade" },
            { icon: ShieldCheck, value: "Alta", label: "Segurança e confiabilidade" },
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

      {/* O QUE DESENVOLVO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Tipos de sistemas que desenvolvo
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <SystemCard
            icon={LayoutDashboard}
            title="Painéis Administrativos"
            desc="Dashboards completos para controle total da operação."
            items={[
              "Gestão de usuários",
              "Relatórios em tempo real",
              "Indicadores de desempenho",
            ]}
          />

          <SystemCard
            icon={Database}
            title="Sistemas de Gestão"
            desc="Automatização de processos internos e operacionais."
            items={[
              "Financeiro",
              "Agendamentos",
              "Controle de dados",
            ]}
          />

          <SystemCard
            icon={Code2}
            title="Plataformas Personalizadas"
            desc="Soluções criadas do zero para regras específicas."
            items={[
              "Fluxos sob medida",
              "Escalável",
              "Integrações futuras",
            ]}
          />

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="relative z-10 bg-surface">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Não é só código.
            <span className="text-primary"> É estratégia.</span>
          </h3>

          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Antes de desenvolver, entendo o fluxo do seu negócio,
            identifico gargalos e desenho a solução ideal.
            O sistema cresce junto com sua empresa.
          </p>
        </div>
      </section>

      {/* STACK / DIFERENCIAIS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Diferenciais técnicos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <SystemCard
            icon={ShieldCheck}
            title="Segurança"
            desc="Boas práticas desde o backend até o frontend."
            items={[
              "Controle de acesso",
              "Proteção de dados",
              "Boas práticas de autenticação",
            ]}
          />

          <SystemCard
            icon={Rocket}
            title="Escalabilidade"
            desc="Sistema pronto para crescer sem dor."
            items={[
              "Arquitetura organizada",
              "Código limpo",
              "Preparado para novas features",
            ]}
          />

          <SystemCard
            icon={Workflow}
            title="Automação"
            desc="Menos trabalho manual, mais eficiência."
            items={[
              "Fluxos inteligentes",
              "Redução de erros",
              "Mais produtividade",
            ]}
          />

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Seu processo pode ser mais simples
          </h3>
          <p className="opacity-90 mb-8">
            Me explica sua dor e eu te mostro
            como um sistema pode resolver.
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
function SystemCard({
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
