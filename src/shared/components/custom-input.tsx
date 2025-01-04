import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/shared/lib/utils"
import React from "react"
import { CustomFieldsProps } from "../@types/custom-fields"

const CustomInput = (props: CustomFieldsProps) => {
  const { name, label, className, control, ...rest } = props

  return (
    <>
      <FormField
        control={control}
        name={name || ""}
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className="text-black text-lg" htmlFor={name}>
              {label}
            </FormLabel>
            <FormControl>
              <Input
                id={name}
                aria-labelledby={`${name}-label`}
                aria-describedby={`${name}-description`}
                aria-invalid={fieldState.invalid}
                aria-required
                aria-placeholder={`${name}`}
                {...rest}
                className={cn("", className)}
                {...field}
              />
            </FormControl>
            <FormMessage id={`${name}-description`} className="text-lg" />
          </FormItem>
        )}
      />
    </>
  )
}

export default CustomInput
