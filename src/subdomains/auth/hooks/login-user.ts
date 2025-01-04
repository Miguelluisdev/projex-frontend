import { useAuth } from "@/shared/contexts/auth"
import {
  AuthenticateUserResponse,
  CreateAuthMutation,
} from "@/subdomains/auth/mutation/login-user"
import { LoginInput, loginSchema } from "@/subdomains/auth/schemas/login-schema"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function useLoginUser() {
  const [createAuth] = useMutation<AuthenticateUserResponse>(CreateAuthMutation)
  const { dispatch } = useAuth()
  const router = useRouter()

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleLoginUser(data: LoginInput) {
    const { email, password } = data

    try {
      const { data } = await createAuth({
        variables: {
          email,
          password,
        },
      })

      dispatch({
        type: "LOGIN",
        payload: {
          user: data?.createAuth,
          token: data?.createAuth?.token,
        },
      })

      toast.success("Login feito com sucesso!")
      router.push("/dashboard")
    } catch (error) {
      toast.error("Erro ao fazer login")
    }
  }
  return { form, handleLoginUser }
}
