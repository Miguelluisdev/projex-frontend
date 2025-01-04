"use client"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "@/shared/components/custom-input"
import Link from "next/link"
import React from "react"
import { AuthFields } from "../fields/auth-fields"
import { useForgotPasswordd } from "../hooks/forgot-pass"

export const Forgot = () => {
  const { form, handleForgotPasswordd } = useForgotPasswordd()
  const registerFields = [AuthFields[1]]

  return (
    <Form {...form}>
      <form
        className="flex h-full w-96 flex-col justify-center space-y-4"
        role="form"
        onSubmit={form.handleSubmit(handleForgotPasswordd)}
      >
        <div className="mb-4 text-center">
          <h2 className="mb-2 text-2xl font-medium text-black/70 hover:text-[#1F3473]">
            Recuperar senha
          </h2>
          <p className="text-black/80 hover:text-[#1F3473]">
            Digite seu endereço de e-mail abaixo e enviaremos instruções sobre
            como redefinir sua senha
          </p>
        </div>
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
        </>
        <Button className="w-full bg-[#121313] hover:bg-[#1F3473]  shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] text-white">
          Enviar Email
        </Button>
        <div className="mt-16 flex w-full justify-center text-black/70 hover:text-[#1F3473]">
          <Link href="/sign-in" className="font-bold hover:underline">
            Voltar para o Login
          </Link>
        </div>
      </form>
    </Form>
  )
}
