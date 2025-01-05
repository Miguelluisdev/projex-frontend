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

