import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-muted py-6 h-full border-t w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">Elegance</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Criando experiências de moda urbana e elegância.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-medium">Links Rápidos</h4>
          <Link href="/" className="text-sm hover:underline" prefetch={false}>
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Sobre Nós
          </Link>
          <Link
            href="/produtos"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Contato
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-medium">Recursos</h4>
          <Link
            href="/blog"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="/documentacao"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Documentação
          </Link>
          <Link
            href="/suporte"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Suporte
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-medium">Legal</h4>
          <Link
            href="/politica-de-privacidade"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos-de-servico"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Termos de Serviço
          </Link>
          <Link
            href="/politica-de-cookies"
            className="text-sm hover:underline"
            prefetch={false}
          >
            Política de Cookies
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Elegance. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
