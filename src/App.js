import Header from "./components/header/Header";
import "./App.css"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contacts/Contact";
//import Layout from "./layout/layout";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
