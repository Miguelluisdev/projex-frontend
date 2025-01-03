import CustomImage from "@/shared/components/custom-image"
import { Forgot } from "@/subdomains/auth/components/forgot"

const ForgotPassword = () => {
  return (
    <main className="flex h-screen w-full">
      <section className="flex flex-grow items-center justify-center px-5 md:px-0">
        <Forgot />
      </section>
      <CustomImage
        src="/forgot.jpg"
        width={800}
        height={1080}
        quality={100}
        className="h-screen hidden lg:block object-cover"
        alt="Imagem futura de projetos"
      />
    </main>
  )
}

export default ForgotPassword
