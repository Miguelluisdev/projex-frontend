import CustomImage from "@/shared/components/custom-image"
import { Reset } from "@/subdomains/auth/components/reset"

const ForgotPassword = () => {
  return (
    <main className="flex items-center justify-center h-screen w-full">
      <section className="flex flex-grow items-center justify-center px-5 md:px-0">
        <Reset />
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
