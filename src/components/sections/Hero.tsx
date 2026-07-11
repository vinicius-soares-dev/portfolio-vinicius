import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Rocket, ShieldCheck, Smartphone } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-background"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND ANIMADO: Foco em elegância e performance */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Orbs de luz minimalistas */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-orange-500/10 blur-[100px]"
        />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponível para novos projetos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-textPrimary mb-6"
          >
            Crio sites e sistemas que <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              geram clientes e escalam
            </span>{" "}
            negócios no digital
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-textSecondary mb-10 max-w-2xl leading-relaxed"
          >
            Desenvolvimento web de alta performance focado em conversão.
            Transformo ideias em máquinas de vendas digitais.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Tirar projeto do papel
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-border bg-surface px-8 py-4 rounded-xl font-semibold hover:border-primary/50 transition-all text-center"
            >
              Ver como posso ajudar
            </button>
          </motion.div>

          {/* Grid de Provas */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border/50"
          >
            {[
              {
                icon: ShieldCheck,
                title: "7+ anos",
                desc: "Experiência sólida",
              },
              { icon: Code, title: "VG Tech", desc: "Software House" },
              {
                icon: Rocket,
                title: "Performance",
                desc: "Foco em resultados",
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                desc: "100% Responsivo",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={22} />
                </div>
                <div>
                  <strong className="block text-textPrimary text-sm sm:text-base">
                    {item.title}
                  </strong>
                  <span className="text-xs sm:text-sm text-textSecondary">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
