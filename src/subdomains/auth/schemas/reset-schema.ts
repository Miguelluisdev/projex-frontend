import { z } from "zod"
import { ResetSchema } from "."

export interface ResetInputPassword {
  password: string
  token: string
}

export const ResetPasswordSchema = z.object({
  password: ResetSchema.password,
})
