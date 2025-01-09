import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { useAuth } from "@/shared/contexts/auth"
import { getCookie } from "cookies-next"
import { headers } from "next/headers"
import {
  ResetPasswordMutation,
  ResetPasswordResponse,
} from "../mutation/reset-pass"
import {
  ResetInputPassword,
  ResetPasswordSchema,
} from "../schemas/reset-schema"

export function useResetPassword(token: string) {
  const [resetPassword] = useMutation<ResetPasswordResponse>(
    ResetPasswordMutation,
  )
  const router = useRouter()
  const { dispatch } = useAuth()

  const form = useForm<ResetInputPassword>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
    },
  })

  async function handleResetPassword(data: ResetInputPassword) {
    const { password } = data
    const authtoken = getCookie("token")
    try {
      const { data } = await resetPassword({
        variables: {
          token,
          password,
        },
        context: {
          headers: {
            Authorization: authtoken ? `Bearer ${authtoken}` : "",
          },
        },
      })

      dispatch({
        type: "LOGIN",
        payload: {
          token: data?.resetPassword.token,
        },
      })
      toast.success("Senha redefinida com sucesso!!")
      router.push("/dashboard")
    } catch (error) {
      toast.error("Erro ao redefinir a senha.")
    }
  }

  return { form, handleResetPassword }
}
