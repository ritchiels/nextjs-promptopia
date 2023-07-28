"use client";

import { SessionProvider } from "next-auth/react"

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider

// pass in children and current session
// higher order component