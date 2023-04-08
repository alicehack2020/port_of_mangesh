import Projects from "./components/project/Projects";
import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Contact from "./components/footer/Contact";
function App() {
  return  (
    <>
  
      <NavBar/>
      <Hero />
      <About/>
      <Skill/>
      <Projects />
      <Contact/>
   
  </>
  )
}

export default App;
