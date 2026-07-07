// Parent to control tabs

import { useState } from "react"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import ChildTab from "./ChildTab"

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

const ControlTab = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
        <div>
            <h2>Controled Tabs</h2>
            <ChildTab
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </div>
    )
}

export default ControlTab