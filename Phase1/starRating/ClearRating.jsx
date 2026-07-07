// Create a star rating, on toggle remove rating
import { useState } from 'react'

const STARS = [1, 2, 3, 4, 5]

const ClearRating = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleRating = (rate) => {
        setRating((prev) => prev === rate ? 0 : rate)
    }

    const displayRating = hover > 0 ? hover : rating

    return (
        <div>
            <h3>Rating with toggle</h3>
            <div
                onMouseLeave={() => setHover(0)}
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

export default ClearRating