"use client"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "@/shared/components/custom-input"
import React from "react"
import { useForm } from "react-hook-form"
import { AuthFields } from "../fields/auth-fields"

export const Reset = () => {
  const form = useForm({
    defaultValues: {
      password: "",
    },
  })

  const registerFields = [AuthFields[2]]

  return (
    <Form {...form}>
      <form className="flex h-full w-96 flex-col items-center justify-center space-y-4">
        <div className="mb-4 text-center">
          <h2 className="mb-2 text-3xl font-medium text-black/70 hover:text-[#1F3473]">
            Recuperar senha
          </h2>
          <p className="text-black/80 text-xl hover:text-[#1F3473]">
            Crie uma nova senha para sua conta
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
              className="w-full text-lg p-4 border-black/50 text-black/70 hover:text-[#1F3473]"
            />
          ))}
        </>
        <Button className=" w-full bg-[#121313] hover:bg-[#1F3473] text-white">
          Enviar Senha
        </Button>
      </form>
    </Form>
  )
}
