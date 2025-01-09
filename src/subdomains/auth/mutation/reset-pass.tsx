import { ResetPassword } from "@/shared/@types/user"
import { gql } from "@apollo/client"

export interface ResetPasswordResponse {
  resetPassword: ResetPassword
}

export const ResetPasswordMutation = gql`
  mutation resetPassword($token: String!, $password: String!) {
    resetPassword(input: { token: $token, password: $password })
  }
`

// mutation {
//     resetPassword(input: {
//       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMWM0NWVjOS01NjJiLTQ1MzktYWQxZC1kMDZkYzYwZjgxY2EiLCJpYXQiOjE3MzQ5ODgyODksImV4cCI6MTczNDk4OTE4OX0.RDCuIFLTXc46YwM7YcHl7RoEwa7s7y1olRFvJUDGSV0",
//       password: "NovaSenhaForte123!"
//     })
//   }
