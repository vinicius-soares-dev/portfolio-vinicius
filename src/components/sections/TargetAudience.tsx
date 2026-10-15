import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check, X, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const positiveItems = [
  "Quer uma plataforma que atue como uma máquina de vendas.",
  "Valoriza extrema velocidade, código limpo e arquitetura SEO.",
  "Busca um design exclusivo e pensado para conversão (UX/UI).",
  "Entende que tecnologia escalável exige planejamento estrutural.",
  "Vê o desenvolvimento digital como um investimento de longo prazo.",
];

const negativeItems = [
  "Procura a opção mais barata (concorrência por preço).",
  "Precisa de um template pronto entregue em 24 horas.",
  "Deseja apenas um 'cartão de visitas' online sem estratégia.",
  "Não vê valor em performance ou em design pensado para o usuário.",
];

export default function TargetAudience() {
  return (
    <section
      id="target"
      aria-labelledby="target-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/30"
    >
      {/* Background Subtle Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 sm:mb-20 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border/80 mb-6 backdrop-blur-md">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-textSecondary">
              Alinhamento de Perfil
            </span>
          </div>

          <h2
            id="target-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]"
          >
            Nós seremos a parceira <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-400 font-serif italic font-light">
              ideal para o seu negócio?
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-textSecondary font-light">
            Não atendo todos os perfis de clientes. Meu foco é exclusivamente em
            empresas e profissionais que enxergam a tecnologia como{" "}
            <strong className="text-textPrimary font-medium">
              motor de crescimento
            </strong>
            .
          </p>
        </motion.div>

        {/* ================= GRID DE QUALIFICAÇÃO ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 lg:gap-8 lg:grid-cols-[1.3fr_1fr] items-stretch"
        >
          {/* Card: O CLIENTE IDEAL (Maior Destaque) */}
          <motion.div
            variants={fadeUpVariants}
            className="group relative overflow-hidden rounded-[2.5rem] border border-primary/30 bg-surface/60 p-8 sm:p-12 backdrop-blur-xl transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
          >
            {/* Top Glow Específico */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-blue-400 to-indigo-500" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />

            <div className="relative z-10 mb-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-2 block">
                Alinhamento Perfeito
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-textPrimary tracking-tight">
                Vamos trabalhar muito bem juntos se você:
              </h3>
            </div>

            <div className="relative z-10 space-y-1">
              {positiveItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 py-3.5 border-b border-white/5 last:border-0 group-hover:border-primary/10 transition-colors"
                >
                  <div className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-textSecondary font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card: NÃO É O CLIENTE IDEAL (Mais Sóbrio, Secundário) */}
          <motion.div
            variants={fadeUpVariants}
            className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-background/50 p-8 sm:p-10 backdrop-blur-md transition-all duration-300 hover:border-red-500/20 hover:bg-surface/30 flex flex-col justify-between"
          >
            <div className="relative z-10 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-textSecondary mb-2 block group-hover:text-red-400/80 transition-colors">
                Talvez não seja o momento
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-textPrimary tracking-tight">
                Minhas soluções podem não se encaixar se:
              </h3>
            </div>

            <div className="relative z-10 space-y-1 mt-auto">
              {negativeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0"
                >
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-surface border border-border flex items-center justify-center text-textSecondary group-hover:text-red-400 transition-colors">
                    <X size={10} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm text-textSecondary/80 font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= CTA FINAL BOTTOM (APPLE STYLE) ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 sm:mt-32"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface/60 p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/5">
            {/* Efeito Spotlight Interno */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight mb-6">
                Estamos na mesma página?
              </h3>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-textSecondary font-light mb-10">
                Se você busca um projeto que una estratégia inteligente,
                tecnologia escalável e performance extrema para alavancar suas
                vendas, vamos conversar sobre a melhor arquitetura para o seu
                negócio.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primaryHover hover:scale-[1.02] shadow-xl shadow-primary/20"
                >
                  <MessageCircle size={18} />
                  Solicitar orçamento
                </a>

                <a
                  href="#portfolio"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-surface border border-border px-8 py-4 font-bold text-textPrimary transition-all hover:bg-white/5 hover:border-primary/30"
                >
                  Ver Projetos Recentes
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
