"use client";
import styles from "./page.module.css";
import Menu from "./components/menu";
import LgpdPopup from "./components/LgpdPopup";
import SectionInstagram from "./components/instagram-section";
import SectionComment from "./components/comentario-section";
import SectionHome from "./components/home-section";
import Footer from "./components/footer";
import ButtonFloating from "./components/buttom-floating";
import SectionPerguntas from "./components/perguntas-section";
// import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     // Impedir o uso de F12 e Ctrl+Shift+I
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && e.key === "I") ||
  //       (e.ctrlKey && e.key === "U")
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div className={styles.page}>
      <Menu />
      <main>
        <SectionHome />

        {/* <ParallaxSection /> */}
        <SectionComment />
        <SectionPerguntas />
        <SectionInstagram />
      </main>

      <Footer />
      <ButtonFloating />
      <LgpdPopup />
    </div>
  );
}
