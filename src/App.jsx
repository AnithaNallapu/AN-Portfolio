import { useState } from "react"
import Sidenav from "./components/Sidenav"
import Main from "./components/Main"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Certificates from "./components/Certificates"
import About from "./components/About"


function App() {

  return (
   <div>
    <Sidenav />
    <Main />
    <About/>
    <Skills/>
    <Projects/>
    <Certificates/>
    <Contact/>

   </div>
  )
}

export default App