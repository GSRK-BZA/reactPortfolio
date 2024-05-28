import './App.css';
import Nav from './components/Nav';
import Header from "./components/Header";
import About from "./components/About";
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Testimonial />
    </div>
  );
}

export default App;
