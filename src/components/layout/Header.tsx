import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../../../public/favicon.svg";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portfólio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="
sticky top-0 z-50
border-b border-border/50
bg-background/70
backdrop-blur-xl
"
    >
      {/* Glow superior */}

      <div
        className="
absolute
bottom-0
left-0
right-0
h-px
bg-gradient-to-r
from-transparent
via-primary/50
to-transparent
"
      />

      <div
        className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-5
"
      >
        {/* LOGO */}

        <Link to="/" className="flex items-center gap-3">
          <img
            src="/favicon.svg"
            alt="Vinicius Soares Dev"
            className="
      h-11
      w-11
      rounded-xl
      shadow-lg
      shadow-primary/20
    "
          />

          <div>
            <strong
              className="
block
text-lg
leading-none
font-black
text-textPrimary
"
            >
              Vinicius
              <span className="text-primary"> Soares</span>
            </strong>

            <span
              className="
text-xs
text-textSecondary
"
            >
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* DESKTOP */}

        <nav
          className="
hidden
items-center
gap-8
md:flex
"
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={`
relative
text-sm
font-medium
transition
${
  isActive(item.to)
    ? "text-textPrimary"
    : "text-textSecondary hover:text-textPrimary"
}
`}
            >
              {item.label}

              {isActive(item.to) && (
                <motion.span
                  layoutId="active"
                  className="
absolute
-left-0
-bottom-2
h-[2px]
w-full
rounded-full
bg-primary
"
                />
              )}
            </NavLink>
          ))}

          <a
            href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="
group
flex
items-center
gap-2
rounded-xl
bg-primary
px-5
py-3
font-semibold
text-white
transition
hover:scale-[1.03]
"
          >
            Orçamento
            <ArrowRight
              size={16}
              className="
transition
group-hover:translate-x-1
"
            />
          </a>
        </nav>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(true)}
          className="
rounded-xl
border
border-border
p-2.5
text-textPrimary
md:hidden
"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE */}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
fixed
inset-0
z-40
bg-black/60
backdrop-blur-md
"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
fixed
left-4
right-4
top-5
z-50
rounded-3xl
border
border-border
bg-background
shadow-2xl
overflow-hidden
"
            >
              <div
                className="
flex
items-center
justify-between
border-b
border-border
px-6
h-16
"
              >
                <strong className="font-black">
                  Vinicius
                  <span className="text-primary">Soares</span>
                </strong>

                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <nav
                className="
flex
flex-col
gap-6
px-6
py-8
"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="
text-lg
font-semibold
text-textSecondary
hover:text-primary
transition
"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="https://wa.me/5532999823915?text=Olá%2C%20Vinicius%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  className="
mt-4
rounded-xl
bg-primary
py-4
text-center
font-bold
text-white
"
                >
                  Solicitar orçamento
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
