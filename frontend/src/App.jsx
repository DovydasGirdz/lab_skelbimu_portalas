import React from 'react'
import Overlay from './Overlay.jsx'
import Page_sign_in from './pages/Page_sign_in.jsx'
import Page_sign_up from './pages/Page_sign_up.jsx'

const App = function()
{
    // states

    const [state_page, set_state_page] = React.useState("Page_sign_in")

    //

    return <>
    {
        function()
        {
            if(state_page === "Page_sign_in")
            {
                return <Page_sign_in set_state_page={set_state_page}/>
            }
             
            if(state_page === "Page_sign_up")
            {
                return <Page_sign_up set_state_page={set_state_page}/>
            } 
        }()
    }

    <Overlay></Overlay>
    </>
}

export default App