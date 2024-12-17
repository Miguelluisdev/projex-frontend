import { z } from "zod"

export const RegisterSchema = {
  email: z.string().email({ message: "Por favor insira um e-mail válido" }),
  name: z
    .string()
    .min(1, "Por favor insira seu nome")
    .regex(/^[a-zA-Z]+ [a-zA-Z]+$/, {
      message: "Por favor, insira seu nome e sobrenome.",
    }),
  password: z
    .string()
    .min(1, "Por favor insira a senha corretamente")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
      },
    ),
  confirmPassword: z.string().min(1, "Por favor confirme sua senha"),
}

//  para login

export const LoginSchema = {
  email: z.string().email({ message: "Por favor insira um e-mail válido" }),
  password: z
    .string()
    .min(1, "Por favor insira a senha corretamente")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
      },
    ),
}

