import { useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ForgotPasswordMutation, ForgotPassworddResponse } from "../mutation/forgot-pass"
import { ResetInput, ResetSchema } from "../schemas/forgot-schema"
import { getCookie } from "cookies-next"

export function useForgotPasswordd() {
  const [forgotPassword] = useMutation<ForgotPassworddResponse>(ForgotPasswordMutation)

  const form = useForm<ResetInput>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  })

  async function handleForgotPasswordd(data: ResetInput) {
    const { email } = data
    const token = getCookie("token")

    try {
      const { data: responseData } = await forgotPassword({
        variables: {
          email, 
        },
        context: {
          headers: {
            Authorization: token ? `Bearer ${token}` : "", 
          },
        },
      })

      if (responseData?.forgotPasswordd) {
        toast.success("Email enviado com sucesso! Verifique sua caixa de email")
      } else {
        toast.error("Erro ao enviar email")
      }
    } catch (error) {
      toast.error("Erro ao enviar email")
      console.error(error)
    }
  }

  return { form, handleForgotPasswordd }
}
