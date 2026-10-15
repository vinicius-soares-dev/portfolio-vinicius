import {
  Linkedin,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/60 overflow-hidden">
      {/* Glow Sutil de Fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px]" />
        <div className="absolute -bottom-32 left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 xl:gap-16">
          {/* Coluna 1: Marca & Descrição (Ocupa 4 colunas em telas grandes) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-6">
                <Sparkles size={12} className="text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-textSecondary">
                  VG Tech Solutions
                </span>
              </div>

              <h3 className="text-textPrimary text-2xl font-black tracking-tight mb-2">
                Vinicius Soares
              </h3>

              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-5">
                Full Stack Engineer & CEO
              </p>

              <p className="text-sm sm:text-base text-textSecondary font-light leading-relaxed max-w-md">
                Desenvolvimento de sistemas web, landing pages de alta conversão
                e infraestrutura de alta performance para empresas que buscam
                liderança digital.
              </p>
            </div>

            {/* Redes Sociais / Ações Rápidas em Pílulas */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://wa.me/5532998175601?text=Olá%2C%20Vinicius%21%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface/80 border border-border/80 text-xs font-semibold text-textPrimary hover:border-primary/50 hover:bg-surface transition-all shadow-sm"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle size={14} className="text-primary" />
                WhatsApp
                <ArrowUpRight size={12} className="text-textSecondary" />
              </a>

              <a
                href="https://www.linkedin.com/in/vinicius-gsoares/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface/80 border border-border/80 text-xs font-semibold text-textPrimary hover:border-primary/50 hover:bg-surface transition-all shadow-sm"
              >
                <Linkedin size={14} className="text-primary" />
                LinkedIn
                <ArrowUpRight size={12} className="text-textSecondary" />
              </a>

              <a
                href="mailto:vinicius.soares.dev@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface/80 border border-border/80 text-xs font-semibold text-textPrimary hover:border-primary/50 hover:bg-surface transition-all shadow-sm"
              >
                <Mail size={14} className="text-primary" />
                E-mail
              </a>
            </div>
          </div>

          {/* Colunas de Navegação e Serviços (Ocupam 7 colunas divididas) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 lg:pt-0">
            {/* Navegação */}
            <div>
              <h4 className="text-textPrimary font-bold text-sm uppercase tracking-wider mb-5">
                Navegação
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["Home", "/"],
                  ["Serviços", "/servicos"],
                  ["Portfólio", "/portfolio"],
                  ["Blog", "/blog"],
                  ["Contato", "/contato"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-textSecondary hover:text-textPrimary font-light transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div className="col-span-2 sm:col-span-2">
              <h4 className="text-textPrimary font-bold text-sm uppercase tracking-wider mb-5">
                Soluções
              </h4>
              <ul className="space-y-3 text-sm text-textSecondary font-light">
                <li className="hover:text-textPrimary transition-colors">
                  Desenvolvimento de Sites & Portais
                </li>
                <li className="hover:text-textPrimary transition-colors">
                  Sistemas Web & SaaS sob Medida
                </li>
                <li className="hover:text-textPrimary transition-colors">
                  Landing Pages de Alta Conversão
                </li>
                <li className="hover:text-textPrimary transition-colors">
                  SEO Técnico & Performance
                </li>
                <li className="hover:text-textPrimary transition-colors">
                  Tráfego Pago & Marketing de Conversão
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Linha Inferior / Copyright */}
        <div className="border-t border-border/60 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textSecondary font-light">
          <p>
            © {currentYear} Vinicius Soares — VG Tech Solutions. Todos os
            direitos reservados.
          </p>

          <p className="flex items-center gap-1.5">
            Arquitetura e engenharia digital de alto padrão.
          </p>
        </div>
      </div>
    </footer>
  );
}
