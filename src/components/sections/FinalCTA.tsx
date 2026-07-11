import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const container: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const benefits = [
  "Projeto desenvolvido sob medida",
  "Comunicação direta durante o processo",
  "Foco em performance e resultado",
];

export default function FinalCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-background
      "
      aria-labelledby="cta-title"
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-primary/20
            blur-[150px]
          "
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          relative
          mx-auto
          max-w-5xl
          px-6
          py-32
          text-center
        "
      >
        <motion.span
          variants={item}
          className="
            inline-flex
            rounded-full
            bg-primary/10
            px-4
            py-2
            text-sm
            font-semibold
            text-primary
          "
        >
          Vamos criar algo incrível
        </motion.span>

        <motion.h2
          variants={item}
          id="cta-title"
          className="
            mt-8
            text-4xl
            font-black
            tracking-tight
            text-textPrimary
            md:text-6xl
          "
        >
          Seu próximo projeto
          <br />
          <span
            className="
              bg-gradient-to-r
              from-primary
              to-orange-400
              bg-clip-text
              text-transparent
            "
          >
            começa agora.
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-textSecondary
          "
        >
          Vamos transformar sua ideia em uma solução digital profissional,
          rápida e preparada para gerar resultados.
        </motion.p>

        <motion.div
          variants={item}
          className="
            mt-10
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          "
        >
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-border
                bg-surface
                px-4
                py-3
                text-sm
                text-textSecondary
              "
            >
              <CheckCircle2 size={16} className="text-primary" />

              {benefit}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="
            mt-12
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <motion.a
            href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento.?text=Olá,%20quero%20conversar%20sobre%20um%20projeto"
            target="_blank"
            rel="noopener noreferrer"
            animate={{
              boxShadow: [
                "0 0 0 rgba(0,0,0,0)",
                "0 0 30px rgba(37,99,235,.35)",
                "0 0 0 rgba(0,0,0,0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-primary
              px-10
              py-5
              font-bold
              text-white
            "
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </motion.a>

          <a
            href="/portfolio"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-border
              px-10
              py-5
              font-semibold
              text-textPrimary
              transition
              hover:border-primary
            "
          >
            Ver projetos
            <ArrowRight size={20} />
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="
            mt-8
            text-sm
            text-textSecondary
          "
        >
          Atendimento personalizado. Sem compromisso inicial.
        </motion.p>
      </motion.div>
    </section>
  );
}
