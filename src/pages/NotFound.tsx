import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        Página não encontrada
      </p>
      <Link
        to="/"
        className="text-blue-600 font-medium"
      >
        Voltar para a Home
      </Link>
    </main>
  )
}
