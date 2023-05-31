// import { FaBeer } from 'react-icons/fa';
import './App.css';
import Header from './components/header'
import First from './components/first'
import Card from './components/card'
import Award from './components/award'
import Fques from './components/F&G'
import Showtable from './components/table'
import Method from './components/methods'
import Team from './components/team'
import Footer from './components/footer'
import Pop from './components/popup'
import { LanguageProvider } from "./components/langprov";


function App() {
  return (


    <LanguageProvider defaultLanguage="en">

      <div className='overflow-hidden relative'>
    
        <Header/>
        <First/>
        <Card/>
        <Award/>
        <Fques/>
        <Showtable/>
        <Method/>
        <Team/>
        <Pop/>
        <Footer/>
      </div>
      
    </LanguageProvider>
  );
}

export default App;
