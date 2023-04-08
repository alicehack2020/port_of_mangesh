import Projects from "./components/project/Projects";
import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
function App() {
  return  (
    <>
  
      <NavBar/>
      <Hero />
      <About/>
      <Skill/>
     
  <Projects/>
 
   
  </>
  )
}

export default App;
