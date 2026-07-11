import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  PenTool,
} from "lucide-react";

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

const services = [
  {
    icon: Code2,
    title: "1. Desenvolvimento",
    subtitle: "Construindo a base do seu negócio",
    description:
      "Crio plataformas modernas, rápidas e escaláveis para oferecer a melhor experiência aos seus clientes.",

    items: [
      "Sites Institucionais",
      "Landing Pages",
      "Sistemas Web",
      "Lojas Virtuais",
      "SaaS",
      "Integrações",
    ],
  },

  {
    icon: BarChart3,
    title: "2. Marketing Digital",
    subtitle: "Levando clientes até você",

    description:
      "Depois da estrutura pronta, aplico estratégias para aumentar visibilidade, atrair visitantes qualificados e gerar oportunidades.",

    items: [
      "Google Ads",
      "SEO",
      "Funis",
      "Análise de métricas",
      "CRO",
      "Posicionamento",
    ],
  },

  {
    icon: PenTool,
    title: "3. Conversão",

    subtitle: "Transformando visitas em vendas",

    description:
      "Design, copywriting e experiência do usuário trabalham juntos para aumentar a confiança e incentivar a tomada de decisão.",

    items: [
      "Copywriting",
      "UX",
      "UI Design",
      "Branding",
      "Arquitetura da informação",
      "Estratégia",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-background py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[-180px] top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />

        <div className="absolute right-[-150px] bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Solução completa
          </span>

          <h2
            id="services-title"
            className="mt-6 text-4xl font-black text-textPrimary md:text-5xl"
          >
            Não entrego apenas um site.
            <br />
            Construo uma estrutura para gerar clientes.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-textSecondary">
            Desenvolvimento, marketing e estratégia trabalhando juntos para
            transformar visitantes em oportunidades reais de negócio.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
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
              rounded-3xl
              border
              border-border
              bg-surface/70
              p-8
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
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-primary/5
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-primary/15
              "
              />

              {/* Linha superior */}

              <div
                className="
                absolute
                left-0
                top-0
                h-1
                w-full
                bg-gradient-to-r
                from-primary
                to-orange-400
              "
              />

              <div className="relative z-10">
                {/* Ícone */}

                <div
                  className="
                  mb-8
                  inline-flex
                  rounded-2xl
                  bg-primary/10
                  p-4
                  text-primary
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-3
                "
                >
                  <service.icon size={34} />
                </div>

                {/* Conteúdo */}

                <h3 className="text-2xl font-bold text-textPrimary">
                  {service.title}
                </h3>

                <p className="mt-2 font-medium text-primary">
                  {service.subtitle}
                </p>

                <p className="mt-6 leading-relaxed text-textSecondary">
                  {service.description}
                </p>

                {/* Lista */}

                <div className="mt-8 space-y-4">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-primary"
                      />

                      <span className="text-textSecondary">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <div className="mt-10">
                  <Link
                    to="/servicos"
                    className="
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
                    Conhecer solução
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Final */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
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
              text-center
              backdrop-blur-xl
            "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_65%)]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <h3 className="text-3xl font-black text-textPrimary md:text-4xl">
                  Tudo trabalha junto para gerar resultados.
                </h3>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-textSecondary">
                  Um bom projeto não depende apenas de um site bonito. Ele
                  precisa atrair pessoas, transmitir confiança e transformar
                  visitantes em clientes.
                </p>

                <Link
                  to="/servicos"
                  className="
                  mt-10
                  inline-flex
                  items-center
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
                  Conhecer todos os serviços
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
