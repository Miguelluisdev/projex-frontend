"use client"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "@/shared/components/custom-input"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { AuthFields } from "../fields/auth-fields"

export const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const registerFields = [AuthFields[1], AuthFields[2]]

  return (
    <Form {...form}>
      <form
        className="flex h-full w-96 flex-col justify-center space-y-4"
        aria-labelledby="formulario-de-login"
        role="form"
      >
        <aside className="mb-4 text-center">
          <h2
            className="mb-2 md:text-4xl text-3xl font-medium text-black/70 hover:text-[#1F3473]"
            id="login-form"
          >
            Login
          </h2>
          <p
            className="text-2xl text-black/80 hover:text-[#1F3473]"
            id="login-form-description"
          >
            Seja Bem vindo(a) novamente
          </p>
        </aside>
        <>
          {registerFields.map((item, index) => (
            <CustomInput
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              control={form.control}
              key={index}
              type={item.type}
              className="w-full border-black/50 text-black/70 hover:text-[#1F3473]"
            />
          ))}
          <Link
            href="/forgot"
            rel="noopener noreferrer"
            title="recuperar senha"
            className="self-end text-xl  text-black/70 hover:text-[#1F3473] hover:underline"
            role="link"
          >
            Esqueceu a senha?
          </Link>
        </>
        <Button
          className="w-full bg-[#121313] hover:bg-[#1F3473]  shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] text-white  "
          aria-label="clique para fazer login"
          role="button"
        >
          Logar
        </Button>
        <div
          className="mt-16 flex w-full justify-center text-black/70 hover:text-[#1F3473]"
          role="contentinfo"
        >
          <Link href="/sign-up" className="font-bold hover:underline" role="link" rel="noopener noreferrer" title="Criar a conta">
            Não possui conta?Criar conta
          </Link>
        </div>
      </form>
    </Form>
  )
}
