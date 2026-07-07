import { useState } from 'react'

const NestedAccordion = ({ faqs }) => {

    const [openId, setOpenId] = useState(null)
    const handleToggle = (id) => {
        setOpenId((prevId) => prevId === id ? null : id)
    }

    return (
        <div>
            {
                faqs.map((faq) => (
                    <div key={faq.id}>
                        <button onClick={() => handleToggle(faq.id)}>
                            {faq.question}
                        </button>
                        {
                            openId === faq.id && (
                                <div>
                                    <p>
                                        {faq.answer}
                                    </p>
                                    {
                                        faq.children && faq.children.length > 0 && (
                                            <NestedAccordion
                                                faqs={faq.children}
                                            />
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default NestedAccordion