// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Post from "./pages/Post"
import Footer from "./components/layout/Footer"
import NotFound from "./pages/NotFound"
import Header from "./components/layout/Header"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import WhatsAppButton from "./components/WhatsAppButton"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>

      <WhatsAppButton />
    </BrowserRouter>
  )
}
