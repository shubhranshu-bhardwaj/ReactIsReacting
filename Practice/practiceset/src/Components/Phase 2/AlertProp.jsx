import React from 'react'
import Alert from './Alert'

const AlertProp = () => {
    return (
        <div>
            <Alert type="success">Form submitted successfully!</Alert>
            <Alert type="error">Something went wrong!</Alert>
            <Alert type="warning">Please check your inputs.</Alert>
        </div>
    )
}

export default AlertProp