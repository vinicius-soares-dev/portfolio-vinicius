import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Star,
  BriefcaseBusiness,
  CalendarDays,
  BadgeCheck,
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

const stats = [
  {
    icon: CalendarDays,
    value: "7+",
    label: "Anos de experiência",
  },

  {
    icon: BriefcaseBusiness,
    value: "40+",
    label: "Projetos desenvolvidos",
  },

  {
    icon: BadgeCheck,
    value: "100%",
    label: "Projetos personalizados",
  },

  {
    icon: Star,
    value: "5★",
    label: "Foco na satisfação",
  },
];

const testimonials = [
  {
    platform: "WhatsApp",
    image: "/images/testemunhas/whatsapp.jpg",
  },

  {
    platform: "99Freelas",
    image: "/images/testemunhas/99freelas.jpeg",
  },

  {
    platform: "Google",
    image: "/images/testemunhas/google.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-background py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[160px]" />
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
            Prova social
          </span>

          <h2
            id="testimonials-title"
            className="mt-6 text-4xl font-black text-textPrimary md:text-5xl"
          >
            Confiança construída
            <br />
            através de resultados reais.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-textSecondary">
            Mais do que desenvolver sites e sistemas, meu objetivo é entregar
            soluções que realmente façam diferença para cada cliente.
          </p>
        </motion.div>

        {/* Estatísticas */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
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
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-orange-400" />

              <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary transition-transform duration-300 group-hover:scale-110">
                <stat.icon size={30} />
              </div>

              <h3 className="text-4xl font-black text-textPrimary">
                {stat.value}
              </h3>

              <p className="mt-3 leading-relaxed text-textSecondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Avaliações */}

        <div className="mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Feedbacks reais
                </span>

                <h3 className="mt-3 text-3xl font-black text-textPrimary">
                  O que clientes falam sobre meu trabalho
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={22}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards de avaliações */}

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.platform}
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
                  p-6
                  backdrop-blur-xl
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-primary/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-primary/20
                  "
                />

                <div className="relative z-10">
                  {/* Plataforma */}

                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className="
                        rounded-full
                        border
                        border-primary/20
                        bg-primary/5
                        px-4
                        py-1.5
                        text-sm
                        font-semibold
                        text-primary
                      "
                    >
                      {testimonial.platform}
                    </span>

                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Imagem */}

                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border
                      bg-background
                    "
                  >
                    <img
                      src={testimonial.image}
                      alt={`Avaliação ${testimonial.platform}`}
                      className="
                        aspect-[4/5]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-textSecondary">
                    Avaliação enviada por cliente através da plataforma
                    {` ${testimonial.platform}`}.
                  </p>
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
              text-center
              backdrop-blur-xl
              md:p-14
            "
            >
              <div
                className="
                absolute
                -top-32
                left-1/2
                h-64
                w-64
                -translate-x-1/2
                rounded-full
                bg-primary/20
                blur-3xl
              "
              />

              <div className="relative z-10 mx-auto max-w-3xl">
                <span
                  className="
                  inline-flex
                  rounded-full
                  bg-primary/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-primary
                "
                >
                  Vamos trabalhar juntos
                </span>

                <h3
                  className="
                  mt-6
                  text-3xl
                  font-black
                  text-textPrimary
                  md:text-4xl
                "
                >
                  Seu projeto pode ser o próximo resultado entregue.
                </h3>

                <p
                  className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-textSecondary
                "
                >
                  Conte sua ideia, vamos analisar a melhor estratégia e
                  construir uma solução digital alinhada aos seus objetivos.
                </p>

                <div
                  className="
                  mt-10
                  flex
                  flex-col
                  justify-center
                  gap-4
                  sm:flex-row
                "
                >
                  <a
                    href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    hover:scale-[1.03]
                    hover:shadow-xl
                    hover:shadow-primary/20
                  "
                  >
                    Solicitar orçamento
                  </a>

                  <a
                    href="/portfolio"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    px-8
                    py-4
                    font-semibold
                    text-textPrimary
                    transition-all
                    hover:border-primary/40
                    hover:bg-primary/5
                  "
                  >
                    Ver todos os projetos
                  </a>
                </div>

                <div
                  className="
                  mx-auto
                  mt-10
                  max-w-2xl
                  rounded-2xl
                  border
                  border-border/60
                  bg-background/50
                  p-5
                "
                >
                  <p
                    className="
                    text-sm
                    leading-relaxed
                    text-textSecondary
                  "
                  >
                    <strong className="text-textPrimary">Observação:</strong>{" "}
                    alguns projetos apresentados pertencem aos clientes e
                    dependem da manutenção do domínio e hospedagem. Por isso,
                    eventualmente alguns links podem ficar indisponíveis mesmo
                    após a entrega do projeto.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
