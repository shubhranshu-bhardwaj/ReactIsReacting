/*
Layout Component
Requirement
Make a Layout component that accepts header, sidebar, and content as props.
Render them in a structured way.
*/

import React from 'react'

const Layout = ({ header, sidebar, content }) => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <aside style={{ width: "200px", background: "#f0f0f0", padding: "10px" }}>
                {sidebar}
            </aside>
            <main style={{ flex: 1, padding: "20px" }}>
                {header}
                {content}
            </main>
        </div>
    )
}

export default Layout