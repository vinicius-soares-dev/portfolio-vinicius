import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Play,
} from "lucide-react";

export default function RealEstateSection() {
  // Imagem de alta resolução de uma mansão moderna
  const bgImage =
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop";

  return (
    <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LADO ESQUERDO: Copy Persuasiva */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/50 border border-border mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-textSecondary">
                Imobiliárias & Construtoras
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-textPrimary tracking-tight leading-[1.1] mb-6">
              Experiências <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 font-serif italic font-light">
                Premium
              </span>{" "}
              <br />
              para imóveis únicos.
            </h2>

            <p className="text-lg text-textSecondary leading-relaxed mb-10 font-light">
              Esqueça os templates engessados. Desenvolvo plataformas
              imobiliárias imersivas, com busca inteligente, filtros
              ultrarrápidos e integração direta com o seu CRM. O primeiro
              contato do seu cliente com o imóvel precisa ser espetacular.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {[
                "Integração CRM (Vista, Universal)",
                "Filtros avançados e mapas",
                "Tour Virtual 360º Integrado",
                "Lead direto no WhatsApp",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-amber-500" />
                  <span className="text-textPrimary font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20alto%20padrão%20para%20o%20setor%20imobiliário."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-surface hover:bg-surface/80 border border-border hover:border-amber-500/50 px-6 py-3.5 rounded-xl text-textPrimary font-bold transition-all shadow-sm"
            >
              Solicitar projeto imobiliário
              <ArrowUpRight
                size={18}
                className="text-amber-500 group-hover:rotate-12 transition-transform"
              />
            </a>
          </motion.div>

          {/* LADO DIREITO: Mockup Realista de Site Imobiliário */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[55%] relative perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: -2, rotateX: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl shadow-black/60 group"
            >
              {/* Barra do Navegador */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-surface/90 backdrop-blur-md border-b border-white/5 flex items-center px-4 z-50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="mx-auto px-4 py-1 rounded-md bg-white/5 border border-white/5 flex items-center gap-2 text-[10px] text-white/40 font-mono">
                  <span>lumiere-imoveis.com.br</span>
                </div>
              </div>

              {/* IMAGEM DE FUNDO COM PARALLAX SUTIL */}
              <div className="absolute inset-0 top-10 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80"
                  style={{ backgroundImage: `url(${bgImage})` }}
                />
                {/* Overlay de gradiente para garantir leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
              </div>

              {/* CONTEÚDO DO SITE SIMULADO */}
              <div className="absolute inset-0 top-10 flex flex-col justify-between p-6 z-20">
                {/* Navbar do Mockup */}
                <header className="flex justify-between items-center text-white">
                  <div className="font-serif text-lg tracking-widest uppercase font-bold flex items-center gap-2">
                    <Building2 size={18} className="text-amber-400" />
                    Lumière
                  </div>
                  <nav className="hidden sm:flex gap-6 text-xs font-medium tracking-wide text-white/80">
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Imóveis
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Lançamentos
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Contato
                    </span>
                  </nav>
                </header>

                {/* Texto Hero do Mockup */}
                <div className="text-center sm:text-left mt-auto mb-8 sm:mb-12">
                  <h3 className="text-3xl sm:text-5xl text-white font-serif font-light tracking-wide drop-shadow-lg mb-3">
                    Encontre sua <br className="hidden sm:block" />
                    <span className="font-bold">nova realidade.</span>
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs">
                    <Play size={12} className="text-amber-400 fill-amber-400" />
                    Ver vídeo da propriedade
                  </div>
                </div>

                {/* Barra de Busca Glassmorphism */}
                <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-2 sm:p-3 flex flex-col sm:flex-row items-center gap-2 shadow-2xl">
                  <div className="flex-1 w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-text">
                    <MapPin size={16} className="text-amber-400" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/60 uppercase font-bold tracking-wider">
                        Localização
                      </span>
                      <span className="text-sm text-white truncate">
                        Jurerê Internacional
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:flex w-px h-8 bg-white/10" />

                  <div className="flex-1 w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-black/20 hover:bg-black/30 transition-colors cursor-pointer">
                    <Building2 size={16} className="text-amber-400" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/60 uppercase font-bold tracking-wider">
                        Tipo
                      </span>
                      <span className="text-sm text-white">Mansão / Casa</span>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto mt-2 sm:mt-0 bg-amber-500 hover:bg-amber-400 text-black p-3 sm:px-6 rounded-lg flex items-center justify-center gap-2 font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                    <Search size={18} />
                    <span className="sm:hidden">Buscar</span>
                  </button>

                  <button className="hidden sm:flex items-center justify-center p-3 text-white hover:bg-white/10 rounded-lg transition-colors">
                    <SlidersHorizontal size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Elemento flutuante fora do mockup para dar profundidade */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 sm:-right-8 z-30 flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-xl shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                <ArrowUpRight size={20} className="text-amber-500" />
              </div>
              <div>
                <div className="text-xs text-textSecondary font-bold uppercase tracking-wider mb-0.5">
                  Conversão
                </div>
                <div className="text-lg font-black text-white leading-none">
                  +300% leads
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
