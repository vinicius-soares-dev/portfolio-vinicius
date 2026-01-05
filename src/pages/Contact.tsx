import { useState } from "react"
import { motion } from "framer-motion"

const servicesPricing = [
  { price: 50, label: "Criativo Post" },
  { price: 75, label: "Criativo Reels" },
  { price: 100, label: "Logotipo" },
  { price: 150, label: "Tráfego Pago" },
  { price: 160, label: "Landing Page" },
  { price: 200, label: "Identidade Visual" },
  { price: 260, label: "Site Institucional" },
  { price: 480, label: "E-commerce" },
  { price: 799, label: "Aplicativo Web" }
]

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [budget, setBudget] = useState(50)

  const selectedService = servicesPricing
    .slice()
    .reverse()
    .find(s => budget >= s.price)?.label


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá, meu nome é ${name} (${email}) e gostaria de solicitar: ${selectedService} com orçamento de R$ ${budget}. Mensagem: ${message}`
    const url = `https://wa.me/5532999823915?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <main className="bg-background min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            Fale comigo
          </h1>
          <p className="text-textSecondary text-lg">
            Preencha o formulário ou arraste o orçamento para ver o preço do seu projeto.
          </p>
        </motion.div>

        {/* Form + Orçamento */}
        <div className="bg-surface rounded-3xl p-8 shadow-lg">
          {/* Orçamento */}
          <div className="mb-8">
            <label className="block text-textPrimary font-medium mb-2">
              Arraste para escolher seu orçamento: R$ {budget}
            </label>
            <input
              type="range"
              min={50}
              max={800}
              step={1}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="w-full h-3 bg-primary/30 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p className="mt-2 text-textSecondary">
              Nesse valor eu faço: <strong>{selectedService}</strong>
            </p>
           
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-textPrimary font-medium mb-1">Nome</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full border border-border rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-textPrimary font-medium mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full border border-border rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-textPrimary font-medium mb-1">Mensagem</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                placeholder="Me conte sobre seu projeto..."
                required
                className="w-full border border-border rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primaryHover transition"
            >
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
