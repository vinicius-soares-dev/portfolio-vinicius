import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { createPortal } from "react-dom"

export default function WhatsAppButton() {
  return createPortal(
    <a
      href="https://wa.me/5532999823915"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        w-16 h-16
        bg-[#25D366] hover:bg-[#1ebe5d]
        rounded-full
        flex items-center justify-center
        shadow-lg
        z-[9999]
      "
    >
      {/* Pulso de luz atrás do botão */}
      <motion.span
        className="
          absolute -inset-4
          rounded-full
          bg-[#25D366]/30
        "
        animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 0.1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* Animação do telefone */}
      <motion.div
        className="relative z-10"
        animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <Phone className="text-white" size={28} />
      </motion.div>
    </a>,
    document.body 
  )
}
