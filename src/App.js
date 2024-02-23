import styles from "./App.module.css";
import Extensions from "./components/extensions/Extensions";
import Features from "./components/features/Features";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Features />
      <Extensions />
    </div>
  );
}

export default App;
