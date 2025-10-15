import './App.css';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import { developerInfo, projects, skills, experience } from './data/mock';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero3D developerInfo={developerInfo} />
      <About developerInfo={developerInfo} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Contact developerInfo={developerInfo} />
      <Footer developerInfo={developerInfo} />
      <Toaster />
    </div>
  );
}

export default App;
