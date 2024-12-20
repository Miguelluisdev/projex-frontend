import CustomImage from "@/shared/components/custom-image"
import { Register } from "@/subdomains/auth/components/register"

const SignUp = () => {
  return (
    <main className="flex h-screen w-full">
      <section className="flex flex-grow items-center justify-center px-5 md:px-0">
        <Register />
      </section>
      <CustomImage
        src="/cadastro.png"
        width={900}
        height={1080}
        quality={100}
        className="h-screen hidden lg:block object-cover"
        alt="Imagem futura de projetos"
      />
    </main>
  )
}

export default SignUp
