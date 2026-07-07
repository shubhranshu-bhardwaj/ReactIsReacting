// Create a Tab components

import { useState } from "react"
import Home from './Home'
import About from './About'
import Contact from './Contact'

const tabs = [
    {
        id: 'Home',
        label: 'Home',
        content: Home
    },
    {
        id: 'About',
        label: 'About',
        content: About
    },
    {
        id: 'Contact',
        label: 'Contact',
        content: Contact
    },
]

const BasicTabs = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id)
    const currentTab = tabs.find((tab) => tab.id === activeTab)
    const Component = currentTab.content

    return (
        <div>
            <h2>Basic Tabs</h2>
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

export default BasicTabs