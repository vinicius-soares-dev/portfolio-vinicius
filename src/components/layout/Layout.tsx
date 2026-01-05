import type{ ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main id="content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
