import React from 'react'
import Tabs from './Tabs'
import TabsChild from './TabsChild'

const TabsProp = () => {
    return (
        <>
            <Tabs>
                <TabsChild title="Home">
                    <h2>Welcome Home!</h2>
                    <p>This is the Home tab content.</p>
                </TabsChild>
                <TabsChild title="About">
                    <h2>About Us</h2>
                    <p>This tab tells you about our company.</p>
                </TabsChild>
                <TabsChild title="Contact">
                    <h2>Contact</h2>
                    <p>Reach us at contact@example.com.</p>
                </TabsChild>
            </Tabs>
        </>
    )
}

export default TabsProp