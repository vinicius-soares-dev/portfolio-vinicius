import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, TrendingUp, XCircle } from "lucide-react";
import type { Variants } from "framer-motion";

const card: Variants = {
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

const problems = [
  "Não aparece no Google",
  "Carrega lentamente no celular",
  "Não gera contatos nem vendas",
  "Vira apenas um cartão de visitas online",
];

const solutions = [
  "Estrutura otimizada para SEO",
  "Performance de alto nível",
  "Copy focada em conversão",
  "Arquitetura preparada para crescer",
];

export default function ProblemSolution() {
  return (
    <section
      aria-labelledby="problem-solution-title"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Estratégia antes de código
          </span>

          <h2
            id="problem-solution-title"
            className="mt-6 text-4xl font-black text-textPrimary md:text-5xl"
          >
            Um site bonito não significa um site que vende.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-textSecondary">
            O verdadeiro diferencial está na estratégia, velocidade,
            posicionamento e experiência do usuário.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Problema */}

          <motion.div
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-surface/70 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-red-400" />

            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-red-500/10 p-4 text-red-500">
                <AlertTriangle size={30} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-red-400">
                  Problema
                </p>

                <h3 className="text-3xl font-bold text-textPrimary">
                  O que acontece hoje
                </h3>
              </div>
            </div>

            <p className="mb-8 text-textSecondary leading-relaxed">
              Muitos negócios investem em um site apenas para "ter presença
              online", mas acabam sem visitas, sem contatos e sem retorno.
            </p>

            <div className="space-y-5">
              {problems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-transparent p-3 transition group-hover:border-red-500/10"
                >
                  <XCircle className="mt-0.5 shrink-0 text-red-500" size={20} />

                  <span className="text-textSecondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solução */}

          <motion.div
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-surface/70 p-8 backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-orange-400" />

            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                <TrendingUp size={30} />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-primary">
                  Solução
                </p>

                <h3 className="text-3xl font-bold text-textPrimary">
                  Como eu resolvo
                </h3>
              </div>
            </div>

            <p className="mb-8 text-textSecondary leading-relaxed">
              Desenvolvo produtos digitais completos, unindo tecnologia, SEO,
              UX, performance e estratégia para gerar resultados reais.
            </p>

            <div className="space-y-5">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-transparent p-3 transition group-hover:border-primary/10"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-primary"
                    size={20}
                  />

                  <span className="text-textSecondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
