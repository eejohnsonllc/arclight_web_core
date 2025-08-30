import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import './css/styles.css';
import './css/mobile.css';
import './css/hover.css';
import './css/top.css';
import './css/about.css';
import './css/bio.css';
import './css/contact.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileOptimizer from './components/MobileOptimizer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Bio from './pages/Bio';
import CarolinaAcross100 from './pages/projects/CarolinaAcross100';
import SbirSttr from './pages/projects/SbirSttr';
import RapidCovid from './pages/projects/RapidCovid';


function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <Router>
      <style>
        {`
          /* Global Button Styles */
          .button, button, .btn {
            border-radius: 8px !important;
            transition: all 0.2s ease !important;
          }
          
          /* Dark Teal Button Styling */
          .button.is-dark, .button.is-primary, .button.is-link {
            background-color: #2C7F7F !important;
            border-color: #2C7F7F !important;
            color: white !important;
          }
          
          .button.is-dark:hover, .button.is-primary:hover, .button.is-link:hover {
            background-color: #245F5F !important;
            border-color: #245F5F !important;
            color: white !important;
            transform: translateY(-2px) !important;
          }
          
          /* Light variant buttons */
          .button.is-light {
            background-color: #E8F4F4 !important;
            border-color: #2C7F7F !important;
            color: #2C7F7F !important;
          }
          
          .button.is-light:hover {
            background-color: #2C7F7F !important;
            border-color: #2C7F7F !important;
            color: white !important;
            transform: translateY(-2px) !important;
          }
          
          /* Generic button styling */
          button:not(.navbar-toggler):not(.carousel-control-prev):not(.carousel-control-next):not([data-bs-toggle]) {
            background-color: #2C7F7F !important;
            border-color: #2C7F7F !important;
            color: white !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: 8px !important;
          }
          
          button:not(.navbar-toggler):not(.carousel-control-prev):not(.carousel-control-next):not([data-bs-toggle]):hover {
            background-color: #245F5F !important;
            border-color: #245F5F !important;
            transform: translateY(-2px) !important;
          }
        `}
      </style>
      <div className="App">
        <MobileOptimizer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects/carolina-across-100" element={<CarolinaAcross100 />} />
          <Route path="/projects/sbir-sttr" element={<SbirSttr />} />
          <Route path="/projects/rapid-covid" element={<RapidCovid />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;