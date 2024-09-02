import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Top from './component/top/Top';
import Package from './component/package/Package';
import Inter from './component/international/Inter';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Top/>
      <Package/>
      <Inter/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
