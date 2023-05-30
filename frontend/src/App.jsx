import React from "react"
import Overlay from "./Overlay.jsx"
import Alert from "./Alert.jsx"
import Page_sign_up from "./pages/Page_sign_up.jsx"
import Page_sign_in from "./pages/Page_sign_in.jsx"

var state_page
export var set_state_page

const App = function ()
{
    // states

    [state_page, set_state_page] = React.useState("Page_sign_in")

    //

    return <>
        {
            function ()
            {
                if (state_page === "Page_sign_in")
                {
                    return <Page_sign_in
                    ></Page_sign_in>
                }
                if (state_page === "Page_sign_up")
                {
                    return <Page_sign_up
                    ></Page_sign_up>
                }
            }()
        }

        <Overlay></Overlay>

        <Alert></Alert>
    </>
}

export default App