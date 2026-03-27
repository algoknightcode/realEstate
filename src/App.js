import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header1 from './components/Header1';
import Countjs from './components/countjs';
import Faq from './components/Faq';
import { Header3 } from './components/Header3';
import AboveFooter from './components/AboveFooter';
import Footer from './components/Footer';
import { Header4 } from './components/Header4';
import { Subheader } from './components/subheader';
import { Header5 } from './components/Header5';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header1/>
      <Countjs/>
      <Faq/>
      <Header3/>
      <Header4/>
      <Header5/>
      <Subheader/>
      <AboveFooter/>
      <Footer/>
    </div>
   
  );
}

export default App;
