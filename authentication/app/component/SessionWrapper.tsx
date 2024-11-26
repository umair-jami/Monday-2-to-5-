import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const SessionWrapper=({children}:{children:ReactNode})=>{
    return(
        <SessionProvider>{children}</SessionProvider>
    )
}