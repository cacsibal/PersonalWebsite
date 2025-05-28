import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import About from './components/About';
import ExperienceCard from './components/ExperienceCard';

const Contact = () => <div className="page">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
        <Home />
        <About />
        <Experience />
        </main>
      </div>
    </Router>
  );
}

export default App;