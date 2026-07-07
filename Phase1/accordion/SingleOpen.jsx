// Create a single open accordion

import { useState } from "react";

const SingleOpen = () => {

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

    const [openId, setOpenId] = useState(null)
    const handleToggle = (id) => {
        setOpenId((prevId) => prevId === id ? null : id)
    }

    return (
        <div>
            <h2>Single Open Accordion</h2>
            {
                faqData.map((faq) => (
                    <div key={faq.id}>
                        <button onClick={() => handleToggle(faq.id)}>
                            {faq.question}
                        </button>
                        {
                            openId === faq.id && (
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

export default SingleOpen