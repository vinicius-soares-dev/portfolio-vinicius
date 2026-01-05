import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import posts from "../blog/posts"

export default function Blog() {
  return (
    <main className="bg-background">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conteúdo que gera clareza
          </h1>
          <p className="text-textSecondary text-lg">
            Artigos sobre tecnologia, produto, negócios e decisões
            que impactam projetos reais.
          </p>
        </motion.div>
      </section>

      {/* ================= LISTAGEM ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="
                group relative overflow-hidden rounded-3xl
                bg-surface/80 backdrop-blur
                border border-border
                shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
                transition-all
                flex flex-col
              "
            >
              {/* ===== TOPO VISUAL ===== */}
              <div className="relative h-28 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent">
                {/* grid decorativo */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>
              </div>

              {/* ===== CONTEÚDO ===== */}
              <div className="relative z-10 p-6 flex flex-col flex-1">

                <h2 className="text-xl font-semibold mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-textSecondary mb-6 leading-relaxed">
                  {post.description}
                </p>

                {/* CTA */}
                <a
                  href={`/blog/${post.slug}`}
                  className="
                    mt-auto inline-flex items-center gap-2
                    text-sm font-semibold text-primary
                    group-hover:gap-3 transition-all
                  "
                >
                  Ler artigo
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* linha animada */}
              <div className="
                absolute bottom-0 left-0 h-[2px] w-0
                bg-gradient-to-r from-primary to-transparent
                group-hover:w-full transition-all duration-500
              " />
            </motion.article>
          ))}

        </div>
      </section>

    </main>
  )
}
