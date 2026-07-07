// Create an image carousel that will auto play
import { useEffect, useState } from "react"

const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1045/600/300",
];

const AutoPlayCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h3>Autoplay Carousel</h3>
            <div>
                <img
                    src={images[activeIndex]}
                    alt={`image ${activeIndex}`}
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

export default AutoPlayCarousel