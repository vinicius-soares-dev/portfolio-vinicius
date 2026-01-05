import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export default function FinalCTA() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 py-32 text-center"
      >
        <motion.h2
          variants={item}
          id="cta-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-8"
        >
          Vamos tirar seu projeto do papel?
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-textSecondary text-lg mb-14 leading-relaxed"
        >
          Seja um site, sistema ou estratégia digital completa,
          posso te ajudar a criar algo profissional,
          rápido e pensado para gerar resultado de verdade.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
            href="https://wa.me/5532999823915?text=Olá,%20quero%20conversar%20sobre%20um%20projeto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition"
            aria-label="Falar com Vinicius pelo WhatsApp"
          >
            Falar comigo no WhatsApp
          </motion.a>
        </motion.div>

        <motion.p
          variants={item}
          className="text-sm text-textSecondary"
        >
          Respondo pessoalmente e sem compromisso.
        </motion.p>
      </motion.div>
    </section>
  )
}
