import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
