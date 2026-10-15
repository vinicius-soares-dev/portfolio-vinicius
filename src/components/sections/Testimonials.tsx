import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Star,
  BriefcaseBusiness,
  CalendarDays,
  BadgeCheck,
  Sparkles,
  MessageCircle,
  Quote,
  ShieldCheck,
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

const stats = [
  { icon: CalendarDays, value: "7+", label: "Anos de experiência" },
  { icon: BriefcaseBusiness, value: "40+", label: "Projetos desenvolvidos" },
  { icon: BadgeCheck, value: "100%", label: "Projetos sob medida" },
  { icon: Star, value: "5.0", label: "Foco na satisfação" },
];

const testimonials = [
  { platform: "WhatsApp", image: "/images/testemunhas/whatsapp.jpg" },
  { platform: "99Freelas", image: "/images/testemunhas/99freelas.jpeg" },
  { platform: "Workana", image: "/images/testemunhas/workana.jpg" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/30"
    >
      {/* Background Lights Elegantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px]" />
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
              Prova Social
            </span>
          </div>

          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight leading-[1.15]"
          >
            A confiança é construída com <br className="hidden sm:block" />
            <span className="text-primary">resultados reais.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-textSecondary font-light">
            Não se trata apenas de entregar um código que funciona. É sobre
            entregar uma solução que transforma o negócio do cliente e supera
            expectativas.
          </p>
        </motion.div>

        {/* ================= ESTATÍSTICAS (DASHBOARD STYLE) ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/30 p-6 sm:p-8 backdrop-blur-xl transition-colors hover:border-primary/30 hover:bg-surface/50 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-primary opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl sm:text-5xl font-black text-textPrimary tracking-tighter mb-2">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-textSecondary uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= FEEDBACKS (PRINTS) ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-textPrimary tracking-tight flex items-center gap-3">
              O que dizem sobre mim
              <Quote size={24} className="text-primary/50" />
            </h3>
          </div>
          <div className="flex items-center gap-1.5 bg-surface/50 px-4 py-2 rounded-full border border-border/50">
            <span className="text-sm font-bold text-textPrimary mr-2">5.0</span>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className="fill-primary text-primary"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:gap-8 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.platform}
              variants={fadeUpVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-surface/40 p-2 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative w-full overflow-hidden rounded-[1.5rem] bg-black">
                {/* Badge da Plataforma Flutuante */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {testimonial.platform}
                  </span>
                </div>

                <img
                  src={testimonial.image}
                  alt={`Avaliação via ${testimonial.platform}`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 border border-white/5 rounded-[1.5rem] pointer-events-none" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= CTA FINAL BOTTOM ================= */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 sm:mt-32"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface/60 p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider mb-6 border border-primary/20">
                <ShieldCheck size={14} /> Garantia de Qualidade
              </span>

              <h3 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight mb-6">
                Seu projeto pode ser a próxima{" "}
                <span className="text-primary">história de sucesso.</span>
              </h3>

              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-textSecondary font-light mb-10">
                Conte sua ideia, vamos desenhar a melhor arquitetura técnica e
                construir uma solução digital alinhada aos seus objetivos de
                crescimento.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primaryHover hover:scale-[1.02] shadow-xl shadow-primary/20"
                >
                  <MessageCircle size={18} />
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
