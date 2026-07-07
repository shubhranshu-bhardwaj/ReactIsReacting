// Parent for reusable star rating
import { useState } from 'react'
import StarRating from './StarRating'

const Rating = () => {

    const [rating, setRating] = useState(0)

    return (
        <div>
            <h3>Reusable Star Rating</h3>
            <StarRating
                max={5}
                value={rating}
                onChange={setRating}
            />
        </div>
    )
}

export default Rating