import { useParams, Link } from "react-router-dom"
import posts from "../blog/posts"
import { marked } from "marked"
import { motion } from "framer-motion"

export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <p className="text-center py-20">Post não encontrado</p>

  return (
    <main className="max-w-3xl mx-auto px-4 py-20">

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          {post.title}
        </h1>
        <p className="text-textSecondary text-sm md:text-base">
          {post.date} • {post.category || "Sem categoria"}
        </p>
      </motion.div>

      {/* ================= CONTEÚDO ================= */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="
          prose prose-sm sm:prose md:prose-lg lg:prose-xl
          max-w-none text-text leading-relaxed
          prose-img:rounded-xl prose-img:shadow-lg prose-img:border
          prose-img:border-border prose-img:my-6
          prose-blockquote:border-l-4 prose-blockquote:border-primary
          prose-blockquote:bg-primary/10 prose-blockquote:px-4 prose-blockquote:py-2
          prose-pre:bg-background/80 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto
          prose-a:text-primary prose-a:underline prose-a:hover:text-primary/80
        "
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />

      {/* ================= CTA FINAL ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 p-8 rounded-3xl bg-surface/80 backdrop-blur border border-border text-center"
      >
        <p className="text-lg mb-4">
          Gostou deste conteúdo? Vamos conversar sobre seu projeto!
        </p>
        <a
          href="https://wa.me/5532999823915"
          target="_blank"
          className="inline-block px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
        >
          Falar comigo no WhatsApp
        </a>
        <div className="mt-6">
          <Link
            to="/blog"
            className="text-sm text-primary underline hover:text-primary/80"
          >
            ← Voltar para o blog
          </Link>
        </div>
      </motion.div>

    </main>
  )
}
