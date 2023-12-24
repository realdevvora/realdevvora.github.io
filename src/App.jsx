import './App.css'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Involvement from "./Involvement"
import Footer from "./Footer"

function App() {

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Header/>
      <Hero/>
      <div id="nextSection1" className="min-h-screen">
        <Projects/>
      </div>
      <div id="nextSection2" className="min-h-screen">
        <Skills/>
      </div>
      <div id="nextSection3" className="min-h-screen">
        <Involvement/>
      </div>
      <Footer/>
    </div>
  )
}

export default App