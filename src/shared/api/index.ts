import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"
import { deleteCookie } from "cookies-next"
import { cache } from "react"

if (process.env.NODE_ENV === "development") {
  loadDevMessages()
  loadErrorMessages()
}

export const Client = () => {
  let token: string | null = ""

  try {
    token = localStorage.getItem("token")
  } catch (error) {
    deleteCookie("IsLogged")
    deleteCookie("token")
  }

  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`,
    fetchOptions: { cache: "no-store" },
    headers: {
      "Content-type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  })

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: httpLink,
    uri: `${process.env.NEXT_PUBLIC_API_GRAPHQL_URL}`,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
    },
  })
}
