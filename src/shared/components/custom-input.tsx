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
  return (
    <>
      <FormField
        control={props.control}
        name={props.name || ""}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">{props.label}</FormLabel>
            <FormControl>
              <Input
                {...props}
                className={cn("", props.className)}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default CustomInput
