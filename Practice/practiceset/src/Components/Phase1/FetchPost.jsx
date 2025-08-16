/*
Fetch Posts from API
Requirements:
On component mount, fetch posts from
https://jsonplaceholder.typicode.com/posts
Show the first 5 post titles in a list.
Show "Loading..." while fetching.
Hints:
useEffect with empty dependency array.
Use fetch + setState for posts.
*/

import React, { useEffect, useState } from 'react'

const FetchPost = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.slice(0, 5))
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });

    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default FetchPost