import styles from "./App.module.css";
import Extensions from "./components/extensions/Extensions";
import FrequentlyAskedQuestions from "./components/faq/FrequentlyAskedQuestions";
import Features from "./components/features/Features";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Features />
      <Extensions />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default App;
