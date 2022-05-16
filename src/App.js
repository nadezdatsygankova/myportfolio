// import logo from './logo.svg';
// import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Recommendations from "./components/Recommendations";
import Services from "./components/Services";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      < Home />
      <Services />
      <Recommendations />
      <Education />
      <Portfolio />
      <ContactUs/>
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
