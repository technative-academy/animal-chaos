// import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SiteNav from "../SiteNav/SiteNav";
// import MainContent from '../MainContent/MainContent';
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

export default function Root() {
  return (
    <>
      <SiteNav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
