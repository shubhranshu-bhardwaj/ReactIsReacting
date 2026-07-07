// Create a star rating with hover effect
import { useState } from "react"

const STARS = [1, 2, 3, 4, 5]

const HoverRating = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    const displayRating = hover > 0 ? hover : rating;

    return (
        <div>
            <h3>Star Rating with Hover Effect</h3>
            <div
                style={{
                    fontSize: '35px'
                }}
                
            >
                {
                    STARS.map((star) => (
                        <span
                            key={star}
                            onClick={() => handleRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            style={{
                                cursor: 'pointer',
                                color: star <= displayRating ? 'gold' : 'lightgray'
                            }}
                        >
                            ★
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default HoverRating