// Create an Image Carousel that pause on hover
import { useEffect, useRef, useState } from 'react'

const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1045/600/300",
];

const PausePlay = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const timeOutRef = useRef(null)

    const startAutoPlay = () => {
        stopAutoPlay()
        timeOutRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 3000)
    }
    const stopAutoPlay = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
            timeOutRef.current = null
        }
    }

    useEffect(() => {
        startAutoPlay()

        return () => {
            stopAutoPlay()
        }
    }, [activeIndex])

    return (
        <div>
            <h3>Pause on hover</h3>
            <div
                onMouseEnter={stopAutoPlay}
                onMouseLeave={startAutoPlay}
                style={{
                    display: 'inline-block'
                }}
            >
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
                {
                    images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                margin: "5px",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: activeIndex === index ? "black" : "lightgray",
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PausePlay