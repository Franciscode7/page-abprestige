

// Supongamos que tienes estas 3 imágenes en assets
import img1 from './images/Cimg1.webp';
import img2 from './images/Cimg2.webp';
import img3 from './images/Cimg3.webp';
import img4 from './images/Cimg4.webp';
import img5 from './images/Cimg5.webp';
import img6 from './images/Cimg6.webp';
import React, { useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  const images = [
    { src: img1, label: "Limpieza Residencial" },
    { src: img2, label: "Oficinas y Comercio" },
    { src: img3, label: "Post-Construcción" },
    { src: img4, label: "Otras Servicios" },
    { src: img5, label: "Diferenciación" },
    { src: img6, label: "Estetica" },
  ];

  const handleNext = () => {
    if (carouselRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
      
      // Si estamos en la última imagen (o muy cerca del final)
      if (scrollLeft + offsetWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollTo({ left: scrollLeft + offsetWidth, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
      
      // Si estamos en la primera imagen
      if (scrollLeft <= 10) {
        carouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollTo({ left: scrollLeft - offsetWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    }
  };

  return (
  <> {/* <--- Agregamos este Fragment al inicio */}
    <div className="max-w-6xl bg-white mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-950 text-center mb-8 italic">
        Resultados con <span className="text-pink-700">Prestigio</span>
      </h2>

      <div className="relative group">
        <div 
          ref={carouselRef}
          className="carousel w-full rounded-3xl shadow-xl h-[450px] scroll-smooth snap-x snap-mandatory overflow-x-hidden"
        >
          {images.map((img, index) => (
            <div key={index} className="carousel-item relative w-full snap-center">
              <img src={img.src} className="w-full object-cover" alt={img.label} />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <span className="text-white text-xl font-medium border-l-4 border-pink-600 pl-4 uppercase tracking-widest">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Anterior */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white/20 border-none text-white hover:bg-pink-700 backdrop-blur-md transition-all active:scale-90"
        >
          ❮
        </button>

        {/* Botón Siguiente */}
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white/20 border-none text-white hover:bg-pink-700 backdrop-blur-md transition-all active:scale-90"
        >
          ❯
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => scrollToIndex(index)}
            className="w-10 h-1.5 rounded-full bg-gray-300 hover:bg-pink-600 transition-all duration-300 focus:bg-pink-700"
          />
        ))}
      </div>
    </div>

    {/* SEGUNDO BLOQUE (Ahora es hermano dentro del fragment) */}
    <div className="w-full flex flex-col bg-white items-center pt-0 pb-10 px-6">
      <div className="w-24 h-1 bg-pink-700/20 rounded-full mb-8"></div>

      <div className="text-center max-w-2xl">
        <p className="text-gray-600 text-lg mb-6">
          ¿Te gusta lo que ves? Explora nuestra colección completa de transformaciones.
        </p>
        
        <a 
          href="/portafolio" 
          className="group btn btn-outline btn-lg border-2 border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white px-12 rounded-full transition-all duration-300"
        >
          <span className="font-bold tracking-wide">Ver Portafolio</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </> // <--- Cerramos el Fragment
);


};

export default Carousel;