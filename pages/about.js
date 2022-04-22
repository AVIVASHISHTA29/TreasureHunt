import Head from "next/head";
import Image from "next/image";
import ConceptComponent from "../components/AboutComponents/ConceptComponent";
import MovingComponent from "../components/AboutComponents/MovingComponent";
import TeamComponent from "../components/AboutComponents/TeamComponents";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.bigHeading} style={{ color: "var(--black)" }}>
          About
        </h1>
        <h1 className={styles.bigHeading2}>Treasure Hunt</h1>
        <p className={styles.bottomPara}>(SCROLL)</p>
      </div>
      <ConceptComponent />
      <MovingComponent />
      <TeamComponent />
      <Footer />
    </div>
  );
}
