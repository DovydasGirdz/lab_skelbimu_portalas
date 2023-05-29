import React from "react"

const Overlay = function ()
{
    // states

    const [state_message, set_state_message] = React.useState(null)

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

export { set_state_message }
export default Overlay