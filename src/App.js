import './App.css';
import './assets/css/main.css'
import AboutMe from './components/AboutMe';
import Header from './components/Header'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
import "./assets/css/timeline.css"


function App() {
  return (
    <body >

      <Header />
      <AboutMe />
      <TechnicalSkills />
      <Projects />
      <ContactMe />

    </body >
  );
}

export default App;
