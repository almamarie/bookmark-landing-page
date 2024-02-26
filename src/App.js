import { useState } from "react";
import styles from "./App.module.css";
import Contacts from "./components/contacts/Contacts";
import Extensions from "./components/extensions/Extensions";
import FrequentlyAskedQuestions from "./components/faq/FrequentlyAskedQuestions";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MobileNav from "./mobile-nav/MobileNav";

function App() {
  const [showMobileNav, setShoMobileNav] = useState(false);
  return (
    <div className={styles.wrapper}>
      {showMobileNav && <MobileNav setMobileNavState={setShoMobileNav} />}
      <Header
        showMobileNav={showMobileNav}
        setMobileNavState={setShoMobileNav}
      />
      <Features />
      <Extensions />
      <FrequentlyAskedQuestions />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
