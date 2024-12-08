import { useContext, useEffect } from "react";

import { UserContext } from "./context/UserContext";

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Pool from "./components/Pool";


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

    <Routes>
      <Route path = "/" element = {<Main />} />
      <Route path = "/pool" element = {<Pool />} />
    </Routes>
  
    
   
  </>
  )
}

export default App
