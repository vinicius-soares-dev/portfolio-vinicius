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
import TrafficPaid from "./pages/TrafficPaid"
import ProfessionalSites from "./pages/ProfessionalSites"
import WebSystems from "./pages/WebSystems"
import Copywriting from "./pages/Copywriting"
import DesignEstrategico from "./pages/DesignEstrategico"
import SeoPerformance from "./pages/SeoPerformance"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/trafego-pago" element={<TrafficPaid />} />
          <Route path="/servicos/sites-profissionais" element={<ProfessionalSites />} />
          <Route path="/servicos/copywriting" element={<Copywriting />} />
          <Route path="/servicos/sistemas-web" element={<WebSystems />} />
          <Route path="/servicos/design" element={<DesignEstrategico />} />
          <Route path="/servicos/seo-e-perfomance" element={<SeoPerformance />} />
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
