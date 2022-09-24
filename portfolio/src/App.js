import { Route, Routes } from 'react-router-dom';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
defineLordIconElement(loadAnimation);

function App() {
  return (
    <div >
      <Navbar />
      <Routes >
        <Route path='/' element={ <Home />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/projects' element={ <Projects />}/>
        <Route path='/projects/:id' element={ <ProjectDetails />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
