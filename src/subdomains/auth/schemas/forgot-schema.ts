import { z } from "zod"
import { ForgotSchema } from "."

export interface ResetInput {
  email: string
}

export const ResetSchema = z.object({
  email: ForgotSchema.email,
})
