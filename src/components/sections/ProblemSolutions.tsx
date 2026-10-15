import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  XCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const problems = [
  {
    title: "Invisível no Google",
    desc: "Sua marca não aparece nas buscas e você perde clientes todos os dias para os concorrentes.",
  },
  {
    title: "Lento no Celular",
    desc: "Carregamento demorado que faz mais de 50% dos visitantes abandonarem a página imediatamente.",
  },
  {
    title: "Zero Conversão",
    desc: "Design genérico sem gatilhos visuais que passa insegurança e não gera mensagens no WhatsApp.",
  },
  {
    title: "Dinheiro Jogado Fora",
    desc: "O site vira apenas um 'cartão de visitas' parado no ar, sem gerar nenhum retorno financeiro.",
  },
];

const solutions = [
  {
    title: "Posicionamento Top 1",
    desc: "Arquitetura otimizada para SEO técnico para atrair tráfego qualificado de forma orgânica.",
  },
  {
    title: "Carregamento Instantâneo",
    desc: "Código limpo e otimizado com nota 100 no Lighthouse para reter cada visitante.",
  },
  {
    title: "Design Persuasivo (UX/UI)",
    desc: "Layouts intuitivos e botões estratégicos desenhados especificamente para gerar vendas.",
  },
  {
    title: "Arquitetura Escalável",
    desc: "Código moderno preparado para crescer, integrar automações e evoluir com a sua empresa.",
  },
];

export default function ProblemSolution() {
  return (
    <section
      aria-labelledby="problem-solution-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/30"
    >
      {/* Luzes Suaves de Fundo (Sem poluição) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Cabeçalho Limpo sem Gradiente no Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 sm:mb-20 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border/80 mb-6 backdrop-blur-md">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-textSecondary">
              Estratégia antes do código
            </span>
          </div>

          <h2
            id="problem-solution-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]"
          >
            Um site bonito que não vende é apenas um{" "}
            <span className="text-red-400">custo parado.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-textSecondary font-light">
            O mercado está cheio de páginas lentas e amadoras. O verdadeiro
            crescimento vem da combinação de{" "}
            <strong className="text-textPrimary font-medium">
              velocidade extrema, autoridade e foco em conversão
            </strong>
            .
          </p>
        </motion.div>

        {/* Grid de Comparação Dinâmico */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* CARD PROBLEMA */}
          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-red-500/20 bg-surface/30 p-6 sm:p-8 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/60" />

            <div>
              {/* Header do Card */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="rounded-2xl bg-red-500/10 p-3 text-red-400 border border-red-500/20">
                    <AlertCircle size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400/90 block">
                      Cenário Atual
                    </span>
                    <h3 className="text-2xl font-bold text-textPrimary">
                      O Site Amador
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  Perda de Vendas
                </span>
              </div>

              <p className="mb-8 text-sm text-textSecondary font-light leading-relaxed">
                Investir em um site sem estratégia resulta em um endereço online
                invisível que não gera autoridade nem contatos:
              </p>

              {/* Lista de Problemas */}
              <div className="space-y-3.5">
                {problems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-background/50 border border-border/30 group-hover:border-red-500/20 transition-colors"
                  >
                    <XCircle
                      className="mt-0.5 shrink-0 text-red-400"
                      size={18}
                    />
                    <div>
                      <strong className="block text-sm font-bold text-textPrimary mb-0.5">
                        {item.title}
                      </strong>
                      <span className="text-xs text-textSecondary font-light leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-red-400 font-medium font-mono">
              <span>Impacto Financeiro</span>
              <span>-70% em Conversões</span>
            </div>
          </motion.div>

          {/* CARD SOLUÇÃO */}
          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-surface/70 p-6 sm:p-8 backdrop-blur-xl hover:border-primary/60 transition-all duration-300 shadow-xl shadow-primary/5"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

            <div>
              {/* Header do Card */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary border border-primary/20">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                      A Solução
                    </span>
                    <h3 className="text-2xl font-bold text-textPrimary">
                      Plataforma de Alta Performance
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Foco em Conversão
                </span>
              </div>

              <p className="mb-8 text-sm text-textSecondary font-light leading-relaxed">
                Desenvolvimento focado em resultados, unindo engenharia de
                software avançada a uma experiência impecável para o seu
                cliente:
              </p>

              {/* Lista de Soluções */}
              <div className="space-y-3.5">
                {solutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-background/80 border border-primary/20 group-hover:border-primary/40 transition-colors"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-primary"
                      size={18}
                    />
                    <div>
                      <strong className="block text-sm font-bold text-textPrimary mb-0.5">
                        {item.title}
                      </strong>
                      <span className="text-xs text-textSecondary font-light leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-emerald-400 font-medium font-mono">
              <span className="flex items-center gap-1">
                <Zap size={14} /> Resultado Estimado
              </span>
              <span>+300% em Oportunidades</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
