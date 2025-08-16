/*
Page Title Updater
Requirements:
Input field to type your name.
Whenever the name changes, update the browser tab title to Hello, [name]!.
Initially, the title should be "Welcome".
*/

import React, { useEffect, useState } from 'react'

const TitleChanger = () => {

    const [name, setName] = useState('');

    useEffect(() => {

        if (name.trim() === '') {
            document.title = 'Welcome'
        }
        else {
            document.title = `Hello, ${name}`
        }

    }, [name])

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter name'
            />
        </>
    )
}

export default TitleChanger