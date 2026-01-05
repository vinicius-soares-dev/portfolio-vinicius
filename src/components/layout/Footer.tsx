import { Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Glow sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">

        <div className="grid gap-14 md:grid-cols-4">

          {/* Marca */}
          <div>
            <h3 className="text-textPrimary text-xl font-bold mb-4">
              Vinicius Soares
            </h3>
            <p className="text-sm text-textSecondary mb-4">
              Desenvolvedor Full Stack • Fundador da VG Tech Solutions
            </p>
            <p className="text-sm text-textSecondary leading-relaxed">
              Criação de sites, sistemas e soluções digitais sob medida,
              com foco em performance, SEO, acessibilidade e conversão.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Footer navigation">
            <h4 className="text-textPrimary font-semibold mb-5">
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
                    className="text-textSecondary hover:text-textPrimary transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <h4 className="text-textPrimary font-semibold mb-5">
              Serviços
            </h4>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>Desenvolvimento de Sites</li>
              <li>Sistemas Web sob Medida</li>
              <li>Landing Pages de Alta Conversão</li>
              <li>SEO & Performance</li>
              <li>Tráfego Pago & Marketing Digital</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-textPrimary font-semibold mb-5">
              Contato
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://wa.me/5532999823915"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-textSecondary hover:text-textPrimary transition"
                  aria-label="Falar no WhatsApp"
                >
                  <MessageCircle size={16} className="text-primary" />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="mailto:vinicius.soares.dev@gmail.com"
                  className="inline-flex items-center gap-2 text-textSecondary hover:text-textPrimary transition"
                >
                  <Mail size={16} className="text-primary" />
                  vinicius.soares.dev@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/vinicius-gsoares/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-textSecondary hover:text-textPrimary transition"
                >
                  <Linkedin size={16} className="text-primary" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="border-t border-border mt-16 pt-8 text-sm text-center text-textSecondary">
          © 2026 Vinicius Soares — VG Tech Solutions. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  )
}
