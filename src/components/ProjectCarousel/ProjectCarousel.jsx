import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

export default function ProjectCarousel({ images, title }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const hasMultiple = images.length > 1;

  const goPrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  const lightbox = isOpen ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/90 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada de ${title}`}
    >
      <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={`${title} - captura ${index + 1}`}
          className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
        />

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 bg-surface-container-high border border-outline/20 text-on-surface rounded-full p-2 hover:bg-surface-container-highest transition-colors"
          aria-label="Cerrar imagen ampliada"
        >
          <FiX size={18} />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface-container-high/80 backdrop-blur border border-outline/20 text-on-surface rounded-full p-2 hover:bg-primary hover:text-on-primary transition-colors"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-container-high/80 backdrop-blur border border-outline/20 text-on-surface rounded-full p-2 hover:bg-primary hover:text-on-primary transition-colors"
              aria-label="Siguiente imagen"
            >
              <FiChevronRight size={20} />
            </button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary' : 'w-2 bg-outline/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="relative h-64 overflow-hidden bg-surface-container-high group">
        <img
          src={images[index]}
          alt={`${title} - captura ${index + 1}`}
          onClick={() => setIsOpen(true)}
          className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface-container-lowest/60 backdrop-blur text-on-surface rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-on-primary"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-container-lowest/60 backdrop-blur text-on-surface rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-on-primary"
              aria-label="Siguiente imagen"
            >
              <FiChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-4 bg-primary' : 'w-1.5 bg-on-surface/40'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox && createPortal(lightbox, document.body)}
    </>
  );
}
