export type User = {
  uuid?: string
  user_id?: string
  username?: string
  email?: string
  password?: string
  tasks?: string | null
  projects?: string | null
  token?: string | null
}

export type AuthUser = {
  uuid?: string
  email?: string
  password?: string
  token: string | null
}

export type ForgotPassword = {
  email?: string
}

export type ResetPassword = {
  token?: string
}
