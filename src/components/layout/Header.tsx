import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

useEffect(() => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches

  if (!isMobile) return

  if (open) {
    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"
  } else {
    document.body.style.overflow = ""
    document.body.style.touchAction = ""
  }

  return () => {
    document.body.style.overflow = ""
    document.body.style.touchAction = ""
  }
}, [open])



  const isActiveGroup = (path: string) =>
    location.pathname.startsWith(path)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/5">

      {/* Linha glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="font-bold text-lg">
          Vinicius
          <span className="text-primary"> Soares</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { label: "Home", to: "/home" },
            { label: "Serviços", to: "/servicos" },
            { label: "Portfólio", to: "/portfolio" },
            { label: "Blog", to: "/blog" },
          ].map(item => {
            const active = isActiveGroup(item.to)

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`relative transition ${
                  active
                    ? "text-text"
                    : "text-textSecondary hover:text-text"
                }`}
              >
                {item.label}

                {/* underline ativa */}
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded-full"
                  />
                )}
              </NavLink>
            )
          })}

          <Link
            to="/contato"
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-black hover:scale-[1.03] transition"
          >
            Orçamento
          </Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY COM BLUR */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            {/* MENU */}
            <motion.aside
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-x-4 top-6 z-50 rounded-3xl bg-background border border-border shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <span className="font-bold">
                  Vinicius<span className="text-primary"> Soares</span>
                </span>
                <button onClick={() => setOpen(false)} className="text-xl">
                  ✕
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
                {[
                  { label: "Home", to: "/home" },
                  { label: "Serviços", to: "/servicos" },
                  { label: "Portfólio", to: "/portfolio" },
                  { label: "Blog", to: "/blog" },
                ].map(item => {
                  const active = isActiveGroup(item.to)

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`font-medium transition ${
                        active
                          ? "text-primary"
                          : "text-textSecondary hover:text-text"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-xl bg-primary py-3 text-center font-semibold text-black"
                >
                  Solicitar orçamento
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
