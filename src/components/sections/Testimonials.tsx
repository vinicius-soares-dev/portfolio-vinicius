// components/Testimonials.tsx
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Site Institucional",
    photo: "https://xsgames.co/randomusers/assets/avatars/female/33.jpg",
    content:
      "O Vinicius conseguiu entender exatamente o que eu precisava. O site ficou profissional, rápido e fácil de usar. A comunicação durante o projeto foi excelente."
  },
  {
    name: "Ana Paula Costa",
    role: "Landing Page",
    photo: "https://xsgames.co/randomusers/assets/avatars/female/25.jpg",
    content:
      "Mais do que criar o site, ele ajudou a estruturar a ideia, pensar no cliente final e deixar tudo pronto para divulgação."
  },
  {
    name: "Carlos Henrique",
    role: "Sistema Web Sob Medida",
    photo: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    content:
      "Profissional muito organizado. Cumpriu o combinado e entregou um sistema que facilitou muito nossa rotina."
  }
]

export default function Testimonials() {
  return (
    <section
      className="bg-background-secondary text-white relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      {/* Glow decorativo */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            O que clientes dizem
          </h2>
          <p className="text-text-secondary text-lg">
            Cada projeto é tratado como único, com foco em resultado e não apenas em entrega.
          </p>
        </div>

        {/* Grid ou Carrossel */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              className="bg-background p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              whileHover={{ y: -5 }}
            >
              {/* Conteúdo */}
              <p className="text-text-secondary mb-6 flex-1">“{t.content}”</p>

              {/* Footer com foto e nome */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <strong className="block text-white">{t.name}</strong>
                  <span className="text-text-secondary text-sm">{t.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
