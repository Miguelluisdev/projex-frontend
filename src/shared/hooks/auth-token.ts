import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"

export const useAuthToken = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = getCookie("token")
    setIsAuthenticated(!!token)
  }, [])

  return isAuthenticated
}
