// Create an accordion where we can open and close all on click of button

import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library."
    },
    {
        id: 2,
        question: "What is useState?",
        answer: "useState is a React Hook."
    },
    {
        id: 3,
        question: "What is Virtual DOM?",
        answer: "Virtual DOM improves performance."
    }
];

const OpenAll = () => {

    const [openIds, setOpenIds] = useState([])

    const handleToggle = (id) => {
        setOpenIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((faq) => faq !== id)
            }
            return [...prev, id]
        })
    }
    const handleOpenAll = () => {
        setOpenIds(faqData.map((faq) => faq.id))
    }
    const handleCloseAll = () => {
        setOpenIds([])
    }

    return (
        <div>
            <h2>Accordion with Open and Close all</h2>
            <button onClick={handleOpenAll}>OPen All</button>
            <button onClick={handleCloseAll}>Close All</button>
            {
                faqData.map((faq) => (
                    <div key={faq.id}>
                        <button onClick={() => handleToggle(faq.id)}>
                            {faq.question}
                        </button>
                        {
                            openIds.includes(faq.id) && (
                                <p>
                                    {faq.answer}
                                </p>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default OpenAll