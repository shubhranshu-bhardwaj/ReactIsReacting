// Create a tab component with disabled tab

import { useState } from "react"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const tabs = [
    {
        id: 'Home',
        label: 'Home',
        componet: Home,
        disabled: false
    },
    {
        id: 'About',
        label: 'About',
        componet: About,
        disabled: true
    },
    {
        id: 'Contact',
        label: 'Contact',
        componet: Contact,
        disabled: false
    },
]

const DisabledTab = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id)
    const currentTab = tabs.find((tab) => tab.id === activeTab)
    const Component = currentTab.componet

    return (
        <div>
            <h2>Tabs with Disabled Tab</h2>
            <div
                style={{
                    display: 'flex',
                    gap: '8px'
                }}
            >
                {
                    tabs.map((tab) => (
                        <div key={tab.id}>
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                disabled={tab.disabled}
                                style={{
                                    backgroundColor: activeTab === tab.id ? 'blue' : 'white',
                                    cursor: tab.disabled ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {tab.label}
                            </button>
                        </div>
                    ))
                }
            </div>
            <div>
                <Component />
            </div>
        </div>
    )
}

export default DisabledTab