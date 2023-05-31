import React from "react"
import service_skelbimai_find from "../../services/service_skelbimai_find.mjs"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import Skelbimai_card from "./Card/Skelbimai_card.jsx"


const Page_visi_skelbimai = function ()
{
    // states 

    const [state_skelbimai, set_state_skelbimai] = React.useState([])

    //

    const fetch_skelbimai = async function ()
    {
        // service_skelbimai find

        set_state_overlay_message("service_skelbimai_find...")

        const result_of_service_skelbimai_find =
            await service_skelbimai_find()

        set_state_overlay_message(null)

        // error:

        if (result_of_service_skelbimai_find.status === "error")
        {
            set_state_alert_message(
                result_of_service_skelbimai_find.message
            )
            return
        }

        // success

        set_state_skelbimai(result_of_service_skelbimai_find.skelbimai)
    }


    React.useEffect(
        function ()
        {
            fetch_skelbimai()
        },
        [])

    return <div
        style=
        {
            {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                margin: "2rem"
            }
        }
    >
        {
            function ()
            {
                const elements = []

                for (var i = 0; i < state_skelbimai.length; i++)
                {
                    // const pavadinimas = state_skelbimai[i].pavadinimas
                    // const kategorija = state_skelbimai[i].kategorija
                    // const aprasas = state_skelbimai[i].aprasas
                    // const kaina = state_skelbimai[i].kaina
                    // const image_base64 = state_skelbimai[i].image_base64

                    elements.push(
                        <Skelbimai_card
                            autorius={state_skelbimai[i].autorius}
                            pavadinimas={state_skelbimai[i].pavadinimas}
                            kategorija = {state_skelbimai[i].kategorija}
                            aprasas = {state_skelbimai[i].aprasas}
                            kaina = {state_skelbimai[i].kaina}
                            image_base64 = {state_skelbimai[i].image_base64}
                        ></Skelbimai_card>
                    )
                }

return elements
            }()
        }
    </div >
}

export default Page_visi_skelbimai