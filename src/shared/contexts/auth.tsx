import { deleteCookie, getCookie, setCookie } from "cookies-next"
import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react"
import { User } from "../@types/user"

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  loading: boolean
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT" | "SET_LOADING"
  payload?: Partial<AuthState>
}

interface AuthContextType {
  state: AuthState
  dispatch: Dispatch<AuthAction>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const initialState: AuthState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  token: null,
}

const saveToCookies = (
  key: string,
  value: string,
  daysUntilExpire: number = 7,
) => {
  const expires = new Date()
  expires.setDate(expires.getDate() + daysUntilExpire)
  const options = {
    path: "/",
    expires,
  }
  setCookie(key, value, options)
}

const removeFromCookies = (key: string) => {
  deleteCookie(key)
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload?.token) {
        saveToCookies("token", action.payload.token, 7)
        saveToCookies("user", JSON.stringify(action.payload.user), 7)
      }
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      }

    case "LOGOUT":
      removeFromCookies("token")
      removeFromCookies("user")
      return { ...initialState, loading: false }

    case "SET_LOADING":
      return { ...state, loading: action.payload?.loading ?? false }

    default:
      return state
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const token = getCookie("token")
    const user = getCookie("user")
    if (token && user) {
      dispatch({ type: "LOGIN", payload: { user: JSON.parse(user), token } })
    } else {
      dispatch({ type: "SET_LOADING", payload: { loading: false } })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
