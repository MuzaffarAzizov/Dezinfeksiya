import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Klapa from "./components/Klapa";
import Services from "./components/Services";
import Type from "./components/Type";
import Rasmiy from "./components/Rasmiy";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Klapa />
      <Services />
      <Type />
      <Rasmiy />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;