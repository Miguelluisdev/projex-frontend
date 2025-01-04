import { User } from "@/shared/@types/user"
import { gql } from "@apollo/client"

export interface CreateUserResponse {
  createUser: User
}

export const CreateUserMutation = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: {
        username: $username
        email: $email
        password: $password
      }
    ) {
      uuid
      username
      email
      password
      token
    }
  }
`

// mutation CreateUser {
//     createUser(createUserInput: {
//       username: "JohnDoe"
//       email: "johndoe@example.com"
//       password: "SecurePassword123"
//     }) {
//       uuid
//       username
//       email
//       created_at
//     }
//   }
