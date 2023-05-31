import React from "react"
import { set_state_alert_message } from "../Alert.jsx"
import { set_state_overlay_message } from "../Overlay.jsx"
import Header from "../components/header/Header.jsx"
import service_kategorijos_create from "../services/service_kategorijos_create.mjs"

const Page_kategorijos = function ()
{
    // refs

    const ref_input_pavadinimas = React.useRef()

    //

    return <>

        <Header
        ></Header>

        <main
            style=
            {
                {
                    width: "fit-content",
                    padding: "1em",
                    border: "0",
                    margin: "1em auto 0 auto",
                    textAlign: "left",
                    backgroundColor: "rgb(240, 240, 240)"
                }
            }
        >
            <div>Pavadinimas:</div>

            <input
                ref={ref_input_pavadinimas}
                type="text"
            ></input>

            <button
                style=
                {
                    {
                        display: "block",
                        margin: "1em 0 0 0",
                    }
                }
                onClick=
                {
                    async function ()
                    {
                        // inputs
                        const pavadinimas = ref_input_pavadinimas.current.value

                        // service_kategorijos_create

                        set_state_overlay_message("service_kategorijos_create...")

                        const result_of_service_kategorijos_create =
                            await service_kategorijos_create(
                                pavadinimas
                            )
                        
                        set_state_overlay_message(null)

                        // error:
                        if (result_of_service_kategorijos_create.status === "error")
                        {
                            set_state_alert_message(
                                result_of_service_kategorijos_create.message
                                )
                            return
                        }

                        // success:

                        set_state_alert_message("Success")
                    }
                }
            >Kurti kategorija</button>

        </main>
    </>
}

export default Page_kategorijos