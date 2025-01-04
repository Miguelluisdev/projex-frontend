import { useAuth } from "@/shared/contexts/auth"
import {
  CreateUserMutation,
  CreateUserResponse,
} from "@/subdomains/auth/mutation/create-user"
import {
  RegisterInput,
  registerSchema,
} from "@/subdomains/auth/schemas/register-schema"
import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function useCreateUser() {
  const [createUser] = useMutation<CreateUserResponse>(CreateUserMutation)
  const { dispatch } = useAuth()
  const router = useRouter()

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  async function handleCreateUser(data: RegisterInput) {
    const { username, email, password } = data

    try {
      const { data } = await createUser({
        variables: {
          username,
          email,
          password,
        },
      })

      dispatch({
        type: "LOGIN",
        payload: {
          user: data?.createUser,
          token: data?.createUser?.token,
        },
      })
      toast.success("Conta criada com sucesso!")
      router.push("/dashboard")
    } catch (error) {
      toast.error("Erro ao criar conta.")
    }
  }

  return { form, handleCreateUser }
}
