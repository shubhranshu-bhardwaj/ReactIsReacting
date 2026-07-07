// Create a nested accordion

import NestedAccordion from "./NestedAccordion";

const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library.",
        children: [
            {
                id: 11,
                question: "Who created React?",
                answer: "Meta created React.",
            },
            {
                id: 12,
                question: "Why use React?",
                answer: "For building interactive UIs.",
                children: [
                    {
                        id: 121,
                        question: "What is JSX?",
                        answer: "JSX is JavaScript XML.",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        question: "What is useState?",
        answer: "A React Hook.",
    },
];


const Accordion = () => {
    return (
        <div>
            <h3>Nested Accordion</h3>
            <NestedAccordion
                faqs={faqData}
            />
        </div>
    )
}

export default Accordion