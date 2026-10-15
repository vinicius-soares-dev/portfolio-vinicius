import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portfólio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Controle de scroll do body no mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Detector de scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Variantes de animação para o menu mobile em cascata
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/50 py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      {/* Glow superior opcional quando scrollado */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
      />

      <div className="mx-auto flex items-center justify-between px-6 max-w-7xl">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md group-hover:bg-primary/40 transition-all duration-300" />
            <img
              src="/favicon.svg"
              alt="Vinicius Soares Dev"
              className="relative h-10 w-10 rounded-xl shadow-lg border border-white/10"
            />
          </div>
          <div>
            <strong className="block text-lg leading-none font-black text-textPrimary tracking-tight">
              Vinicius<span className="text-primary">.</span>Soares
            </strong>
            <span className="text-[11px] font-medium text-textSecondary uppercase tracking-wider">
              Full Stack
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-md">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors z-10 ${
                isActive(item.to)
                  ? "text-white"
                  : "text-textSecondary hover:text-textPrimary"
              }`}
            >
              {item.label}
              {isActive(item.to) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary shadow-md shadow-primary/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            <span>Orçamento</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden relative z-50 rounded-full bg-background/50 backdrop-blur-md border border-border/50 p-2.5 text-textPrimary active:scale-95 transition-transform"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-4 right-4 top-4 z-50 rounded-[2rem] border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-border/30 px-6 h-20">
                <strong className="font-black text-xl tracking-tight">
                  Vinicius<span className="text-primary">.</span>Soares
                </strong>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full bg-border/20 text-textPrimary active:scale-95 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-2 px-6 py-8">
                {menuItems.map((item) => (
                  <motion.div variants={itemVariants} key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-4 text-lg font-semibold transition-colors ${
                        isActive(item.to)
                          ? "bg-primary/10 text-primary"
                          : "text-textSecondary hover:bg-border/20 hover:text-textPrimary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  variants={itemVariants}
                  href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-center font-bold text-white shadow-lg shadow-primary/25 active:scale-[0.98] transition-all"
                >
                  Solicitar orçamento
                  <ArrowRight size={18} />
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
