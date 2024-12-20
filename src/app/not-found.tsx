import Link from "next/link"

export default function NotFound() {
  return (
    <section className="w-dvw h-dvh flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-5">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-black mb-4">404</h2>
        <h3 className="text-2xl font-semibold mb-2">Página Não Encontrada</h3>
        <p className="text-gray-600 mb-6">
          Não conseguimos encontrar o recurso solicitado.
        </p>
        <Link
          href="/dashboard"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </section>
  )
}
