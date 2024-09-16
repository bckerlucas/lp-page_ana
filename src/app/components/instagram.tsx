"use client";
import DisplayInfiniteScroll from "./display-infinite-scroll";
import { FaInstagram } from "react-icons/fa";

const items = [
  {
    url: "/images/banner-site-mobile.png",
    title: "Imagem 1",
    description: "Descrição 1",
  },
  {
    url: "/images/banner-site-mobile.png",
    title: "Imagem 2",
    description: "Descrição 2",
  },
  {
    url: "/images/banner-site-mobile.png",
    title: "Imagem 3",
    description: "Descrição 3",
  },
  {
    url: "/images/banner-site-mobile.png",
    title: "Imagem 4",
    description: "Descrição 4",
  },
];

export default function SectionInstagram() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <a
          href="https://instagram.com/elementoPuro"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E4405F" }} // Cor padrão do Instagram
        >
          <FaInstagram size={30} />
        </a>
        <h2>Siga nosso Instagram @ana</h2>
      </div>
      <DisplayInfiniteScroll items={items} />
    </div>
  );
}
