import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ImageCarousel = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) => 
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="carousel">

            <button onClick={prevImage} className="carousel-btn left">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <img 
                src={`/images/${images[currentIndex]}`} 
                alt={alt} 
                className="carousel-image"
            />

            <button onClick={nextImage} className="carousel-btn right">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>


            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
};

export default ImageCarousel;