import './assets/css/App.css';
import Header from "./components/Header/Header";
import SiteNav from './components/SiteNav/SiteNav';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Header/>
      <SiteNav/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
