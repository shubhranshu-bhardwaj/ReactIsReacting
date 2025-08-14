/*
Like Button

Requirements:

Show a heart ❤️ icon and a count of likes.

Clicking the button increases the count by 1 each time.

Bonus: Change the heart color to red after first click.
*/

import React, { useState } from 'react'

const Like = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
         setLikeCount(prev => prev + 1);
        setLiked(true)
    }

    return (
        <>
            <button onClick={handleLike}>
                <span style={{ color: liked ? 'red' : 'black' }}>♥</span>
                {likeCount}
            </button>
        </>
    )
}

export default Like