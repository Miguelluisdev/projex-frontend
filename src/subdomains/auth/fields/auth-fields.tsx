import { Formstype } from "../@types/auth-types"

export const AuthFields: Formstype[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Digite seu nome de usuario",
    label: "Nome",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Digite seu e-mail",
    label: "E-mail",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Digite sua senha",
    label: "Senha",
  },
]
