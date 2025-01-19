'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Carousel.module.css'
import { carouselImages } from '../constants/images'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.carousel} aria-label="Galeria de Imagens">
      <div className={styles.carouselContainer}>
        {carouselImages.map((slide, index) => (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              width={800}
              height={400}
              priority={index === 0}
              className={styles.carouselImage}
            />
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className={`${styles.carouselButton} ${styles.prev}`}
          aria-label="Slide anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.carouselIcon}><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <button
          onClick={nextSlide}
          className={`${styles.carouselButton} ${styles.next}`}
          aria-label="Próximo slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.carouselIcon}><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div className={styles.indicators}>
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

