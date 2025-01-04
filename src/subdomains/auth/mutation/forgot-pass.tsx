import { ForgotPassword } from "@/shared/@types/user"
import { gql } from "@apollo/client"

export interface ForgotPassworddResponse {
  forgotPasswordd: ForgotPassword
}

export const ForgotPasswordMutation = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(input: { email: $email }) 
  }
`

// mutation {
//     forgotPasswordd(input: { email: "miguelluisaft@gmail.com" })
//   }

// http://localhost:3000/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NmQzZDMzZS04MDVjLTRmNGUtOGQ0Yi1lM2Y2Y2UxZmMyMzAiLCJpYXQiOjE3MzYwMjY2NTEsImV4cCI6MTczNjAyNzU1MX0.vRJVZCYrO8qY3rjMBDFMyTDleN8UY2T0tf0Nph6-EOg