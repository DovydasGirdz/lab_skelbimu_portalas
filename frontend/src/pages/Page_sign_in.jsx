import React from "react"
import Header from "../components/Header.jsx"

const Page_sign_in = function (props)
{
    // props

    const set_state_page = props.set_state_page

    // refs

    const ref_input_username = React.useRef()
    const ref_input_password = React.useRef()
    //

    return <>

        <Header set_state_page={set_state_page}></Header>

        <main
            style=
            {
                {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "5rem"
                }
            }>

            <div style={{padding: "2rem"}}>PAGE SIGN IN</div>

            <div>Username: </div>
            <input type="text" ref={ref_input_username}></input>

            <div>Password: </div>
            <input type="password" ref={ref_input_password}></input>

            <button
                onClick=
                {
                    function ()
                    {
                        const username = ref_input_username.current.value
                        const password = ref_input_password.current.value

                        alert(username + " " + password)
                    }
                }
            >
                Sign In
            </button>
        </main>
    </>

}

export default Page_sign_in