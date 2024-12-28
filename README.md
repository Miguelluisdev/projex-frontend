<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://github.com/Miguelluisdev/projex-frontend/blob/master/public/image.png" alt="Projex Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next.js&color=black" alt="Next.js" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?logo=apollographql&logoColor=white&style=for-the-badge" alt="apollographql logo"  />
    <img src="https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white&style=for-the-badge" alt="graphql logo"  />
  </div>
<br/><br/>
 
  <h1 align="center">Frontend - Projex</h1>

   <div align="center">
     Uma plataforma moderna para gerenciamento de projetos.
    </div>
</div>

## 📋 **Sumário**

1. 🚀 [Introdução](#introducao)
2. ⚙️ [Tecnologias Utilizadas](#tecnologias)
3. 🔋 [Funcionalidades](#funcionalidades)
4. 💻 [Como Inicializar o Projeto](#como-inicializar)
5. 📄 [Estrutura do Projeto](#estrutura)
6. 🌟 [Funcionalidades Futuras](#futuras)
7. 🤝 [Contribuição](#contribuicao)

---

## 🚀 **Introdução** <a name="introducao"></a>

O **Projex** é uma plataforma robusta de gerenciamento de projetos que facilita a organização, acompanhamento de tarefas e colaboração entre equipes. Este repositório contém o **Frontend** da aplicação, desenvolvido com tecnologias modernas para garantir performance, escalabilidade e uma excelente experiência do usuário.

<a href="https://github.com/Miguelluisdev/projex-frontend" target="_blank">
  <img src="https://img.shields.io/badge/DÊ_UMA_ESTRELA_%E2%AD%90-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
</a>

---

## ⚙️ **Tecnologias Utilizadas** <a name="tecnologias"></a>

- **Next.js** - Framework React para aplicações modernas.
- **React.js** - Biblioteca para construção de interfaces dinâmicas.
- **TypeScript** - Tipagem estática para maior confiabilidade no desenvolvimento.
- **TailwindCSS** - Estilização rápida e eficiente.
- **GraphQL** - Comunicação com o backend eficiente e tipada.

---

## 🔋 **Funcionalidades Futuras** <a name="funcionalidades"></a>

- **Autenticação de Usuários**: Registro, login, recuperação e redefinição de senha.
- **Gerenciamento de Projetos**: Criação, edição e exclusão de projetos.
- **Quadros de Tarefas**: Visualização clara do progresso das tarefas.
- **Perfil de Usuário**: Gerenciamento de informações pessoais.
- **Integração com GraphQL**: Requisições otimizadas e tipadas.

---

## 💻 **Como Inicializar o Projeto** <a name="como-inicializar"></a>

Siga os passos abaixo para rodar o projeto localmente:

**1. Clone o repositório:**
```bash
  git clone https://github.com/seu-usuario/projex-frontend.git
  cd projex-frontend
```

**2. Instale as dependências:**
```bash
  npm install
  # ou
  yarn install
```

**3. Configure as variáveis de ambiente:**
Crie um arquivo `.env.local` com as seguintes variáveis:
```
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
NEXT_PUBLIC_API_KEY=SUA_API_KEY
```

**4. Inicie o servidor de desenvolvimento:**
```bash
  npm run dev
  # ou
  yarn dev
```

**5. Acesse no navegador:**
```
  http://localhost:3000
```

---

## 📄 **Estrutura do Projeto** <a name="estrutura"></a>
```
/src
├──  app/        # Paginas e rotas do site
├── components/  # Componentes do Shadcn
├── shared/      # componentes que são utilizados varias vezes
├── hooks/       # Hooks personalizados
├── subdomain/   # componentes que são utilizados em apenas uma vez
```

---

## 🌟 **Funcionalidades Futuras** <a name="futuras"></a>

- **Dark Mode**: Suporte para modo escuro.
- **Notificações em Tempo Real**: Alertas sobre atividades recentes.
- **Dashboard Personalizado**: Widgets customizáveis para usuários.

---

## 🤝 **Contribuição** <a name="contribuicao"></a>

Contribuições são sempre bem-vindas! Siga os passos:

1. Faça um fork do projeto.
2. Crie uma nova branch:
```bash
git checkout -b feature/sua-feature
```
3. Faça suas alterações e commit:
```bash
git commit -m "Adicionei nova funcionalidade"
```
4. Envie suas alterações:
```bash
git push origin feature/sua-feature
```
5. Abra um Pull Request.
---

<div align="center">
  <strong>Projex - Simplificando o gerenciamento de projetos!</strong>
</div>
