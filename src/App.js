import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Work from "./components/work/Work";
import Connect from "./components/connect/Connect";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
 function App() {
  return  (
    <>
  <Header/>
  <Hero/>
  <About/>
  <Projects/>
  {/* <Work/> */}
  <Contact/>
  <Footer/>
  </>
  )
}

export default App;
