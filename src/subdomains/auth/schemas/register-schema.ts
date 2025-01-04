import { z } from "zod"
import { RegisterSchema } from "."

export interface RegisterInput {
  username: string
  email: string
  password: string
}

export const registerSchema = z.object({
  username: RegisterSchema.username,
  email: RegisterSchema.email,
  password: RegisterSchema.password,
})
