import { useContext, useEffect } from "react";
import About from "./components/About"
import AboutText from "./components/AboutText"

import Header from "./components/Header"
import Hero from "./components/Hero"
import { UserContext } from "./context/UserContext";


function App() {
  const {  geo } = useContext(UserContext);

  
  useEffect(() => {
    if(geo) {
     document.body.style.fontFamily = `font-family: "ALK Sanet", sans-serif !important`;
    }else {
      document.body.style.fontFamily = `font-family: "BPG Classic Medium", sans-serif;`
    }
 }, [geo])
  return (
    <>
    <div className="relative">
      <Header />
      <Hero />
    </div>
    <About />
    <AboutText />
  </>
  )
}

export default App
