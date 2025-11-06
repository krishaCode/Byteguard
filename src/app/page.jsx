import Image from "next/image";
import styles from "./page.module.css";
import Header from "./{header}/header";
import AboutUs from "./{aboutUs}/aboutUs";
import OurServices from "./{ourServices}/OurServices";
import Projects from "./{Projects}/projects";
import Contact from "./contact/contact";
export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <AboutUs />
      <OurServices />
      <Projects />
      <Contact />
    </div>
    </>
  );
}
