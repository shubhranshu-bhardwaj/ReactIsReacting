// Create an accordion with multiple open at same time

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

const MultiOpen = () => {

    const [openIds, setOpenIds] = useState([])

    const handleToggle = (id) => {
        setOpenIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((faq) => faq !== id)
            }
            return [...prev, id]
        })
    }

    return (
        <div>
            <h2>Multiple Accordion Open</h2>
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

export default MultiOpen