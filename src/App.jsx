import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Prefer from './components/Prefer/Prefer';
import "./App.css";
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import About from './components/About/About';
import Faq from './components/FAQ/Faq';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
        <>
           <Header/>
           <Hero/>
           <Prefer/>
           <Contact/>
           <Services/>
           <About/>
           <Faq/>
           <Form/>
           <Footer/>
        </>
  )
}

export default App