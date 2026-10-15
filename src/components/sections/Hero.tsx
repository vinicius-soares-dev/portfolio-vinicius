import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Code2,
  Rocket,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Terminal,
  Zap,
  CheckCircle2,
  Bot,
  LayoutTemplate,
  Cpu,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatVariants: Variants = {
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Dados do Mockup Interativo
const mockupTabs = [
  {
    id: "frontend",
    title: "Interface.tsx",
    icon: LayoutTemplate,
    color: "text-blue-400",
    code: (
      <>
        <div className="text-emerald-400 mb-2">
          // Renderização de Alta Performance
        </div>
        <div>
          <span className="text-purple-400">export default function</span>{" "}
          <span className="text-blue-300">Plataforma</span>() &#123;
        </div>
        <div className="pl-4">
          <span className="text-purple-400">return</span> (
        </div>
        <div className="pl-8">
          &lt;<span className="text-blue-300">motion.div</span>
        </div>
        <div className="pl-12 text-amber-300">
          initial=&#123;&#123; opacity:{" "}
          <span className="text-purple-400">0</span> &#125;&#125;
        </div>
        <div className="pl-12 text-amber-300">
          animate=&#123;&#123; opacity:{" "}
          <span className="text-purple-400">1</span> &#125;&#125;
        </div>
        <div className="pl-12 text-amber-300">
          className=
          <span className="text-emerald-300">
            "ui-glassmorphism max-conversion"
          </span>
        </div>
        <div className="pl-8">&gt;</div>
        <div className="pl-12">
          &lt;<span className="text-blue-300">ConversaoOtimizada</span> /&gt;
        </div>
        <div className="pl-8">
          &lt;/<span className="text-blue-300">motion.div</span>&gt;
        </div>
        <div className="pl-4">);</div>
        <div>&#125;</div>
      </>
    ),
  },
  {
    id: "backend",
    title: "AgenteIA.ts",
    icon: Cpu,
    color: "text-emerald-400",
    code: (
      <>
        <div className="text-emerald-400 mb-2">
          // Automação Integrada com IA
        </div>
        <div>
          <span className="text-purple-400">import</span> &#123;{" "}
          <span className="text-textPrimary">OpenAI</span> &#125;{" "}
          <span className="text-purple-400">from</span>{" "}
          <span className="text-amber-300">"ia-sdk"</span>;
        </div>
        <br />
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">agente</span> ={" "}
          <span className="text-purple-400">new</span>{" "}
          <span className="text-blue-300">OpenAI</span>(&#123;
        </div>
        <div className="pl-4">
          <span className="text-textPrimary">modelo</span>:{" "}
          <span className="text-amber-300">"gpt-4-turbo"</span>,
        </div>
        <div className="pl-4">
          <span className="text-textPrimary">funcao</span>:{" "}
          <span className="text-amber-300">"Atendimento Automático"</span>,
        </div>
        <div className="pl-4">
          <span className="text-textPrimary">tempoResposta</span>:{" "}
          <span className="text-purple-400">0.2</span>{" "}
          <span className="text-textSecondary">// segundos</span>
        </div>
        <div>&#125;);</div>
        <br />
        <div>
          <span className="text-blue-300">agente</span>.
          <span className="text-blue-300">iniciarEscuta</span>().
          <span className="text-purple-400">then</span>(() =&gt; &#123;
        </div>
        <div className="pl-4">
          <span className="text-blue-300">console</span>.
          <span className="text-blue-300">log</span>(
          <span className="text-amber-300">"Sistema rodando 24/7"</span>);
        </div>
        <div>&#125;);</div>
      </>
    ),
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(mockupTabs[0].id);

  const currentTab = mockupTabs.find((t) => t.id === activeTab);

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND ELEGANTE (Efeito Aurora Estático/Animado) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B0E14]">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[120px] mix-blend-screen"
        />
        {/* Overlay para escurecer suavemente e criar contraste */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* COLUNA DA ESQUERDA: COPY & CTAS */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/50 border border-border/50 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-textPrimary tracking-wide">
                  Disponível para novos projetos
                </span>
              </div>
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-textPrimary mb-6 leading-[1.05]"
            >
              Soluções digitais que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-300">
                geram clientes
              </span>{" "}
              e escalam negócios.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-textSecondary mb-10 max-w-2xl leading-relaxed font-light"
            >
              Desenvolvimento de{" "}
              <strong className="text-textPrimary font-medium">
                e-commerces, plataformas imobiliárias
              </strong>{" "}
              e automações com Inteligência Artificial. Alta performance focada
              em conversão.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
              >
                <span>Tirar projeto do papel</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 border border-border/80 bg-surface/30 hover:bg-surface/80 text-textPrimary px-8 py-4 rounded-2xl font-semibold backdrop-blur-md transition-all hover:border-primary/30 hover:-translate-y-1"
              >
                <span>Ver especialidades</span>
              </button>
            </motion.div>
          </div>

          {/* COLUNA DA DIREITA: MOCKUP INTERATIVO */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative w-full"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative mx-auto max-w-md lg:max-w-none cursor-default"
            >
              {/* Moldura de Vidro Principal */}
              <div className="rounded-2xl border border-border/60 bg-[#121826]/80 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden relative z-10">
                {/* Header (Botões do SO) */}
                <div className="flex items-center px-4 py-3 bg-[#0B0E14]/50 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors" />
                  </div>
                </div>

                {/* Área de Abas Interativas */}
                <div className="flex items-center px-2 pt-2 bg-[#0B0E14]/30 border-b border-border/40 overflow-x-auto no-scrollbar">
                  {mockupTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-all duration-300 text-sm font-mono ${
                        activeTab === tab.id
                          ? "border-primary text-textPrimary bg-surface/50 rounded-t-lg"
                          : "border-transparent text-textSecondary hover:text-textPrimary hover:bg-surface/30 rounded-t-lg"
                      }`}
                    >
                      <tab.icon
                        size={14}
                        className={activeTab === tab.id ? tab.color : ""}
                      />
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Conteúdo do Código Animado */}
                <div className="p-6 font-mono text-xs sm:text-sm leading-loose text-textSecondary min-h-[320px] bg-[#0B0E14]/40">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentTab?.code}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Footer do Editor (Status ao vivo) */}
                <div className="px-4 py-2 bg-[#0B0E14]/80 border-t border-border/40 flex items-center justify-between font-sans text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                      <CheckCircle2 size={14} /> Compilado com sucesso
                    </span>
                  </div>
                  <span className="text-textSecondary font-mono flex items-center gap-1">
                    <Terminal size={12} /> vs-engine v2.0
                  </span>
                </div>
              </div>

              {/* CARDS FLUTUANTES REDESENHADOS */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -top-5 -right-5 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl border border-white/5 bg-surface/60 backdrop-blur-xl shadow-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Zap size={18} className="fill-emerald-400/20" />
                </div>
                <div>
                  <div className="text-[11px] text-textSecondary font-medium uppercase tracking-wider">
                    Performance
                  </div>
                  <div className="text-sm font-black text-white tracking-tight">
                    100 / 100
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                transition={{ delay: 2.5 }}
                className="absolute -bottom-5 -left-5 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl border border-white/5 bg-surface/60 backdrop-blur-xl shadow-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-textSecondary font-medium uppercase tracking-wider">
                    Automação
                  </div>
                  <div className="text-sm font-black text-white tracking-tight">
                    IA Integrada
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* GRID DE DIFERENCIAIS (Minimalista) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-24 pt-10 border-t border-border/30"
        >
          {[
            {
              icon: ShieldCheck,
              title: "7+ anos",
              desc: "Experiência prática",
            },
            {
              icon: Code2,
              title: "Software House",
              desc: "Estrutura completa",
            },
            { icon: Rocket, title: "Performance", desc: "Foco em resultados" },
            {
              icon: Smartphone,
              title: "Mobile First",
              desc: "100% Responsivo",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group cursor-default"
            >
              <div className="p-3 rounded-xl bg-surface/50 border border-border/50 text-textSecondary group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <strong className="block text-textPrimary text-sm sm:text-base font-bold mb-0.5">
                  {item.title}
                </strong>
                <span className="text-xs sm:text-sm text-textSecondary font-medium">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
