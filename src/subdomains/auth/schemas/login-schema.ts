import { z } from "zod"
import { LoginSchema } from "."

export interface LoginInput {
  email: string
  password: string
}

export const loginSchema = z.object({
  email: LoginSchema.email,
  password: LoginSchema.password,
})
