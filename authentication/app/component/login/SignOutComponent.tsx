'use client'

import { signOut } from "next-auth/react"

export default function SignOutPage(){
    return(
        <>
        <h1>Sign Out</h1>
        <button onClick={()=>signOut()}>Sign Out</button>
        </>
    )
}