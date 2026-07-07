// Create a basic star rating
import { useState } from "react"
const STARS = [1, 2, 3, 4, 5]

const BasicRating = () => {

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div>
            <h3>Basic Star Rating</h3>
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
                            style={{
                                cursor: 'pointer',
                                color: star <= rating ? 'gold' : 'lightgray'
                            }}
                        >
                            ★
                        </span>
                    ))
                }
            </div>
            <h4>Selected Rating: {rating}</h4>
        </div>
    )
}

export default BasicRating