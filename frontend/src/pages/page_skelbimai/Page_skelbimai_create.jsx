import React from "react"
import service_skelbimas_create from "../../services/service_skelbimas_create.mjs"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import Kategorijos from "./Kategorijos/Kategorijos.jsx"
import Image_base64 from "./Kategorijos/Image_base64.jsx"

const Page_skelbimai_create = function ()
{
    // refs

    const ref_input_pavadinimas = React.useRef()

    const ref_kategorija = React.useRef()

    const ref_input_aprasas = React.useRef()

    const ref_input_kaina = React.useRef()

    const ref_image_base64 = React.useRef()

    //

    return <>
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
            <div>Pavadinimas: </div>

            <input
                ref={ref_input_pavadinimas}
                type="text"
            ></input>

            <Kategorijos
                ref_kategorija={ref_kategorija}
            ></Kategorijos>

            <div>Aprasas:</div>

            <input
                ref={ref_input_aprasas}
                type="textarea"
            ></input>

            <div>Kaina:</div>

            <input
                ref={ref_input_kaina}
                type="number"
            ></input>

            <Image_base64
                ref_image_base64={ref_image_base64}
            ></Image_base64>

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
                        const kategorija = ref_kategorija.current
                        const aprasas = ref_input_aprasas.current.value
                        const kaina = Number(ref_input_kaina.current.value)
                        const image_base64 = ref_image_base64.current.src

                        // service_create_skelbimas

                        set_state_overlay_message("service_create_skelbimas...")

                        const result_of_service_skelbimas_create =
                            await service_skelbimas_create(
                                pavadinimas,
                                kategorija,
                                aprasas,
                                kaina,
                                image_base64
                            )

                        set_state_overlay_message(null)

                        // error:

                        if (result_of_service_skelbimas_create.status === "error")
                        {
                            set_state_alert_message(
                                result_of_service_skelbimas_create.message
                            )
                            return
                        }

                        // success

                        set_state_alert_message("Skelbimas sukurtas")
                    }
                }
            >Kurti skelbima</button>
        </main>
    </>
}

export default Page_skelbimai_create