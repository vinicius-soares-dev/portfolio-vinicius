import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  GraduationCap,
  Cloud,
  Code2,
  BarChart3,
  Award,
  Briefcase,
  Rocket,
  MapPin,
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

const specializations = [
  {
    icon: GraduationCap,
    title: "Ciência da Computação",
    description:
      "Bacharelado com foco em arquitetura de software, algoritmos e engenharia de sistemas.",
  },
  {
    icon: Code2,
    title: "Engenharia de Software",
    description:
      "Pós-graduação voltada para arquitetura, escalabilidade, qualidade e boas práticas.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Infraestrutura em Google Cloud, AWS, deploy, monitoramento e ambientes escaláveis.",
  },
  {
    icon: BarChart3,
    title: "Marketing & Conversão",
    description:
      "SEO, Google Ads, CRO, copywriting e otimização da jornada do usuário.",
  },
];

const highlights = [
  {
    icon: Award,
    title: "7+ anos",
    subtitle: "Experiência",
  },
  {
    icon: Briefcase,
    title: "VG Tech",
    subtitle: "Software House",
  },
  {
    icon: Rocket,
    title: "120+ projetos",
    subtitle: "Entregues",
  },
  {
    icon: MapPin,
    title: "Brasil",
    subtitle: "Atendimento remoto",
  },
];

export default function AboutMe() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-background py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Sobre mim
          </span>

          <h2
            id="about-title"
            className="mt-6 text-4xl font-black text-textPrimary md:text-5xl"
          >
            Quem está por trás dos projetos
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-textSecondary">
            Mais do que desenvolver sites e sistemas, meu objetivo é construir
            soluções digitais capazes de gerar crescimento real para empresas.
          </p>
        </motion.div>

        {/* Conteúdo */}

        <div className="grid items-center gap-16 lg:grid-cols-[420px_1fr]">
          {/* Foto */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-primary/20 blur-[90px]" />

              <img
                src="https://xinjbrptsfbzvdtczehu.supabase.co/storage/v1/object/public/project-images/avatars/user-23/avatar.webp"
                alt="Vinicius Soares"
                className="
                  relative z-10
                  h-72
                  w-72
                  rounded-full
                  border-4
                  border-border
                  object-cover
                  shadow-2xl
                  md:h-80
                  md:w-80
                "
              />

              {/* Badge */}

              <div className="absolute -bottom-6 left-1/2 z-20 w-[260px] -translate-x-1/2 rounded-2xl border border-border bg-surface/90 p-5 shadow-xl backdrop-blur-xl">
                <h3 className="text-center text-lg font-bold text-textPrimary">
                  Vinicius Soares
                </h3>

                <p className="mt-1 text-center text-sm text-textSecondary">
                  Desenvolvedor Full Stack
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texto */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-textPrimary">
              Tecnologia com foco em resultados.
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-textSecondary">
              <p>
                Sou{" "}
                <strong className="text-textPrimary">Vinicius Soares</strong>,
                desenvolvedor Full Stack e fundador da{" "}
                <strong className="text-textPrimary">VG Tech Solutions</strong>.
              </p>

              <p>
                Minha especialidade é desenvolver soluções digitais que unem
                tecnologia, estratégia e marketing para transformar visitantes
                em clientes e negócios em marcas mais competitivas.
              </p>

              <p>
                Cada projeto é construído pensando em performance, SEO,
                experiência do usuário e escalabilidade, garantindo não apenas
                um site bonito, mas uma ferramenta capaz de gerar resultados.
              </p>
            </div>

            {/* Highlights */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-border
                    bg-surface/70
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <div className="rounded-xl bg-primary/10 p-3 text-primary">
                    <item.icon size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold text-textPrimary">{item.title}</h4>

                    <p className="text-sm text-textSecondary">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* ================= ESPECIALIZAÇÕES ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Especializações
            </span>

            <h3 className="mt-6 text-3xl font-black text-textPrimary md:text-4xl">
              Conhecimento que vai além do desenvolvimento
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-textSecondary">
              Acredito que um bom produto digital nasce da combinação entre
              tecnologia, estratégia e experiência do usuário.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {specializations.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
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
                  p-7
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
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-primary/5
                    blur-3xl
                    transition-all
                    duration-300
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
                    opacity-70
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mb-6
                      inline-flex
                      rounded-2xl
                      bg-primary/10
                      p-4
                      text-primary
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <item.icon size={30} />
                  </div>

                  <h4 className="text-xl font-bold text-textPrimary">
                    {item.title}
                  </h4>

                  <p className="mt-4 leading-relaxed text-textSecondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-28"
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h3 className="text-3xl font-black text-textPrimary md:text-4xl">
                Cada projeto é desenvolvido para gerar resultado.
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-textSecondary">
                Não importa se é um site institucional, landing page, e-commerce
                ou sistema web. O objetivo é sempre o mesmo: criar uma solução
                rápida, escalável e preparada para transformar visitantes em
                oportunidades reais.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
