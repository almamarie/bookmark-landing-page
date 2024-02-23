import styles from "./App.module.css";
import Contacts from "./components/contacts/Contacts";
import Extensions from "./components/extensions/Extensions";
import FrequentlyAskedQuestions from "./components/faq/FrequentlyAskedQuestions";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Features />
        <Extensions />
        <FrequentlyAskedQuestions />
      </div>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
