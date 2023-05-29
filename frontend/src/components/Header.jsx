import React from "react"

const Header = function (props)
{
    // props

    const set_state_page = props.set_state_page

    return <header style=
        {
            {
                padding: "0",
                margin: "0",
                width: "100%",
                height: "4rem",
                backgroundColor: "lightblue",
                borderBottom: "2px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
            }
        }>
        <button
            onClick=
            {
                function ()
                {
                    set_state_page("Page_sign_up")
                }
            }
        >Sign Up</button>

        <button
            onClick=
            {
                function ()
                {
                    set_state_page("Page_sign_in")
                }
            }
        >Sign In</button>
    </header>
}

export default Header