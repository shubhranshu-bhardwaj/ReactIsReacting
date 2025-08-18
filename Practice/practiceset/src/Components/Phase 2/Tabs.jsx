/*
Tabs Component 
Accepts multiple tab components as children. 
Clicking on a tab should show its content.
*/

import React, { useState } from "react";

const Tabs = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            {/* Tab Headers */}
            <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
                {children.map((child, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            padding: "10px 20px",
                            cursor: "pointer",
                            border: "none",
                            borderBottom: activeIndex === index ? "3px solid blue" : "none",
                            background: "transparent",
                            fontWeight: activeIndex === index ? "bold" : "normal",
                        }}
                    >
                        {child.props.title}
                    </button>
                ))}
            </div>

            {/* Active Tab Content */}
            <div style={{ padding: "20px" }}>
                {children[activeIndex]}
            </div>
        </div>
    );
};

export default Tabs;