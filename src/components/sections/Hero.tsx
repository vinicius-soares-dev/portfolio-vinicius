import {
  Code,
  Rocket,
  ShieldCheck,
  Smartphone
} from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-labelledby="hero-title"
    >
      {/* Glow decorativo */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-28">

        <div className="max-w-4xl">

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-textPrimary mb-6"
          >
            Crio sites e sistemas que{" "}
            <span className="text-primary">
              geram clientes e escalam negócios
            </span>{" "}
            no digital
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-textSecondary mb-10">
            Desenvolvimento web, marketing digital, copy e tráfego pago
            integrados em soluções modernas, rápidas e pensadas para conversão.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://wa.me/5532999823915"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-primaryHover transition"
            >
              <Rocket size={18} />
              Tirar projeto do papel
            </a>

            <button
              onClick={() => {
                const section = document.getElementById("services");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center gap-2 border border-border text-textPrimary px-8 py-4 rounded-md font-medium hover:bg-surface transition"
            >
              <Code size={18} />
              Ver como posso ajudar
  </button>
          </div>

          {/* Provas rápidas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

            <div className="flex items-start gap-3">
              <ShieldCheck className="text-primary" size={22} />
              <div>
                <strong className="block text-textPrimary">
                  6+ anos
                </strong>
                <span className="text-sm text-textSecondary">
                  Experiência
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Code className="text-primary" size={22} />
              <div>
                <strong className="block text-textPrimary">
                  VG Tech
                </strong>
                <span className="text-sm text-textSecondary">
                  Software House
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Rocket className="text-primary" size={22} />
              <div>
                <strong className="block text-textPrimary">
                  SEO & Performance
                </strong>
                <span className="text-sm text-textSecondary">
                  Resultado real
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Smartphone className="text-primary" size={22} />
              <div>
                <strong className="block text-textPrimary">
                  Mobile first
                </strong>
                <span className="text-sm text-textSecondary">
                  Responsivo
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
