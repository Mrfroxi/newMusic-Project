import React, { useState } from 'react'
import './ControlsToggleButton.scss'
import Button from '@material-ui/core/Button'

function ControlsToggleButton(props) {
    let ButtonOne = props.defaultIcon
    let ButtonTwo = props.changeIcon
    const [buttonType, setButton] = useState(false)

    const handleChange = React.useCallback(() => {
        if (props.type === 'prev' || props.type === 'next') {
            setButton(true)
            props.onClicked(props.type, true)
        } else {
            setButton(!buttonType)
            props.onClicked(props.type, !buttonType)
        }
    },[buttonType])

    return (
        <Button
            style={props.style}
            onClick={handleChange}
            className={props.type}
        >
            {!buttonType ? ButtonOne : ButtonTwo}
        </Button>
    )
}

export default React.memo(ControlsToggleButton)
