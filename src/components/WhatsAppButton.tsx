import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const messages = [
  "Olá! Estou com vaga na agenda para iniciar o seu projeto.",
  "Precisa de um site moderno ou sistema web sob medida?",
  "Fale direto comigo agora e tire suas dúvidas!",
];

export default function WhatsAppButton() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Aparece após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Rotação de mensagens a cada 6 segundos
  useEffect(() => {
    if (!isVisible || isDismissed) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible, isDismissed]);

  return createPortal(
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3 pointer-events-none">
      {/* Balão de Mensagem Estilo Chat */}
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto relative max-w-[260px] sm:max-w-[300px] rounded-2xl bg-surface border border-border p-4 shadow-2xl backdrop-blur-xl mb-2"
          >
            {/* Botão Fechar Balão */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-2.5 right-2.5 text-textSecondary hover:text-textPrimary transition"
              aria-label="Fechar notificação"
            >
              <X size={14} />
            </button>

            {/* Cabeçalho do Chat */}
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-textSecondary">
                Vinicius Soares • Online
              </span>
            </div>

            {/* Texto Dinâmico */}
            <p className="text-xs sm:text-sm text-textPrimary font-light leading-relaxed pr-4">
              {messages[currentMessageIndex]}
            </p>

            {/* Seta do Balão */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-surface border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulso de luz atrás do botão */}
        <motion.span
          className="absolute -inset-3 rounded-full bg-[#25D366]/30 pointer-events-none"
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 0.1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />

        {/* Logotipo Oficial do WhatsApp (SVG) */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="white"
          className="relative z-10 text-white"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>,
    document.body,
  );
}
