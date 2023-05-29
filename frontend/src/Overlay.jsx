import React from "react"

export var set_state_overlay_message

const Overlay = function ()
{
    // states

    const array = React.useState(null)
    const state_overlay_message = array[0] 
    set_state_overlay_message = array[1]

    ///

    if (state_overlay_message === null) return

    ///

    return <div
        style=
        {
            {
                position: "fixed",
                inset: "0 0 0 0",
                backgroundColor: "rgba(80, 80, 80, 0.80)"
            }
        }>
        {state_overlay_message}
    </div>
}

export default { Overlay, set_state_overlay_message }