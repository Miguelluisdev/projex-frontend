import { getCookie } from "cookies-next"
import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/dashboard", "/dashboard/profile"]

export function middleware(request: NextRequest) {
  const token = getCookie("token", { req: request })

  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith("/reset")) {
    const tokenFromURL = request.nextUrl.searchParams.get("token")

    if (!tokenFromURL) {
      return NextResponse.redirect(new URL("/sign-in", request.url))
    }
  }

  if (request.nextUrl.pathname === "/sign-in" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/reset/:path*"],
}
