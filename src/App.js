import './App.css';
import Nav from './components/Nav';
import Header from "./components/Header";
import About from "./components/About";
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
