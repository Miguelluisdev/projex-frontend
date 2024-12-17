import { Leaf } from "lucide-react";

export function CardInfo() {
  return (
    <main className="bg-white text-black min-h-screen flex items-center justify-center p-4">
      <section className="max-w-6xl w-full space-y-8" aria-labelledby="projex-heading">
        <header className="text-center space-y-4">
          <h1
            id="projex-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Tudo o que você precisa para gerenciar seus projetos
          </h1>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto"
            aria-describedby="projex-description"
          >
            O Projex é uma plataforma completa para organizar tarefas, acompanhar o progresso e colaborar em equipe de maneira prática e eficiente.
          </p>
        </header>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Funcionalidades do Projex"
        >
          {[
            {
              title: "Integração com ferramentas",
              description:
                "Conecte suas ferramentas favoritas e tenha tudo em um só lugar para aumentar sua produtividade.",
            },
            {
              title: "Definição e acompanhamento de metas",
              description:
                "Estabeleça objetivos e acompanhe seu progresso, dividindo metas em tarefas alcançáveis.",
            },
            {
              title: "Segurança e privacidade de dados",
              description:
                "Com criptografia ponta a ponta, seus dados estão seguros e protegidos contra acessos não autorizados.",
            },
          ].map((feature, index) => (
            <article
              key={index}
              className="p-6 rounded-lg space-y-4"
              role="listitem"
              aria-labelledby={`feature-title-${index}`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <Leaf className="w-6 h-6" />
              </div>
              <h2
                id={`feature-title-${index}`}
                className="text-xl font-semibold"
              >
                {feature.title}
              </h2>
              <p className="text-sm">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
