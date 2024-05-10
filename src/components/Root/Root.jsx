import Header from "../Header/Header";
import SiteNav from "../SiteNav/SiteNav";
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
