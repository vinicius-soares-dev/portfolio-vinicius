import { GraduationCap, Cloud, Code2, BarChart3 } from "lucide-react"

export default function AboutMe() {
  return (
    <section
      className="relative overflow-hidden bg-background"
      aria-labelledby="about-title"
    >
      {/* Glow decorativo */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-28">

        <div className="grid gap-16 md:grid-cols-2 items-center">

          {/* ================= FOTO ================= */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow atrás da imagem */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110" />

              <img
                src="https://xinjbrptsfbzvdtczehu.supabase.co/storage/v1/object/public/project-images/avatars/user-23/avatar.webp"
                alt="Vinicius Soares - Desenvolvedor Full Stack"
                className="
                  relative z-10
                  w-64 h-64 md:w-80 md:h-80
                  object-cover
                  rounded-full
                  border-4 border-border
                  shadow-xl
                "
              />
            </div>
          </div>

          {/* ================= TEXTO ================= */}
          <div>

            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-textPrimary mb-6"
            >
              Quem está por trás dos projetos
            </h2>

            <div className="space-y-5 text-textSecondary leading-relaxed">

              <p>
                Sou <strong className="text-textPrimary">Vinicius Soares</strong>,
                desenvolvedor Full Stack e fundador da{" "}
                <strong className="text-textPrimary">VG Tech Solutions</strong>.
                Minha trajetória na tecnologia começou com programação,
                mas evoluiu para algo maior: criar soluções digitais que
                realmente geram resultado.
              </p>

              <p>
                Trabalho unindo <strong>desenvolvimento web</strong>,
                <strong> tráfego pago</strong>, <strong>copy</strong> e
                <strong> performance</strong>. Não entrego apenas código,
                entrego estratégia, clareza e escala.
              </p>

              <p>
                Cada projeto é pensado para conversão, experiência do usuário
                e crescimento sustentável — seja um site, landing page,
                e-commerce ou sistema web sob medida.
              </p>

            </div>

          </div>

        </div>

        {/* ================= FORMAÇÕES ================= */}
        <div className="mt-24">

          <h3 className="text-2xl font-bold text-textPrimary mb-10">
            Formação & Especializações
          </h3>

          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent
            "
          >

            {/* Card */}
            <div className="min-w-[280px] bg-surface border border-border rounded-2xl p-6">
              <GraduationCap className="text-primary mb-4" size={28} />
              <h4 className="font-semibold text-textPrimary mb-2">
                Ciência da Computação
              </h4>
              <p className="text-sm text-textSecondary">
                Bacharelado com foco em lógica, arquitetura de software
                e fundamentos sólidos da programação.
              </p>
            </div>

            <div className="min-w-[280px] bg-surface border border-border rounded-2xl p-6">
              <Code2 className="text-primary mb-4" size={28} />
              <h4 className="font-semibold text-textPrimary mb-2">
                Engenharia de Software
              </h4>
              <p className="text-sm text-textSecondary">
                Pós-graduação com foco em boas práticas,
                escalabilidade, arquitetura e qualidade de código.
              </p>
            </div>

            <div className="min-w-[280px] bg-surface border border-border rounded-2xl p-6">
              <Cloud className="text-primary mb-4" size={28} />
              <h4 className="font-semibold text-textPrimary mb-2">
                Google Cloud & AWS
              </h4>
              <p className="text-sm text-textSecondary">
                Infraestrutura em nuvem, deploy, performance
                e ambientes escaláveis.
              </p>
            </div>

            <div className="min-w-[280px] bg-surface border border-border rounded-2xl p-6">
              <BarChart3 className="text-primary mb-4" size={28} />
              <h4 className="font-semibold text-textPrimary mb-2">
                Tráfego Pago & Conversão
              </h4>
              <p className="text-sm text-textSecondary">
                Estratégias de Google Ads, funis,
                CRO e análise de métricas.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
