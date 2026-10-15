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
  Sparkles,
  ArrowUpRight,
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

const highlights = [
  { icon: Award, title: "7+ anos", subtitle: "Experiência" },
  { icon: Briefcase, title: "VG Tech", subtitle: "CEO & CTO" },
  { icon: Rocket, title: "120+ projetos", subtitle: "Entregues" },
  { icon: MapPin, title: "Brasil", subtitle: "Atendimento global" },
];

export default function AboutMe() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/30"
    >
      {/* Background Lights Elegantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border/80 mb-6 backdrop-blur-md">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-textSecondary">
              Sobre Mim
            </span>
          </div>

          <h2
            id="about-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]"
          >
            Quem está por trás do código.
          </h2>
        </motion.div>

        {/* ================= BIOGRAFIA & FOTO (LAYOUT ASSIMÉTRICO) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda: Texto e Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.h3
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl font-bold text-textPrimary mb-6"
            >
              Tecnologia com foco em vendas e resultado.
            </motion.h3>

            <motion.div
              variants={fadeUpVariants}
              className="space-y-5 text-base sm:text-lg leading-relaxed text-textSecondary font-light"
            >
              <p>
                Sou{" "}
                <strong className="text-textPrimary font-bold">
                  Vinicius Soares
                </strong>
                , Full Stack Software Engineer e CEO da{" "}
                <strong className="text-textPrimary font-bold">
                  VG Tech Solutions
                </strong>
                . Minha missão não é apenas programar, é desenhar arquiteturas
                digitais que alavancam negócios.
              </p>
              <p>
                Atuo na intersecção entre{" "}
                <strong className="text-primary font-medium">
                  Engenharia de Software de Alto Nível e Marketing de Conversão
                </strong>
                . Isso significa que todo site, aplicativo ou sistema que
                construo é pensado para carregar em milissegundos e guiar o
                usuário até a compra.
              </p>
            </motion.div>

            {/* Grid de Dados Rápidos (Highlights) */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 p-4 rounded-2xl bg-surface/40 border border-border/50 hover:bg-surface/80 hover:border-primary/30 transition-all"
                >
                  <item.icon size={20} className="text-primary" />
                  <div>
                    <strong className="block text-textPrimary text-sm font-bold">
                      {item.title}
                    </strong>
                    <span className="text-xs text-textSecondary">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Foto Estilo Retrato (Portrait) */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] p-2 bg-gradient-to-b from-border/50 to-transparent">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] -z-10 rounded-[3rem]" />

              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-surface relative group">
                {/* Overlay Dark sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                <img
                  src="/images/perfil.jpg"
                  alt="Vinicius Soares"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                    <strong className="block text-white text-lg font-bold">
                      Vinicius Soares
                    </strong>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider block mt-0.5">
                      Full Stack Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BENTO GRID DE ESPECIALIZAÇÕES ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <div className="mb-10 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-textPrimary">
              A base técnica por trás do código.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {/* Bento Card 1: Ciência da Computação (Largo) */}
            <motion.div
              variants={fadeUpVariants}
              className="md:col-span-2 group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/40 p-8 backdrop-blur-xl hover:border-primary/30 transition-all flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10" />
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <GraduationCap size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-textPrimary mb-2">
                  Ciência da Computação
                </h4>
                <p className="text-sm text-textSecondary font-light max-w-md">
                  Bacharelado com foco em arquitetura de software, estrutura de
                  dados, algoritmos avançados e fundamentos matemáticos de
                  sistemas.
                </p>
              </div>
            </motion.div>

            {/* Bento Card 2: Marketing (Quadrado Alto) */}
            <motion.div
              variants={fadeUpVariants}
              className="md:row-span-2 group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/40 p-8 backdrop-blur-xl hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <BarChart3 size={24} />
              </div>
              <h4 className="text-xl font-bold text-textPrimary mb-3">
                Marketing & Conversão
              </h4>
              <p className="text-sm text-textSecondary font-light leading-relaxed">
                Desenvolvimento sem vendas não paga as contas. Domínio em SEO
                Técnico, Google Ads, Copywriting (escrita persuasiva), CRO
                (Otimização de Taxa de Conversão) e mapeamento da jornada do
                cliente.
              </p>
            </motion.div>

            {/* Bento Card 3: Cloud (Quadrado) */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/40 p-8 backdrop-blur-xl hover:border-primary/30 transition-all flex flex-col justify-end"
            >
              <div className="mb-auto">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Cloud size={20} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-textPrimary mb-1">
                  Cloud Computing
                </h4>
                <p className="text-xs text-textSecondary font-light">
                  Infraestrutura em Google Cloud/AWS, Docker e CI/CD pipelines.
                </p>
              </div>
            </motion.div>

            {/* Bento Card 4: Software Eng (Quadrado) */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/40 p-8 backdrop-blur-xl hover:border-primary/30 transition-all flex flex-col justify-end"
            >
              <div className="mb-auto">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Code2 size={20} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-textPrimary mb-1">
                  Eng. de Software
                </h4>
                <p className="text-xs text-textSecondary font-light">
                  Pós-graduação em arquitetura escalável e Clean Code.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= CTA FINAL ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface/60 p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.1),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight mb-6">
                Cada linha de código é feita para{" "}
                <span className="text-primary">gerar resultado.</span>
              </h3>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-textSecondary font-light mb-10">
                Não importa se é um site institucional, landing page ou sistema
                complexo. O objetivo é criar uma ferramenta veloz, escalável e
                desenhada para transformar visitantes em clientes reais.
              </p>

              <a
                href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20portfólio%20e%20gostaria%20de%20iniciar%20o%20desenvolvimento%20do%20meu%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primaryHover hover:scale-[1.02] shadow-xl shadow-primary/20"
              >
                Iniciar meu projeto agora
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
