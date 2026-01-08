import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from "./components/Footer"
import ParticleBackground from './components/ParticleBackground'

function App() {

  return (
    <div>
      <ParticleBackground>
        <h1 className='greeting-text'>Hi, I'm Henry</h1>
        <div>
          <p className="small-text">
            Software Engineering and Project Management @ Turku AMK
          </p>
          <p className='small-text'>
            Graduating soon...
          </p>
        </div>
        <About />
        <Experience/>
        <Projects />
        <Footer />
      </ParticleBackground>
    </div>
  )
}

export default App
