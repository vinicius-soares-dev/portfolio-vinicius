import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderKanban } from "lucide-react";
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

const projects: Project[] = [
  {
    name: "Zinq",
    type: "Sistema Web",
    status: "Publicado",
    desc: "Plataforma web focada em automação e gestão.",
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
    desc: "Sistema robusto com foco em escalabilidade.",
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
    segment: "consultoria",
  },
  {
    name: "Publibox",
    type: "Sistema / Marketing",
    status: "Publicado",
    desc: "Plataforma para gestão e divulgação de conteúdos.",
    details: {
      about:
        "Sistema voltado para criação, organização e distribuição de conteúdos de forma estratégica.",
      impact:
        "Facilitou a gestão de campanhas e padronizou a comunicação digital.",
      results:
        "Maior eficiência no fluxo de publicação e controle de ações de marketing.",
    },
    link: "#",
    tags: ["Marketing", "Automação"],
    segment: "financeiro",
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
      "images/projetos/letikacta.png",
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

const segmentStyles: Record<
  Segment,
  {
    gradient: string;
    accent: string;
  }
> = {
  financeiro: {
    gradient: "from-emerald-500/25 via-emerald-500/10 to-transparent",
    accent: "bg-emerald-500/30",
  },
  saude: {
    gradient: "from-sky-500/25 via-sky-500/10 to-transparent",
    accent: "bg-sky-500/30",
  },
  educacao: {
    gradient: "from-violet-500/25 via-violet-500/10 to-transparent",
    accent: "bg-violet-500/30",
  },
  tech: {
    gradient: "from-primary/30 via-primary/10 to-transparent",
    accent: "bg-primary/30",
  },
  consultoria: {
    gradient: "from-primary/30 via-primary/10 to-transparent",
    accent: "bg-primary/30",
  },
  ecommerce: {
    gradient: "from-orange-500/25 via-orange-500/10 to-transparent",
    accent: "bg-orange-500/30",
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

  // Autoplay apenas se tiver mais de uma imagem
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(timer);
  }, [images]);

  const hasImages = images && images.length > 0;

  return (
    <div
      className={`
        relative w-full aspect-video overflow-hidden bg-cover bg-center
        ${!hasImages ? `bg-gradient-to-br ${segmentStyles[segment].gradient}` : "bg-black"}
      `}
    >
      {/* Fallback caso não haja imagens */}
      {!hasImages && (
        <>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <div
              className={`w-10 h-6 rounded-md ${segmentStyles[segment].accent}`}
            />
            <div className="w-14 h-6 rounded-md bg-white/20" />
            <div className="w-8 h-6 rounded-md bg-white/10" />
          </div>
        </>
      )}

      {/* Renderização das Imagens */}
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
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      )}

      {/* Overlay leve para destacar status e navegação */}
      {hasImages && <div className="absolute inset-0 bg-black/10" />}

      {/* Status */}
      <span
        className="
          absolute top-4 right-4 z-10
          text-xs font-medium
          px-3 py-1 rounded-full
          bg-background/80 backdrop-blur
        "
      >
        {status}
      </span>

      {/* Controles do Carrossel (Bolinhas) */}
      {hasImages && images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}
              `}
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
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos que viraram resultado
          </h1>
          <p className="text-textSecondary text-lg">
            Cada projeto é construído com estratégia, método e foco total em
            resultado real.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -10 }}
              className="
                group relative flex flex-col overflow-hidden rounded-3xl
                bg-surface/80 backdrop-blur
                shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
                transition-all border border-transparent hover:border-primary/20
              "
            >
              {/* ===== TOPO VISUAL / CARROSSEL ===== */}
              <ProjectCarousel
                images={project.images}
                status={project.status}
                segment={project.segment}
              />

              {/* ===== CONTEÚDO ===== */}
              <div className="relative z-10 p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <FolderKanban className="text-primary" size={20} />
                  <span className="text-xs uppercase tracking-wide text-textSecondary">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-textSecondary mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-background/60 border border-border
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggle(i)}
                  className="
                    text-sm font-medium text-textSecondary
                    hover:text-primary transition mb-4 text-left
                  "
                >
                  {openIndex === i ? "Ocultar detalhes" : "Ver detalhes"}
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-sm text-textSecondary space-y-3 mb-6">
                    <p>
                      <strong className="text-text">Sobre:</strong>{" "}
                      {project.details.about}
                    </p>
                    <p>
                      <strong className="text-text">Impacto:</strong>{" "}
                      {project.details.impact}
                    </p>
                    {project.details.results && (
                      <p>
                        <strong className="text-text">Resultados:</strong>{" "}
                        {project.details.results}
                      </p>
                    )}
                    <p className="text-xs opacity-70 mt-4">
                      Observação: a hospedagem e disponibilidade do site são de
                      responsabilidade do cliente. Eventuais indisponibilidades
                      podem ocorrer por fatores externos.
                    </p>
                  </div>
                </motion.div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto inline-flex items-center justify-center gap-2
                    px-4 py-2 rounded-xl
                    text-sm font-semibold
                    text-primary
                    border border-primary/30
                    bg-primary/5
                    hover:bg-primary/10
                    hover:border-primary/50
                    transition-all
                  "
                >
                  Ver projeto
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Linha animada inferior */}
              <div
                className="
                  absolute bottom-0 left-0 h-[2px] w-0
                  bg-gradient-to-r from-primary to-transparent
                  group-hover:w-full transition-all duration-500
                "
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* ================= CTA FINAL ================= */}
      <FinalCTA />
    </section>
  );
}
