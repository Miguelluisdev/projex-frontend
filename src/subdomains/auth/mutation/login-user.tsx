import { AuthUser } from "@/shared/@types/user"
import { gql } from "@apollo/client"

export interface AuthenticateUserResponse {
  createAuth: AuthUser
}

export const CreateAuthMutation = gql`
  mutation CreateAuth($email: String!, $password: String!) {
    createAuth(AuthInput: { email: $email, password: $password }) {
      uuid
      user_id
      token
      expires_at
    }
  }
`

// mutation AuthenticateUser {
//     createAuth(AuthInput: {
//       email: "user@example.com",
//       password: "UserStrongPassword123!"
//     }) {
//       uuid
//       user_id
//       token
//       expires_at
//     }
//   }
