import styles from "./App.module.css";
import Features from "./components/features/Features";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Features />
    </div>
  );
}

export default App;
