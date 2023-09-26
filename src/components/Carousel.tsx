import { useState, useEffect } from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const CarouselContent = styled.div`
    position: relative;
    width: 100%;
`

const Img = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain; /* Add this line */
`

const ButtonPrev = styled.button`
    position: absolute;
    top: 50%;
    left: -1rem;
    border: none;
    background-color: transparent;
    // padding: 0.5rem;
    // border: 1px solid #242424;
    // border-radius: 6px;
    cursor: pointer;
`

const ButtonNext = styled.button`
    position: absolute;
    top: 50%;
    right: -1rem;
    border: none;
    background-color: transparent;
    // padding: 0.5rem;
    // border: 1px solid #242424;
    // border-radius: 6px;
    cursor: pointer;
`

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    './images/ogradjivanje/ograda_01.jpg',
    './images/ogradjivanje/ograda_02.jpg',
    './images/hero/hero_01.jpg',
    './images/hero/hero_02.jpg',
    './images/asortiman/wire.jpg',
    './images/asortiman/wire_1.jpg',
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images.length]);

  return (
    <CarouselContent>
      <ButtonPrev className="prev" onClick={prevImage}><FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" /></ButtonPrev>
      <Img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      <ButtonNext className="next" onClick={nextImage}><FontAwesomeIcon icon={faCircleArrowRight} size="2xl" /></ButtonNext>
    </CarouselContent>
  );
};


