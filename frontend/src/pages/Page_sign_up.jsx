import React from "react"
import Header from "../components/Header.jsx"
import { set_state_overlay_message } from "../Overlay.jsx"
import service_sign_up from "../services/service_sign_up.mjs"

const Page_sign_up = function (props)
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

            <div style={{padding: "2rem"}}>PAGE SIGN UP</div>

            <div>Username: </div>
            <input type="text" ref={ref_input_username}></input>

            <div>Password: </div>
            <input type="password" ref={ref_input_password}></input>

            <button
                onClick=
                {
                    async function ()
                    {
                        const username = ref_input_username.current.value
                        const password = ref_input_password.current.value

                        set_state_overlay_message("service_sign_up...")

                        const result_of_service_sign_up = await service_sign_up(username, password)

                        set_state_overlay_message(null)
                    }
                }
            >
                Sign Up
            </button>
        </main>
    </>

}

export default Page_sign_up