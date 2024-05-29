import './App.css';
import Nav from './components/Nav';
import Header from "./components/Header";
import About from "./components/About";
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
