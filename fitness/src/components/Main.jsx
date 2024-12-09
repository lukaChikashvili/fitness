import About from "../components/About"
import AboutText from "../components/AboutText"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "./Services"
import Trainers from "./Trainers"

const Main = () => {
  return (
    <div>
      <div className="relative">
      
      <Header />
      <Hero />
    </div>

   
    <About />
    <AboutText />
    <Services />
    <Trainers />
  
    </div>
  )
}

export default Main
