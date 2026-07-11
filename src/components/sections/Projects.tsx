import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ExternalLink, Layers, Rocket, Users, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    tag: "Plataforma SaaS",
    title: "Zinq",
    subtitle: "Agenda Online & Vitrine Digital",

    image: "/images/projetos/zinqdash.png",

    description:
      "Plataforma criada do zero para profissionais que desejam automatizar agendamentos, pagamentos e presença digital em um único lugar.",

    metrics: [
      "SaaS Completo",
      "Painel Administrativo",
      "API Própria",
      "Escalável",
    ],

    items: [
      "Profissionais liberais",
      "Agenda, pagamentos e página pública",
      "Arquitetura preparada para crescer",
    ],

    link: "https://zinq.me/",
  },

  {
    tag: "Marketplace",

    title: "Publibox",

    subtitle: "Marketing Local",

    image: "https://placehold.co/1200x700/0F172A/FFFFFF?text=Publibox",

    description:
      "Ecossistema digital que conecta anunciantes e espaços físicos para campanhas de marketing local.",

    metrics: [
      "Marketplace",
      "Painel Administrativo",
      "Busca Inteligente",
      "Escalável",
    ],

    items: [
      "Empresas e anunciantes",
      "Marketplace inteligente",
      "Sistema operacional completo",
    ],

    link: "https://www.publibox.com.br/",
  },

  {
    tag: "Sistema Web",

    title: "Zolve",

    subtitle: "Gestão de Orçamentos",

    image: "/images/projetos/zolve.png",

    description:
      "Sistema desenvolvido para emissão rápida de orçamentos profissionais, com geração automática de PDF e cadastro de clientes.",

    metrics: ["Sistema Web", "PDF Automático", "Responsivo", "Cloud"],

    items: [
      "Autônomos e empresas",
      "Clientes e propostas",
      "Agilidade operacional",
    ],

    link: "https://zolve.vgtechsolutions.com.br",
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-background py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[160px]" />

        <div className="absolute -left-52 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Projetos desenvolvidos
          </span>

          <h2
            id="projects-title"
            className="mt-6 text-4xl font-black text-textPrimary md:text-5xl"
          >
            Projetos reais.
            <br />
            Soluções construídas para gerar resultados.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-textSecondary">
            Cada projeto foi desenvolvido sob medida para resolver um problema
            específico, combinando tecnologia, estratégia e foco na experiência
            do usuário.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-border
              bg-surface/70
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-primary/30
            "
            >
              {/* Glow */}

              <div
                className="
                absolute
                -right-20
                -top-20
                h-44
                w-44
                rounded-full
                bg-primary/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-primary/20
              "
              />

              {/* Linha superior */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-orange-400" />

              {/* Screenshot */}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  aspect-video
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <span
                  className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  bg-primary
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-white
                "
                >
                  {project.tag}
                </span>
              </div>

              {/* Conteúdo */}

              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-textPrimary">
                  {project.title}
                </h3>

                <p className="mt-1 text-primary font-medium">
                  {project.subtitle}
                </p>

                <p className="mt-6 leading-relaxed text-textSecondary">
                  {project.description}
                </p>

                {/* Métricas */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="
                      rounded-full
                      border
                      border-primary/15
                      bg-primary/5
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-primary
                    "
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Lista */}

                <div className="mt-8 space-y-4">
                  {project.items.map((item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      {index === 0 && (
                        <Users
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                      )}

                      {index === 1 && (
                        <Layers
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                      )}

                      {index === 2 && (
                        <Rocket
                          size={18}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                      )}

                      <span className="text-textSecondary">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-primary
                  transition-all
                  duration-300
                  group-hover:gap-4
                "
                >
                  Acessar projeto
                  <ExternalLink
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        {/* CTA Final */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-primary/20
              bg-gradient-to-br
              from-primary/10
              via-surface
              to-orange-500/10
              p-10
              backdrop-blur-xl
            "
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_65%)]" />

            <div className="relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Quer ver mais?
                </span>

                <h3 className="mt-6 text-3xl font-black text-textPrimary md:text-4xl">
                  Estes são apenas alguns dos projetos desenvolvidos.
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-textSecondary">
                  Ao longo dos últimos anos desenvolvi sites institucionais,
                  landing pages, sistemas web, plataformas SaaS, marketplaces e
                  soluções personalizadas para empresas de diferentes segmentos.
                </p>
              </div>

              {/* Botões */}

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/portfolio"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-primary
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-xl
                    hover:shadow-primary/20
                  "
                >
                  Ver portfólio completo
                  <ArrowRight size={20} />
                </a>

                <a
                  href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    px-8
                    py-4
                    font-semibold
                    text-textPrimary
                    transition-all
                    duration-300
                    hover:border-primary/30
                    hover:bg-primary/5
                  "
                >
                  Conversar sobre meu projeto
                </a>
              </div>

              {/* Observação */}

              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-background/50 p-5 text-center">
                <p className="text-sm leading-relaxed text-textSecondary">
                  <strong className="text-textPrimary">Observação:</strong>{" "}
                  alguns projetos pertencem aos próprios clientes. Caso o
                  domínio ou a hospedagem não sejam renovados, determinados
                  links podem ficar temporariamente indisponíveis, mesmo que o
                  desenvolvimento tenha sido realizado pela VG Tech Solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
