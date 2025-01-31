"use client"
import DefaultLoader from "@/components/content/DefaultLoader";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";


export const ProtectedRoute=({children}:{children:ReactNode})=>{
    const {ready, authenticated} = usePrivy();
    const router = useRouter();

    useEffect(()=>{
        if(ready && !authenticated){
            router.push('/');
        }
    },[ready, authenticated,router])

    if(ready && authenticated){
        return<>{children}</>
    }


    return <DefaultLoader/>

}