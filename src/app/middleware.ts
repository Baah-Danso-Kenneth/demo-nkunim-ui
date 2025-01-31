import { NextRequest, NextResponse } from "next/server";
import { PrivyClient } from "@privy-io/server-auth";

export async function middleware(req: NextRequest) {
  const cookieAuthToken = req.cookies.get("privy-token")?.value;

  if (!cookieAuthToken) {
    return NextResponse.next(); // Continue to login page if no token is found
  }

  const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID!;
  const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET!;
  const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);

  try {
    const claims = await client.verifyAuthToken(cookieAuthToken);
    console.log("Authenticated user:", claims);

    // If authenticated, redirect to dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } catch (error) {
    console.error("Authentication failed:", error);
    return NextResponse.next(); // Allow user to log in again
  }
}

// Apply middleware only to login page
export const config = {
  matcher: "/",
};
