import CustomImage from "@/shared/components/custom-image"
import { Login } from "@/subdomains/auth/components/login"

const SignIn = () => {
  return (
    <main className="flex h-screen w-full">
      <CustomImage
        src="/login.jpg"
        width={800}
        height={1080}
        quality={100}
        className="h-screen hidden lg:block object-cover"
        alt="Imagem futura de projetos"
      />
      <div className="flex flex-grow items-center justify-center px-5 md:px-0">
        <Login />
      </div>
    </main>
  )
}

export default SignIn
