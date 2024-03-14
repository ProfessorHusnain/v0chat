import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_URL,
  });
  const publicPaths = ["/login", "/register", "/"];
  if (token && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/chat", req.nextUrl));
  }
  if (!token && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/register", "/chat"],
};
