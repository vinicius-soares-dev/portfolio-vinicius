import { ExternalLink, Layers, Rocket, Users } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Projects() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      aria-labelledby="projects-title"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold text-textPrimary mb-6"
          >
            Projetos reais, problemas reais
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed">
            Sistemas e plataformas desenvolvidos do zero,
            com foco em performance, escalabilidade e resultado real.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-3"
        >
          {[
            {
              tag: "Plataforma SaaS",
              title: "Zinq — Agenda Online & Vitrine Digital",
              desc: "Solução criada para transformar horários vagos em clientes reais, automatizando agenda, pagamentos e presença digital.",
              link: "https://zinq.me/",
              items: [
                "Profissionais liberais e prestadores",
                "Agenda, página pública e pagamentos",
                "Escalável para milhares de usuários",
              ],
            },
            {
              tag: "Plataforma de Marketing",
              title: "PubliBox — Marketing Local & Mídia Física",
              desc: "Ecossistema digital que conecta marcas, anunciantes e espaços publicitários físicos de forma simples e segura.",
              link: "https://www.publibox.com.br/",
              items: [
                "Marcas, anunciantes e prestadores",
                "Marketplace com filtros inteligentes",
                "Plataforma operacional e escalável",
              ],
            },
            {
              tag: "Sistema de Gestão",
              title: "Zolve — Orçamentos Profissionais",
              desc: "Sistema criado para eliminar planilhas e gerar orçamentos profissionais em segundos, direto do celular.",
              link: "https://budget.vgtech.solutions/",
              items: [
                "Autônomos e pequenas empresas",
                "PDFs automáticos e clientes salvos",
                "Foco em agilidade e conversão",
              ],
            },
          ].map((project, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative bg-surface border border-border rounded-3xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.35)]"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

              <span className="relative z-10 text-sm text-primary font-medium">
                {project.tag}
              </span>

              <h3 className="relative z-10 text-2xl font-bold text-textPrimary mt-5 mb-5">
                {project.title}
              </h3>

              <p className="relative z-10 text-textSecondary mb-8 leading-relaxed">
                {project.desc}
              </p>

              <ul className="relative z-10 space-y-3 text-sm text-textSecondary mb-10">
                {project.items.map((itemText, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-2"
                  >
                    {idx === 0 && <Users size={16} className="text-primary" />}
                    {idx === 1 && <Layers size={16} className="text-primary" />}
                    {idx === 2 && <Rocket size={16} className="text-primary" />}
                    {itemText}
                  </motion.li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                className="relative z-10 inline-flex items-center gap-2 text-primary font-medium transition-all group-hover:gap-4"
              >
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  Ver projeto
                </span>
                <ExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
