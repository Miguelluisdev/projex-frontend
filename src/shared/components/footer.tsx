import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

const description =
  "Projex é uma plataforma open-source para gerenciamento de projetos, permitindo organização, colaboração e produtividade em equipe.";

export function Footer() {
  return (
    <footer className="bg-background" aria-labelledby="footer-heading">
      <div className="mx-auto px-4 py-16 sx:mx-3 sx:px-3 sm:px-6 lg:px-8">
        <h2 id="footer-heading" className="sr-only">
          Rodapé
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <section aria-labelledby="about-heading">
            <h3 id="about-heading" className="sr-only">
              Sobre o Projex
            </h3>
            <div className="flex items-center">
              <Link href="/" aria-label="Voltar à página inicial">
                <Image
                  src="/project-management.png"
                  alt="Logo do Projex"
                  width={40}
                  height={40}
                />
              </Link>
              <span className="ml-2 text-xl font-bold">Projex</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {description}
            </p>
            <div className="mt-8 flex space-x-6 text-muted-foreground">
              <Link
                className="hover:text-primary"
                href="#"
                aria-label="Acessar o repositório do Projex no Github"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </section>
          <nav
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2"
            aria-labelledby="navigation-heading"
          >
            <h3 id="navigation-heading" className="sr-only">
              Navegação
            </h3>
            <div>
              <p className="font-medium">Navegação</p>
              <ul className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    className="hover:text-primary"
                    href="/sign-up"
                    aria-label="Acessar página de cadastro"
                  >
                    Cadastro
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary"
                    href="#"
                    aria-label="Acessar informações sobre o Projex"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary"
                    href="#"
                    aria-label="Ver os projetos"
                  >
                    Projetos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p
            className="text-xs text-muted-foreground"
            aria-label="Informações de direitos autorais e licença"
          >
            &copy; 2024 Projex. Licenciado sob a{" "}
            <Link
              className="hover:text-primary"
              href="https://github.com/FernaandoJr/Projex/blob/main/LICENSE"
            >
              Licença MIT
            </Link>
            . Sinta-se à vontade para usar e contribuir!
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <p
              className="cursor-pointer text-xs text-muted-foreground hover:text-primary"
              aria-label="Mensagem de agradecimento"
            >
              Feito com ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
