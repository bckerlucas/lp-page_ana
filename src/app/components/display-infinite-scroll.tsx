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
  const [displayItems, setDisplayItems] = useState<DisplayItem[]>([]);
  const [itemsToShow, setItemsToShow] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();

    if (items && items.length > 0) {
      setDisplayItems([
        items[items.length - 1], // Clona o último item no início
        ...items.slice(0, itemsToShow + 1),
      ]);
      if (carouselRef.current) {
        carouselRef.current.style.width = `${(itemsToShow + 1) * 100}%`;
      }
    }

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, [items, itemsToShow]);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      carouselRef.current!.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current!.style.transform = `translateX(-${
        100 / itemsToShow
      }%)`;

      setTimeout(() => {
        setDisplayItems((prevItems) => [
          ...prevItems.slice(1),
          prevItems[1], // Move o segundo item (originalmente o primeiro) para o final
        ]);
        carouselRef.current!.style.transition = "none";
        carouselRef.current!.style.transform = "translateX(0)";
        carouselRef.current!.style.width = `${
          (displayItems.length / itemsToShow) * 100
        }%`;
        setIsTransitioning(false);
      }, 500);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      carouselRef.current!.style.transition = "none";
      carouselRef.current!.style.transform = `translateX(-${
        100 / itemsToShow
      }%)`;

      setDisplayItems((prevItems) => [
        prevItems[prevItems.length - 2], // Move o penúltimo item (originalmente o último) para o início
        ...prevItems.slice(0, -1),
      ]);

      setTimeout(() => {
        carouselRef.current!.style.transition = "transform 0.5s ease-in-out";
        carouselRef.current!.style.transform = "translateX(0)";
        carouselRef.current!.style.width = `${
          (displayItems.length / itemsToShow) * 100
        }%`;
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
          width: `${(displayItems.length / itemsToShow) * 100}%`,
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              flex: `0 0 ${100 / itemsToShow}%`,
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
