import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  CreditCard,
  Zap,
  Smartphone,
  Star,
  Check,
  TrendingUp,
  ArrowUpRight,
  Search,
  Heart,
  Home,
  User,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";

const productVariants = [
  {
    id: "obsidian",
    name: "Obsidian Black",
    hex: "bg-[#18181b]",
    accent: "text-violet-400",
    glow: "bg-violet-600/30",
    badgeBg: "bg-violet-500/20 border-violet-500/30 text-violet-300",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    price: 1899,
  },
  {
    id: "silver",
    name: "Silver Platinum",
    hex: "bg-slate-300",
    accent: "text-blue-400",
    glow: "bg-blue-500/30",
    badgeBg: "bg-blue-500/20 border-blue-500/30 text-blue-300",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop",
    price: 1999,
  },
  {
    id: "rose",
    name: "Copper Bronze",
    hex: "bg-amber-700",
    accent: "text-amber-400",
    glow: "bg-amber-600/30",
    badgeBg: "bg-amber-500/20 border-amber-500/30 text-amber-300",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop",
    price: 1849,
  },
];

const galleryThumbnails = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=300&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=300&auto=format&fit=crop",
];

export default function EcommerceSection() {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);
  const [activeImage, setActiveImage] = useState(productVariants[0].image);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("home");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + quantity);
    showToast(`+${quantity} na Sacola`);
  };

  const handleSelectVariant = (variant: (typeof productVariants)[0]) => {
    setSelectedVariant(variant);
    setActiveImage(variant.image);
  };

  return (
    <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
      {/* Glow de Fundo Dinâmico */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/2 -left-[10%] w-[50%] h-[60%] rounded-full blur-[160px] pointer-events-none transition-colors duration-1000 ${selectedVariant.glow}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LADO ESQUERDO: Mockup Mobile Ultra-Realista */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[50%] relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] flex justify-center perspective-1000">
              {/* Floating Widget 1: Status Venda Pix */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 sm:-right-12 top-16 z-40 p-3.5 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-xl shadow-2xl flex items-center gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                  <Check size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-textSecondary uppercase tracking-widest font-bold">
                    Checkout Instantâneo
                  </div>
                  <div className="text-sm font-black text-white flex items-center gap-1.5">
                    Pix Aprovado{" "}
                    <span className="text-emerald-400 text-xs">0.4s</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Widget 2: Métricas de Vendas */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-6 sm:-left-12 bottom-20 z-40 p-3.5 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-xl shadow-2xl flex items-center gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30 text-violet-400">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-textSecondary uppercase tracking-widest font-bold">
                    Taxa de Conversão
                  </div>
                  <div className="text-sm font-black text-white">
                    +3.8% vs Média
                  </div>
                </div>
              </motion.div>

              {/* FRAME DO SMARTPHONE */}
              <motion.div
                whileHover={{ rotateY: 2, rotateX: 2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-[320px] sm:w-[340px] h-[670px] rounded-[3.2rem] border-[9px] border-[#181820] bg-[#09090d] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group border-t-[#272736]"
              >
                {/* TELA INTERNA DO APP */}
                <div className="absolute inset-0 flex flex-col justify-between text-white selection:bg-none">
                  {/* TOP BAR / DYNAMIC ISLAND */}
                  <div className="pt-2 px-6 flex flex-col gap-2 z-50 bg-gradient-to-b from-black/90 via-black/40 to-transparent">
                    <div className="flex justify-between items-center text-[11px] font-semibold text-white/80 px-1">
                      <span>09:41</span>
                      {/* Dynamic Island Notch */}
                      <div className="w-24 h-5 bg-black rounded-full border border-white/10 flex items-center justify-between px-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span>5G</span>
                        <div className="w-5 h-2.5 rounded-sm border border-white/60 p-0.5 flex items-center">
                          <div className="h-full w-3 bg-white rounded-xs" />
                        </div>
                      </div>
                    </div>

                    {/* App Header Search & Cart */}
                    <div className="flex items-center justify-between gap-2 pt-1 pb-2">
                      <div className="flex-1 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2 backdrop-blur-md">
                        <Search size={13} className="text-white/50" />
                        <span className="text-[11px] text-white/60 truncate">
                          Buscar headphones pro...
                        </span>
                      </div>

                      <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="p-2 rounded-full bg-white/5 border border-white/10 active:scale-95 transition-transform"
                      >
                        <Heart
                          size={14}
                          className={
                            isWishlisted
                              ? "fill-rose-500 text-rose-500"
                              : "text-white/80"
                          }
                        />
                      </button>

                      <div className="relative p-2 rounded-full bg-white/5 border border-white/10">
                        {cartCount > 0 && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-violet-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center border-2 border-black"
                          >
                            {cartCount}
                          </motion.span>
                        )}
                        <ShoppingBag size={14} className="text-white/80" />
                      </div>
                    </div>
                  </div>

                  {/* TOAST DENTRO DO APP */}
                  <AnimatePresence>
                    {toastMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-20 left-4 right-4 z-50 bg-emerald-500 text-black font-bold text-xs py-2 px-4 rounded-xl shadow-xl flex items-center justify-between"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles size={14} /> {toastMessage}
                        </span>
                        <span className="text-[10px] uppercase font-black bg-black/10 px-1.5 py-0.5 rounded">
                          OK
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ÁREA PRINCIPAL DO PRODUTO (SCROLL SIMULADO) */}
                  <div className="flex-1 overflow-y-auto px-5 pt-2 pb-4 space-y-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {/* Badge e Titulo do Produto */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${selectedVariant.badgeBg}`}
                        >
                          Edição Limitada
                        </span>
                        <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                          <Truck size={12} /> Frete Grátis
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                        Aura Studio Sound Pro
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={11}
                              className="fill-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold text-white/90">
                          4.9
                        </span>
                        <span className="text-[10px] text-white/40">
                          (1.284 avaliações)
                        </span>
                      </div>
                    </div>

                    {/* IMAGEM HERO COM SELETOR DE THUMBNAILS */}
                    <div className="relative w-full aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-2 group/img">
                      <motion.img
                        key={activeImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        src={activeImage}
                        alt="Product View"
                        className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
                      />

                      {/* Thumbnails flutuantes para alternar vista */}
                      <div className="absolute bottom-2 left-2 right-2 z-20 flex justify-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                        {galleryThumbnails.map((thumb, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(thumb)}
                            className={`w-9 h-9 rounded-lg overflow-hidden border transition-all ${
                              activeImage === thumb
                                ? "border-violet-500 scale-105"
                                : "border-white/10 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={thumb}
                              className="w-full h-full object-cover"
                              alt="thumb"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* SELEÇÃO DE COR & VARIANTE */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-semibold text-white/70">
                          Acabamento:
                        </span>
                        <span className="text-[11px] font-bold text-white">
                          {selectedVariant.name}
                        </span>
                      </div>
                      <div className="flex gap-2.5">
                        {productVariants.map((variant) => (
                          <button
                            key={variant.id}
                            onClick={() => handleSelectVariant(variant)}
                            className={`flex-1 py-1.5 px-2 rounded-xl border flex items-center justify-center gap-2 transition-all ${
                              selectedVariant.id === variant.id
                                ? "border-violet-500 bg-white/10 font-bold"
                                : "border-white/10 bg-white/5 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <div
                              className={`w-3 h-3 rounded-full ${variant.hex}`}
                            />
                            <span className="text-[10px]">{variant.id}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* PREÇO E SELETOR DE QUANTIDADE */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-white/40 block">
                          Preço à vista no Pix
                        </span>
                        <div className="text-xl font-black text-white flex items-baseline gap-1">
                          R${" "}
                          {(selectedVariant.price * quantity).toLocaleString(
                            "pt-BR",
                          )}
                          <span className="text-[10px] text-emerald-400 font-normal">
                            (-10%)
                          </span>
                        </div>
                      </div>

                      {/* Botões - Quantidade + */}
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white active:scale-90"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white active:scale-90"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* BOTÕES DE COMPRA E PIX */}
                    <div className="space-y-2 pt-1">
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={handleAddToCart}
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30"
                      >
                        <ShoppingBag size={14} /> Adicionar à Sacola
                      </motion.button>
                    </div>
                  </div>

                  {/* BOTTOM NAVBAR DO APP */}
                  <div className="border-t border-white/10 bg-black/80 backdrop-blur-lg px-6 py-2.5 flex justify-between items-center z-50">
                    {[
                      { id: "home", icon: Home, label: "Início" },
                      { id: "search", icon: Search, label: "Buscar" },
                      { id: "bag", icon: ShoppingBag, label: "Sacola" },
                      { id: "profile", icon: User, label: "Perfil" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center gap-0.5 transition-colors ${
                          activeTab === tab.id
                            ? "text-violet-400"
                            : "text-white/40 hover:text-white"
                        }`}
                      >
                        <tab.icon size={16} />
                        <span className="text-[9px] font-medium">
                          {tab.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* LADO DIREITO: Copy Persuasiva E-commerce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%] flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/50 border border-border mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-textSecondary">
                Lojas Virtuais & E-Commerce
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-textPrimary tracking-tight leading-[1.1] mb-6">
              Plataformas que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-300 font-serif italic font-light">
                multiplicam vendas.
              </span>
            </h2>

            <p className="text-lg text-textSecondary leading-relaxed mb-10 font-light">
              No e-commerce, lentidão e fricção custam caro. Desenvolvo
              storefronts ultrarrápidos, com arquitetura{" "}
              <strong className="text-textPrimary font-medium">
                mobile-first
              </strong>
              , checkout em 1-clique e design de alto padrão que transforma
              visitantes casuais em clientes fiéis.
            </p>

            {/* Grid de Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {[
                {
                  icon: Smartphone,
                  title: "Nativo Mobile",
                  desc: "Navegação por gestos fluida",
                },
                {
                  icon: Zap,
                  title: "Performance 100/100",
                  desc: "Carregamento em milissegundos",
                },
                {
                  icon: CreditCard,
                  title: "Pix & Checkout Ágil",
                  desc: "Conversão sem formulários longos",
                },
                {
                  icon: ShieldCheck,
                  title: "Segurança de Dados",
                  desc: "Conformidade LGPD & Criptografia",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 p-4 rounded-2xl bg-surface/30 border border-border/50 hover:bg-surface/60 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon size={16} className="text-violet-400" />
                    <strong className="text-textPrimary text-sm">
                      {item.title}
                    </strong>
                  </div>
                  <span className="text-xs text-textSecondary leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-3 bg-surface hover:bg-surface/80 border border-border hover:border-violet-500/50 px-6 py-3.5 rounded-xl text-textPrimary font-bold transition-all shadow-sm">
              Criar minha loja virtual
              <ArrowUpRight
                size={18}
                className="text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
