
// import './App.css'
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/hero'
import Paralax from './components/paralax/Paralax'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import About from './components/about/About'
function App() {

  return (
         <div>
          <section id='Home'>

         <Navbar/>
         <Hero/>

         </section>
          <section id='Skills'><Paralax type="services"/></section>
          
         <section id='Skill'><Skills/></section>
         

         <section id='Latest%20Work'><Paralax type="portfolio" /></section>



        <Project/>
         <section id='contact' style={{scrollSnapAlign:"center"}}> <Contact/></section>
         
         </div> 
    
      
  )
}

export default App
