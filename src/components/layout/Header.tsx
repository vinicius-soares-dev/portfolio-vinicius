import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-white/5">

      {/* Glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="relative">
          {/* Desktop animated logo */}
          <motion.div
            className="hidden md:inline-block font-bold text-lg text-text"
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Vinicius
            <span className="text-primary"> Soares</span>

            {/* underline */}
            <motion.span
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Mobile logo */}
          <span className="md:hidden font-bold text-lg text-text">
            Vinicius<span className="text-primary"> Soares</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { label: "Serviços", to: "/servicos" },
            { label: "Portfólio", to: "/portfolio" },
            { label: "Conteúdo", to: "/blog" },
          ].map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className="relative text-textSecondary hover:text-text transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
            </NavLink>
          ))}

          <Link
            to="/contato"
            className="rounded-md bg-primary px-4 py-2 font-semibold text-black hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition"
          >
            Orçamento
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-text"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 text-white"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
              <span className="font-bold text-lg">Vinicius Soares</span>
              <button onClick={() => setOpen(false)} className="text-2xl">
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 px-6 py-10 text-lg">
              {[
                { label: "Serviços", to: "/servicos" },
                { label: "Portfólio", to: "/portfolio" },
                { label: "Conteúdo", to: "/blog" },
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-md bg-primary py-3 text-center font-semibold text-black"
              >
                Orçamento
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
