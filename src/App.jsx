import About from "./components/About"
import Achievement from "./components/Achievement"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Footer from "./components/Footer/Index"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <>
     <Navbar />
     <Header />
     <Achievement />
     <About />
     <Services />
     <Teams />
     <Project />
     <Testimonial />
     <Faq />
     <Contact />
     <Footer />
    </>
  )
}

export default App
