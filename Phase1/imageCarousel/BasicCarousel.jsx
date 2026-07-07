// Create an image Carousel with prev and next button
import { useState } from "react"

const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1045/600/300",
];

const BasicCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length)
    }
    const handlePrev = () => {
        setActiveIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }

    return (
        <div>
            <h2>Basic Image Carousel</h2>
            <img
                src={images[activeIndex]}
                alt={`image ${activeIndex}`}
            />
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default BasicCarousel