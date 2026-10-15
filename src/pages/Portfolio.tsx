import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ExternalLink, FolderKanban, Sparkles } from "lucide-react";
import FinalCTA from "../components/sections/FinalCTA";

type Segment =
  | "financeiro"
  | "saude"
  | "educacao"
  | "tech"
  | "consultoria"
  | "ecommerce";

type Project = {
  name: string;
  type: string;
  status: string;
  desc: string;
  details: {
    about: string;
    impact: string;
    results?: string;
  };
  link: string;
  tags: string[];
  segment: Segment;
  images?: string[];
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const projects: Project[] = [
  {
    name: "BR Códigos",
    type: "Plataforma E-commerce / Automação",
    status: "Publicado",
    desc: "Plataforma especializada em fornecimento rápido de códigos de barras EAN13 e DUN14 sem burocracia.",
    images: ["/images/projetos/brcodigos.png"],
    details: {
      about:
        "Plataforma digital integrada para compra e emissão automatizada de códigos de barras personalizados EAN13 e DUN14, com entrega rápida e pagamento único.",
      impact:
        "Automatizou o processo de vendas e entrega de códigos digitais, eliminando burocracias e fichas cadastrais para os clientes.",
      results:
        "Atendimento eficiente com entrega automatizada em até 24h e emissão integrada de certificados e recibos.",
    },
    link: "https://brcodigos.com.br/",
    tags: ["E-commerce", "Automação", "Plataforma Web"],
    segment: "ecommerce",
  },
  {
    name: "Zinq",
    type: "Sistema Web / SaaS",
    status: "Publicado",
    desc: "Plataforma web focada em automação, agendamento e gestão.",
    images: [
      "/images/projetos/zinqdash.png",
      "/images/projetos/zinqchat.png",
      "/images/projetos/zinqconfig.png",
      "/images/projetos/zinqranking.png",
      "/images/projetos/zinqroletas.png",
    ],
    details: {
      about:
        "Sistema web desenvolvido para centralizar processos internos, automatizar rotinas e facilitar a gestão operacional do negócio.",
      impact:
        "Redução de tarefas manuais, maior controle das informações e ganho de produtividade no dia a dia.",
      results:
        "Processos mais rápidos e organizados, com visão clara dos dados em tempo real.",
    },
    link: "https://zinq.me/",
    tags: ["Sistema", "Dashboard", "Performance"],
    segment: "tech",
  },
  {
    name: "Zolve",
    type: "Sistema / Plataforma",
    status: "Em produção",
    desc: "Sistema robusto com foco em escalabilidade e propostas.",
    images: [
      "/images/projetos/zolve.png",
      "/images/projetos/zolvechave.png",
      "/images/projetos/zolvelicença.png",
      "/images/projetos/zolveorça.png",
      "/images/projetos/zolveos.png",
      "/images/projetos/zolveform.png",
      "/images/projetos/zolveform2.png",
    ],
    details: {
      about:
        "Plataforma desenvolvida com arquitetura escalável, preparada para crescimento de usuários e novas funcionalidades.",
      impact:
        "Base tecnológica sólida que permite evolução contínua sem retrabalho ou gargalos técnicos.",
      results:
        "Projeto preparado para escalar com segurança conforme a demanda do negócio.",
    },
    link: "https://zolve.vgtechsolutions.com.br/",
    tags: ["Web App", "Escalável"],
    segment: "financeiro",
  },
  {
    name: "RNNI",
    type: "Site Institucional",
    status: "Publicado",
    images: [
      "/images/projetos/rnni.png",
      "/images/projetos/rnni2.png",
      "/images/projetos/rnni3.png",
      "/images/projetos/rnni4.png",
      "/images/projetos/rnni5.png",
    ],
    desc: "Site para empresa de consultoria imobiliária.",
    details: {
      about: "Site voltado para captação de potenciais clientes e parceiros.",
      impact:
        "Ajudou na comunicação com os clientes e captação de eventuais parceiros.",
      results:
        "Aumentou consideravelmente a conclusão de negócios e captação de clientes.",
    },
    link: "https://www.rnni.com.br/",
    tags: ["Site Institucional", "Branding", "UX"],
    segment: "consultoria",
  },
  {
    name: "MR SAUCE",
    type: "E-Commerce / Loja Virtual",
    status: "Publicado",
    images: [
      "/images/projetos/mrsauce.png",
      "/images/projetos/mrsauce2.png",
      "/images/projetos/mrsauce3.png",
    ],
    desc: "E-commerce para comércio de molhos gourmet.",
    details: {
      about: "Loja voltada para vendas de ingredientes culinários.",
      impact: "Melhora na divulgação de produtos e vendas online.",
      results: "Aumentou as vendas da empresa em 80%.",
    },
    link: "https://mrsauce.com.br/",
    tags: ["E-commerce", "Loja Virtual", "UI"],
    segment: "ecommerce",
  },
  {
    name: "Plane IT",
    type: "Site Institucional",
    status: "Publicado",
    images: [
      "/images/projetos/planeit.png",
      "/images/projetos/planeitservices.png",
      "/images/projetos/planeitcontact.png",
    ],
    desc: "Site para empresa de consultoria aeronáutica.",
    details: {
      about: "Site voltado para captação de potenciais clientes.",
      impact: "Facilitou na captação de clientes e divulgação da marca.",
      results: "Aumento em mais de 110% na busca pela empresa no Google.",
    },
    link: "https://plane-it.com/",
    tags: ["Site Institucional", "Branding", "UX"],
    segment: "consultoria",
  },
  {
    name: "Létika Silva",
    type: "Landing Page",
    status: "Publicado",
    desc: "Site profissional para dubladora e atriz.",
    images: [
      "/images/projetos/letika.png",
      "/images/projetos/letikaabout.png",
      "/images/projetos/letikacta.png",
    ],
    details: {
      about:
        "Landing page focada em posicionamento profissional, portfólio artístico e conversão de contatos.",
      impact:
        "Fortaleceu a presença digital e transmitiu mais profissionalismo para contratantes.",
      results:
        "Facilitou o contato direto e a apresentação do trabalho de forma clara e objetiva.",
    },
    link: "https://letikasilva.com.br/home-mobile/",
    tags: ["Landing Page", "Branding", "UX"],
    segment: "tech",
  },
  {
    name: "Portal Aeronauta",
    type: "Plataforma Educacional",
    status: "Publicado",
    desc: "Sistema de simulados e ranking para aviação.",
    images: [
      "/images/projetos/aeronauta.png",
      "/images/projetos/aeroranking.png",
      "/images/projetos/aero.png",
    ],
    details: {
      about:
        "Plataforma educacional completa para estudantes da aviação, com simulados, ranking e acompanhamento de desempenho.",
      impact:
        "Organizou o processo de estudo e aumentou o engajamento dos alunos.",
      results:
        "Melhor retenção dos usuários e crescimento consistente da base de alunos.",
    },
    link: "https://portalaeronauta.com.br/pt",
    tags: ["Educação", "Sistema", "Ranking"],
    segment: "educacao",
  },
  {
    name: "Além da Contabilidade",
    type: "Site + BPO Financeiro",
    status: "Publicado",
    desc: "Site institucional focado em BPO financeiro.",
    details: {
      about:
        "Site institucional desenvolvido para posicionar a empresa no mercado de BPO financeiro.",
      impact:
        "Comunicação clara dos serviços, autoridade no segmento e melhor captação de leads.",
      results:
        "Estrutura digital sólida para apoio comercial e crescimento da empresa.",
    },
    link: "https://alemdacontabilidade.com.br/",
    tags: ["Institucional", "Financeiro"],
    segment: "financeiro",
  },
  {
    name: "Studio 1898 Arquitetura",
    type: "Site Institucional",
    status: "Publicado",
    desc: "Site premium para escritório de arquitetura.",
    details: {
      about:
        "Site institucional com foco em estética, posicionamento premium e valorização dos projetos arquitetônicos.",
      impact: "Reforçou a identidade visual e o valor percebido da marca.",
      results:
        "Melhor apresentação dos projetos e fortalecimento da imagem profissional.",
    },
    link: "https://studio1898arquitetura.com/",
    tags: ["Arquitetura", "Design"],
    segment: "tech",
  },
];

const segmentStyles: Record<Segment, { accent: string }> = {
  financeiro: {
    accent: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  saude: { accent: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
  educacao: { accent: "bg-violet-500/20 text-violet-400 border-violet-500/30" },
  tech: { accent: "bg-primary/20 text-primary border-primary/30" },
  consultoria: { accent: "bg-primary/20 text-primary border-primary/30" },
  ecommerce: {
    accent: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
};

// ================= COMPONENTE DE CARROSSEL =================
const ProjectCarousel = ({
  images,
  status,
  segment,
}: {
  images?: string[];
  status: string;
  segment: Segment;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images]);

  const hasImages = images && images.length > 0;

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-surface rounded-t-[2rem]">
      {hasImages && (
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Preview ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>
      )}

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Status Badge */}
      <span className="absolute top-4 right-4 z-10 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-background/80 border border-white/10 backdrop-blur-md text-textPrimary">
        {status}
      </span>

      {/* Segment Badge */}
      <span
        className={`absolute top-4 left-4 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${segmentStyles[segment].accent}`}
      >
        {segment}
      </span>

      {/* Controles do Carrossel (Bolinhas) */}
      {hasImages && images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ================= COMPONENTE PRINCIPAL =================
export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-background overflow-hidden">
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* ================= HERO ================= */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/85 border border-border mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-textSecondary">
                Portfólio de Soluções
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-textPrimary tracking-tight leading-[1.1] mb-6">
              Projetos reais que geram{" "}
              <span className="text-primary">resultados sólidos.</span>
            </h1>

            <p className="text-textSecondary text-lg sm:text-xl font-light leading-relaxed">
              Cada software, e-commerce ou sistema foi construído com
              arquitetura robusta, método rigoroso e foco absoluto na conversão
              do negócio.
            </p>
          </motion.div>

          {/* ================= GRID DE PROJETOS ================= */}
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={i}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-surface/40 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-surface/80 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Linha topo brilhante no hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20" />

                {/* ===== TOPO CARROSSEL ===== */}
                <ProjectCarousel
                  images={project.images}
                  status={project.status}
                  segment={project.segment}
                />

                {/* ===== CONTEÚDO ===== */}
                <div className="relative z-15 p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderKanban className="text-primary" size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-textSecondary">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-textPrimary mb-3 tracking-tight">
                    {project.name}
                  </h3>

                  <p className="text-textSecondary text-sm sm:text-base font-light leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-border/60 bg-background/50 text-textSecondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botão de Detalhes */}
                  <button
                    onClick={() => toggle(i)}
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-textPrimary transition mb-6 text-left flex items-center gap-1.5 w-fit"
                  >
                    <span>
                      {openIndex === i
                        ? "Ocultar detalhes"
                        : "Ver detalhes técnicos"}
                    </span>
                  </button>

                  {/* Detalhes Expansíveis */}
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="text-xs sm:text-sm text-textSecondary space-y-3 p-4 rounded-2xl bg-background/50 border border-border/50 font-light">
                          <p>
                            <strong className="text-textPrimary font-semibold">
                              Sobre:
                            </strong>{" "}
                            {project.details.about}
                          </p>
                          <p>
                            <strong className="text-textPrimary font-semibold">
                              Impacto:
                            </strong>{" "}
                            {project.details.impact}
                          </p>
                          {project.details.results && (
                            <p>
                              <strong className="text-textPrimary font-semibold">
                                Resultados:
                              </strong>{" "}
                              {project.details.results}
                            </p>
                          )}
                          <p className="text-[10px] text-textSecondary/60 pt-2 border-t border-border/30">
                            *Nota: A disponibilidade da aplicação online é de
                            responsabilidade do cliente proprietário do domínio.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-bold text-textPrimary bg-surface border border-border transition-all hover:bg-primary hover:border-primary hover:text-white shadow-sm"
                  >
                    Acessar projeto vivo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <FinalCTA />
    </main>
  );
}
