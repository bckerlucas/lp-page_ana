"use client";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "../styles/DisplayInfiniteScroll.css";

interface DisplayItem {
  url?: string;
  title?: string;
  description?: string;
}

interface DisplayInfiniteScrollProps {
  items: DisplayItem[];
}

const DisplayInfiniteScroll = ({ items }: DisplayInfiniteScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  // Função para ir para o próximo item
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Função para voltar ao item anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Função para criar um array com as imagens duplicadas no início e no final para efeito infinito
  const getItemsForDisplay = () => {
    const extendedItems = [...items, ...items, ...items];
    const startIndex = Math.max(0, currentIndex);
    return extendedItems.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="carousel">
      <button className="arrow-left" onClick={goToPrevious}>
        <MdArrowBack />
      </button>

      <div className="carousel-content">
        {getItemsForDisplay().map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="arrow-right" onClick={goToNext}>
        <MdArrowForward />
      </button>
    </div>
  );
};

export default DisplayInfiniteScroll;
