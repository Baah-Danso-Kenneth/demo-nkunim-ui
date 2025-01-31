'use client'

import { PrivyProvider } from "@privy-io/react-auth"
import { ReactNode } from "react"

export default function Providers({children}:{children:ReactNode}){
    console.log("Privy APP ID:",process.env.NEXT_PUBLIC_PRIVY_APP_ID);
    return <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}>{children}</PrivyProvider>
}