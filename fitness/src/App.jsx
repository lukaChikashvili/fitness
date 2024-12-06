import About from "./components/About"
import CanvasPage from "./components/CanvasPage"
import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    <>
   <div className="app-container">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
    </div>
     
    </>
  )
}

export default App
