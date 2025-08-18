// Sending props from Parent to Child from PropCard to Card

import React from 'react'
import Card from './Card'

const PropCard = () => {
    return (
        <div>
            <Card>
                <p>Getting Props</p>
                <p>This is inside the Card component.</p>
            </Card>

            <Card>
                <button>Click Me</button>
            </Card>
        </div>
    )
}

export default PropCard