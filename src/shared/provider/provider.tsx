"use client"

import { ApolloProvider } from "@apollo/client"
import { Client } from "../api"
import { AuthProvider } from "../contexts/auth"

interface ProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <ApolloProvider client={Client()}>
        <AuthProvider>{children}</AuthProvider>
      </ApolloProvider>
    </>
  )
}

export default Provider
