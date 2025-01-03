import { Reset } from "@/subdomains/auth/components/reset"

const ForgotPassword = () => {
  return (
    <main className="flex items-center justify-center h-screen w-full">
      <section className="flex flex-grow items-center justify-center px-5 md:px-0">
        <Reset />
      </section>
    </main>
  )
}

export default ForgotPassword
