import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './components/NavBar'
import ParticlesBackground from './components/ParticlesBackground'
// import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import { motion, useScroll } from "framer-motion"
import GlowingRingCursor from './components/GlowingRingCursor'

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
    <ParticlesBackground/>
    <GlowingRingCursor/>
    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#B415FF",
                    zIndex: 20
                }}
            />
      <NavBar/>
      <Home/>
      {/* <About/> */}
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
