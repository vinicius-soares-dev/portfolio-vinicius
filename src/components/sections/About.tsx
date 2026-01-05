export default function About() {
  return (
    <section
      className="bg-white"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* Texto */}
          <div>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-black mb-6"
            >
              Quem está por trás dos projetos
            </h2>

            <p className="text-gray-700 mb-4">
              Sou <strong>Vinicius Soares</strong>, desenvolvedor Full Stack
              com mais de <strong>6 anos de experiência</strong> e fundador
              da <strong>VG Tech Solutions</strong>.
            </p>

            <p className="text-gray-700 mb-4">
              Atuo criando sites, sistemas e soluções digitais sob medida,
              sempre com foco em desempenho, clareza e resultado real
              para o negócio — não apenas em entregar código.
            </p>

            <p className="text-gray-700 mb-8">
              Ao longo dos anos, trabalhei com projetos de diferentes
              segmentos, cuidando de toda a estratégia digital:
              programação, performance, SEO, copy e conversão.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Mais de 6 anos desenvolvendo para a web</li>
              <li>✔ Fundador da VG Tech Solutions</li>
              <li>✔ Projetos pensados para crescer junto com o negócio</li>
            </ul>
          </div>

          {/* Placeholder imagem */}
          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Sua foto profissional aqui
          </div>

        </div>

      </div>
    </section>
  )
}
