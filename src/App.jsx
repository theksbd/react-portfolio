import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Home from './pages/Home';
import ProjectDisplay from './pages/ProjectDisplay';
import Projects from './pages/Projects';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
