"use client";
import { useState, useEffect, useRef } from "react";
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
  const [displayItems, setDisplayItems] = useState<DisplayItem[]>([]); // Itens exibidos no carrossel
  const [itemsToShow, setItemsToShow] = useState(3); // Número de itens visíveis
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado de transição
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para atualizar o número de itens com base na largura da janela
    const updateItemsToShow = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();

    // Inicializar displayItems com a sequência de itens + 1 adicional
    setDisplayItems([
      ...items.slice(0, itemsToShow),
      items[itemsToShow % items.length], // Adiciona um item extra no final
    ]);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, [items, itemsToShow]);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      carouselRef.current!.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current!.style.transform = `translateX(-${
        100 / (itemsToShow + 0) // Considerando o item adicional
      }%)`;

      setTimeout(() => {
        // Realoca o primeiro item para o final da lista e ajusta o estado
        setDisplayItems((prevItems) => [
          ...prevItems.slice(1),
          items[
            (items.indexOf(prevItems[prevItems.length - 1]) + 1) % items.length
          ],
        ]);
        carouselRef.current!.style.transition = "none";
        carouselRef.current!.style.transform = "translateX(0)";
        setIsTransitioning(false);
      }, 500);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      carouselRef.current!.style.transition = "none";
      carouselRef.current!.style.transform = `translateX(-${
        100 / (itemsToShow + 0) // Considerando o item adicional
      }%)`;

      // Adiciona o último item ao início da lista
      setDisplayItems((prevItems) => [
        items[(items.indexOf(prevItems[0]) - 1 + items.length) % items.length],
        ...prevItems.slice(0, -1),
      ]);

      setTimeout(() => {
        carouselRef.current!.style.transition = "transform 0.5s ease-in-out";
        carouselRef.current!.style.transform = "translateX(0)";
        setIsTransitioning(false);
      }, 0);
    }
  };

  return (
    <div className="carousel">
      <button className="arrow-left" onClick={goToPrevious}>
        <MdArrowBack />
      </button>

      <div
        className="carousel-content"
        ref={carouselRef}
        style={{
          display: "flex",
          transform: "translateX(0)",
          width: `${(displayItems.length / (itemsToShow + 0)) * 100}%`, // Ajusta o width para considerar o item extra
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              flex: `0 0 ${100 / (itemsToShow + 0)}%`, // Ajusta o tamanho dos itens
            }}
          >
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
