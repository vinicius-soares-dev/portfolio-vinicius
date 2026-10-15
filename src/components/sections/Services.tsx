import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Code2, PenTool, Sparkles } from "lucide-react";

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

const services = [
  {
    step: "01",
    icon: Code2,
    title: "Engenharia & Código",
    subtitle: "A base de alta performance",
    description:
      "Crio plataformas modernas, rápidas e escaláveis para oferecer a melhor experiência aos seus clientes, desde o primeiro clique até a conversão.",
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
    step: "02",
    icon: BarChart3,
    title: "Tração & Marketing",
    subtitle: "Levando clientes até você",
    description:
      "Com a estrutura pronta, aplico estratégias avançadas para aumentar sua visibilidade, atrair visitantes qualificados e gerar oportunidades reais.",
    items: [
      "Google Ads",
      "SEO Técnico",
      "Funis de Venda",
      "Análise de Métricas",
      "Otimização (CRO)",
      "Posicionamento",
    ],
  },
  {
    step: "03",
    icon: PenTool,
    title: "Conversão & Design",
    subtitle: "Transformando visitas em vendas",
    description:
      "Design intencional, copywriting e arquitetura de experiência trabalhando juntos para aumentar a confiança e acelerar a tomada de decisão.",
    items: [
      "Copywriting",
      "UX/UI Design",
      "Branding Digital",
      "Arquitetura da Informação",
      "Estratégia Visual",
      "Prototipagem",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/30"
    >
      {/* Background Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================= CABEÇALHO ================= */}
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
              Ecossistema Completo
            </span>
          </div>

          <h2
            id="services-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]"
          >
            Não entrego apenas código. <br className="hidden sm:block" />
            <span className="text-primary font-serif italic font-light">
              Construo motores de vendas.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-textSecondary font-light">
            Desenvolvimento, estratégia de aquisição e design de conversão
            trabalhando em total sincronia para transformar visitantes em
            faturamento.
          </p>
        </motion.div>

        {/* ================= GRID DE SERVIÇOS ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 lg:gap-8 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.step}
              variants={fadeUpVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface/30 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-surface/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Número Watermark Gigante */}
              <div className="absolute -top-6 -right-4 text-[120px] font-black leading-none text-white/[0.02] select-none transition-colors duration-500 group-hover:text-primary/[0.04]">
                {service.step}
              </div>

              {/* Linha Topo Animada */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 mb-8">
                {/* Ícone Container */}
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-border/50 text-textPrimary shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20">
                  <service.icon size={26} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-textPrimary mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-primary/80 mb-5 uppercase tracking-wider">
                  {service.subtitle}
                </p>
                <p className="leading-relaxed text-textSecondary font-light text-sm">
                  {service.description}
                </p>
              </div>

              {/* Tags / Pills de Sub-serviços */}
              <div className="relative z-10 mt-auto pt-8 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-full border border-border/50 bg-background/50 text-textSecondary transition-colors duration-300 group-hover:border-primary/20 group-hover:text-textPrimary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA FINAL BOTTOM ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 sm:mt-32"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface/60 p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/5">
            {/* Spotlight Efeito */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight mb-6">
                Todas as engrenagens trabalhando para o{" "}
                <span className="text-primary">seu crescimento.</span>
              </h3>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-textSecondary font-light mb-10">
                O sucesso digital não é sorte. É resultado da união de um
                desenvolvimento impecável, um tráfego de qualidade e um design
                desenhado para converter.
              </p>

              <Link
                to="/servicos"
                className="group flex items-center gap-2 rounded-xl bg-surface border border-border px-8 py-4 font-bold text-textPrimary transition-all hover:bg-primary hover:border-primary hover:text-white hover:scale-[1.02] shadow-xl"
              >
                Detalhes das Soluções
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
