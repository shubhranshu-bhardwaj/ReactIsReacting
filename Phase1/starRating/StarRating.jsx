// Reusable Star Rating
import { useState } from 'react'

const StarRating = ({
    max = 5,
    value = 0,
    onChange
}) => {

    const [hover, setHover] = useState(0)
    const handleRating = (rate) => {
        onChange(value === rate ? 0 : rate)
    }
    const stars = Array.from(
        { length: max }, (_, index) => index + 1
    )
    const displayRating = hover || value

    return (
        <div>
            <div
                onMouseLeave={() => setHover(0)}
                style={{
                    fontSize: '35px'
                }}
            >
                {
                    stars.map((star) => (
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

export default StarRating