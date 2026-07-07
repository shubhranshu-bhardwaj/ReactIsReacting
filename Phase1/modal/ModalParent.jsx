// Modal Parent that will control the Modal

import { useState } from "react"
import ReuseModal from "./ReuseModal"
import ReusableModal from "./ReusableModal"

const ModalParent = () => {

    const [showUser, setShowUser] = useState(false)
    const [showSetting, setShowSetting] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div>
            <h2>User Modal</h2>
            <button onClick={() => setShowUser(true)}>Show User</button>
            <h2>Setting Modal</h2>
            <button onClick={() => setShowSetting(true)}>Show Setting</button>
            <h2>Details Modal</h2>
            <button onClick={() => setShowDetails(true)}>Show Details</button>
            <ReuseModal
                isOpen={showUser}
                onClose={() => setShowUser(false)}
            >
                <h3>User Profile</h3>
            </ReuseModal>

            <ReuseModal
                isOpen={showSetting}
                onClose={() => setShowSetting(false)}
            >
                <h3>User Setting</h3>
            </ReuseModal>

            <ReusableModal
                isOpen={showDetails}
                onClose={() => setShowDetails(false)}
            >
                <h2>Details</h2>
            </ReusableModal>
        </div>
    )
}

export default ModalParent