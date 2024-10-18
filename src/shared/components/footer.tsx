import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-6 h-full border-t w-full ">
      <div className="container max-w-7xl gap-8">
        <div className="flex flex-col items-center justify-center  gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">Projex</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Elevendo a eficiencia dos projetos
          </p>
          <p className="text-xs text-muted-foreground">
          &copy; 2024 Projex. Todos os direitos reservados.
        </p>
        </div>
      </div>
    </footer>
  )
}
