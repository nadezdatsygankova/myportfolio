
// import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services/>
      <AboutMe/>
      <MyWork/>
      <Footer/>
    </div>
  );
}

export default App;
