import { useState, useEffect } from 'react';

const Carrusel = () => {
  const slides = [
    { id: 1, src: "./img/HTML & CSS.jpg", instituto: "Coder House", nombre: "Html y Css" },
    { id: 2, src: "./img/JAVASCRIPT.png", instituto: "Coder House", nombre: "Javascript" },
    { id: 3, src: "./img/REACT.png", instituto: "Coder House", nombre: "React" },
    { id: 4, src: "./img/NODEJS.png", instituto: "Coder House", nombre: "Node" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl overflow-hidden rounded-xl backdrop-blur-md border border-neutral-300 shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full flex flex-col items-center justify-center px-4 py-6 text-center"
            >
              <img
                src={slide.src}
                alt={slide.nombre}
                onClick={() => setSelectedImage(slide)}
                onError={(e) => (e.target.src = "/img/fallback.png")}
                className={`cursor-pointer w-full max-w-xs object-contain transition-opacity duration-700 transform ${
                  currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } hover:scale-105`}
              />
              <p className="mt-3 text-sm font-medium text-white">{slide.nombre}</p>
            </div>
          ))}
        </div>

        {/* Botones */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-black scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Modal de imagen ampliada */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-400"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.nombre}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
            />
            <p className="mt-4 text-center text-white font-medium">{selectedImage.nombre}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrusel;