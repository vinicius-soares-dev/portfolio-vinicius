import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  MonitorSmartphone,
  Info,
} from "lucide-react";

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

const projects = [
  {
    tag: "Plataforma SaaS",
    title: "Zinq",
    subtitle: "Agenda Online & Vitrine Digital",
    image: "/images/projetos/zinqdash.png",
    description:
      "Plataforma criada do zero para profissionais que desejam automatizar agendamentos, pagamentos e presença digital em um único lugar. Arquitetura completa com painel administrativo e landing page nativa.",
    metrics: [
      "SaaS Completo",
      "Painel Admin",
      "API Própria",
      "PostgreSQL",
      "React",
    ],
    link: "https://zinq.me/",
    featured: true, // Define que este projeto ocupará 2 colunas
  },
  {
    tag: "Marketplace",
    title: "Publibox",
    subtitle: "Marketing Local",
    image: "https://placehold.co/1200x700/0F172A/FFFFFF?text=Publibox",
    description:
      "Ecossistema digital que conecta anunciantes e espaços físicos para campanhas de marketing local com busca inteligente.",
    metrics: ["Marketplace", "Busca Avançada", "Escalável"],
    link: "https://www.publibox.com.br/",
    featured: false,
  },
  {
    tag: "Sistema Web",
    title: "Zolve",
    subtitle: "Gestão de Orçamentos",
    image: "/images/projetos/zolve.png",
    description:
      "Sistema B2B desenvolvido para emissão rápida de propostas comerciais com geração de PDF automático e gestão de clientes.",
    metrics: ["Gerador PDF", "CRM Básico", "Cloud"],
    link: "https://zolve.vgtechsolutions.com.br",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/30"
    >
      {/* Background Subtle Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[160px]" />
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
              Projetos Recentes
            </span>
          </div>

          <h2
            id="projects-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]"
          >
            Casos reais de{" "}
            <span className="text-primary">código e conversão.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-textSecondary font-light">
            Cada linha de código que escrevo tem um propósito: resolver
            problemas complexos com arquitetura de ponta e uma experiência de
            usuário impecável.
          </p>
        </motion.div>

        {/* ================= GRID DE PROJETOS ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project, _idx) => (
            <motion.article
              key={project.title}
              variants={fadeUpVariants}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-surface/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 flex flex-col ${
                project.featured ? "lg:col-span-2 lg:flex-row" : "lg:col-span-1"
              }`}
            >
              {/* Linha de Brilho no Topo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20" />

              {/* CONTEÚDO (TEXTOS) */}
              <div
                className={`relative z-10 flex flex-col justify-between p-8 sm:p-10 ${project.featured ? "lg:w-[45%]" : "w-full"}`}
              >
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1.5">
                    <MonitorSmartphone size={14} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-textSecondary">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-textPrimary tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm font-semibold text-primary/80 mb-6 uppercase tracking-wider">
                    {project.subtitle}
                  </p>

                  <p className="leading-relaxed text-textSecondary font-light text-sm sm:text-base mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-lg border border-primary/15 bg-primary/5 px-2.5 py-1.5 text-[10px] sm:text-xs font-semibold text-primary transition-colors group-hover:bg-primary/10"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-textPrimary text-sm transition-all duration-300 hover:text-primary mt-auto w-max"
                >
                  Visitar projeto vivo
                  <ExternalLink
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              {/* ÁREA DA IMAGEM (MOCKUP DE NAVEGADOR) */}
              <div
                className={`relative flex items-center justify-center p-6 pt-0 sm:pt-6 ${project.featured ? "lg:w-[55%] lg:p-10" : "w-full h-64 sm:h-80"}`}
              >
                {/* Glow de fundo da imagem */}
                <div className="absolute inset-0 bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-50 rounded-full" />

                {/* Mockup Frame */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col transform transition-transform duration-700 group-hover:scale-[1.02]">
                  {/* Top Bar do Mac */}
                  <div className="flex h-8 w-full items-center gap-1.5 border-b border-white/10 bg-[#141414] px-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Imagem do Projeto */}
                  <div className="relative flex-1 bg-[#0a0a0a] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= CTA FINAL E OBSERVAÇÃO ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 sm:mt-24"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface/60 p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/5 flex flex-col items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)]" />

            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight mb-6">
                Quer ver mais detalhes?
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-textSecondary font-light mb-10">
                Além destes, desenvolvi inúmeras landing pages de alta
                conversão, e-commerces e sistemas internos para empresas que
                precisam de resultados mensuráveis.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/portfolio"
                  className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primaryHover hover:scale-[1.02] shadow-xl shadow-primary/20"
                >
                  Ver Portfólio Completo
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-surface border border-border px-8 py-4 font-bold text-textPrimary transition-all hover:bg-white/5 hover:border-primary/30"
                >
                  Discutir meu projeto
                </a>
              </div>
            </div>

            {/* Disclaimer / Observação Minimalista */}
            <div className="relative z-10 mt-12 pt-8 border-t border-border/40 w-full max-w-2xl flex items-start sm:items-center gap-3 text-left sm:text-center text-textSecondary/60 text-xs font-light">
              <Info size={16} className="shrink-0 mt-0.5 sm:mt-0" />
              <p>
                <strong className="text-textSecondary/80 font-medium">
                  Nota:
                </strong>{" "}
                Alguns projetos são de domínio dos clientes. Caso não renovem a
                hospedagem, os links podem ficar inativos temporariamente, mesmo
                que a autoria do software seja da VG Tech Solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
