const ChildTab = ({ tabs, activeTab, onTabChange }) => {

    const currentTab = tabs.find((tab) => tab.id === activeTab)
    const Component = currentTab.component

    return (
        <div>
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
                                onClick={() => onTabChange(tab.id)}
                                style={{
                                    backgroundColor: tab.id === activeTab ? 'blue' : 'white',
                                    cursor: 'pointer'
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

export default ChildTab