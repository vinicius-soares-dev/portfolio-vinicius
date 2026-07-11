import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

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

const positiveItems = [
  "Quer um site que realmente gere oportunidades de negócio.",
  "Valoriza SEO, performance e experiência do usuário.",
  "Busca uma solução personalizada para sua empresa.",
  "Entende que tecnologia e estratégia caminham juntas.",
  "Quer investir em crescimento de longo prazo.",
];

const negativeItems = [
  "Busca apenas a opção mais barata.",
  "Precisa de algo pronto em poucas horas.",
  "Não pretende investir na presença digital.",
  "Procura apenas uma página simples, sem estratégia.",
  "Não vê valor em performance, SEO ou conversão.",
];

export default function TargetAudience() {
  return (
    <section
      id="target"
      aria-labelledby="target-title"
      className="relative overflow-hidden bg-background py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[150px]" />
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
            Perfil de projeto
          </span>

          <h2
            id="target-title"
            className="mt-6 text-4xl font-black text-textPrimary md:text-5xl"
          >
            Esse projeto faz sentido para você?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-textSecondary">
            Meu trabalho é direcionado para empresas e profissionais que
            enxergam o digital como um investimento e buscam crescimento
            consistente, não apenas presença online.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          {/* Card principal */}

          <motion.div
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
              rounded-[32px]
              border
              border-primary/20
              bg-surface/70
              p-8
              backdrop-blur-xl
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
                bg-primary/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-primary/20
              "
            />

            {/* Linha */}

            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-orange-400" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                  <CheckCircle2 size={34} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Ideal para você
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-textPrimary">
                    Vamos trabalhar muito bem juntos se...
                  </h3>
                </div>
              </div>

              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-textSecondary">
                Você procura uma solução feita para gerar resultado, construída
                com estratégia, tecnologia e foco no crescimento do seu negócio.
              </p>

              <div className="space-y-5">
                {positiveItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-transparent
                      p-4
                      transition-all
                      duration-300
                      group-hover:border-primary/10
                    "
                  >
                    <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                      <CheckCircle2 size={18} />
                    </div>

                    <span className="leading-relaxed text-textSecondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card secundário */}

          <motion.div
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
              rounded-[32px]
              border
              border-red-500/20
              bg-surface/70
              p-8
              backdrop-blur-xl
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
                bg-red-500/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-red-500/20
              "
            />

            {/* Linha */}

            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 to-red-400" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="rounded-2xl bg-red-500/10 p-4 text-red-500">
                  <XCircle size={34} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                    Talvez não seja a melhor escolha
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-textPrimary">
                    Este projeto pode não ser ideal se...
                  </h3>
                </div>
              </div>

              <p className="mb-10 leading-relaxed text-textSecondary">
                Meu foco é desenvolver soluções personalizadas para empresas que
                desejam crescer. Se sua prioridade é apenas ter qualquer site no
                ar rapidamente, talvez existam alternativas mais adequadas ao
                seu momento.
              </p>

              <div className="space-y-5">
                {negativeItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-transparent
                      p-4
                      transition-all
                      duration-300
                      group-hover:border-red-500/10
                    "
                  >
                    <div className="mt-0.5 rounded-full bg-red-500/10 p-2 text-red-500">
                      <XCircle size={18} />
                    </div>

                    <span className="leading-relaxed text-textSecondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}

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
            "
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_65%)]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Próximo passo
              </span>

              <h3 className="mt-6 text-3xl font-black text-textPrimary md:text-4xl">
                Se você chegou até aqui, provavelmente estamos procurando a
                mesma coisa.
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-textSecondary">
                Um projeto que una estratégia, tecnologia e performance para
                gerar crescimento de verdade. Vamos conversar sobre a melhor
                solução para o seu negócio.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
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
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-xl
                    hover:shadow-primary/20
                  "
                >
                  Solicitar orçamento
                </a>

                <a
                  href="#portfolio"
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
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
