"use client";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import Image from "next/image";
import "../styles/menu.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollTop.current && currentScrollY >= 150) {
        setIsNavbarVisible(false); // Rolagem para baixo
        if (currentScrollY >= 150) {
          setScrollPosition(true);
        }
      } else if (currentScrollY < lastScrollTop.current) {
        setIsNavbarVisible(true); // Rolagem para cima
        if (currentScrollY <= 150) {
          setScrollPosition(false);
        }
      }
      lastScrollTop.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${isNavbarVisible ? "visible" : "hidden"}`}>
      <nav className={`${scrollPosition ? "active" : ""}`}>
        <button className="menu-icon" onClick={handleMenuToggle}>
          <FaBars />
        </button>

        <Link href="#home" style={{ display: "flex", alignItems: "center" }}>
          <Image
            className="nav-logo"
            src="https://nextjs.org/icons/next.svg"
            alt="logo"
            width={80}
            height={38}
            priority
          />
        </Link>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#comments">Feedbacks</a>
          </li>
          <li className="nav-item">
            <a href="#duvidas">Dúvidas</a>
          </li>
          <li className="nav-item">
            <a href="#instagram">Posts</a>
          </li>
          <li className="nav-item">
            <a href="#footer">Contato</a>
          </li>
        </ul>
        <a
          href="https://wa.me/5545998186214?text=Olá,%20Ana!%0AVi%20a%20sua%20página%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20que%20você%20oferece.%0APoderia%20me%20fornecer%20mais%20informações?%0AObrigado!"
          className="botao-agendar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="botao-agendar-content">
            <FaWhatsapp
              style={{
                marginRight: "8px",
                width: "20px",
                height: "20px",
              }}
            />{" "}
            Agendar{" "}
          </span>
        </a>
      </nav>
    </header>
  );
}
