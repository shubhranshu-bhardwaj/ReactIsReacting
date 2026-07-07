// Create a tab component that will store the tab locally

import { useEffect, useState } from "react"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const tabs = [
    {
        id: 'Home',
        label: 'Home',
        component: Home
    },
    {
        id: 'About',
        label: 'About',
        component: About
    },
    {
        id: 'Contact',
        label: 'Contact',
        component: Contact
    },
]

const StoreTab = () => {

    const [activeTab, setActiveTab] = useState(() => {
        const savedTab = localStorage.getItem('tab')
        return savedTab ? savedTab : tabs[0].id
    })

    useEffect(() => {
        localStorage.setItem('tab', activeTab)
    }, [activeTab])

    const currentTab = tabs.find((tab) => tab.id === activeTab)
    const Component = currentTab.component

    return (
        <div>
            <h2>Tabs with saved loacally</h2>
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
                                style={{
                                    backgroundColor: activeTab === tab.id ? 'blue' : 'white'
                                }}
                                onClick={() => setActiveTab(tab.id)}
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

export default StoreTab