// Create an image carousel with left and right arrow key access
import { useEffect, useState } from "react"

const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1045/600/300",
];


const KeyAccess = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length)
    }
    const handlePrev = () => {
        setActiveIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                handleNext()
            }
            else if (e.key === 'ArrowLeft') {
                handlePrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <div>
            <h3>Access Carousel with key</h3>
            <div>
                <img
                    src={images[activeIndex]}
                    alt={`img ${activeIndex + 1}`}
                    style={{
                        width: "600px",
                        height: "300px",
                        objectFit: "cover"
                    }}
                />
            </div>
            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default KeyAccess