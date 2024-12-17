import { z } from "zod"
import { RegisterSchema } from "."

export interface RegisterInput {
  name: string
  email: string
  password: string
}

export const registerSchema = z
  .object({
    name: RegisterSchema.name,
    email: RegisterSchema.email,
    password: RegisterSchema.password,
    confirmPassword: RegisterSchema.confirmPassword,
  })

  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não correspondem.",
  })
