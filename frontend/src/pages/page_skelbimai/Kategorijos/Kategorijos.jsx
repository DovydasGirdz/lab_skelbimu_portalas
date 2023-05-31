import React from "react"
import { set_state_alert_message } from "../../../Alert.jsx"
import { set_state_overlay_message } from "../../../Overlay.jsx"
import service_kategorijos_find from "../../../services/service_kategorijos_find.mjs"
import Kategorijos_list from "./Kategorijos_list.jsx"

const Kategorijos = function (props)
{
    // states

    const [state_kategorijos, set_state_kategorijos] = React.useState([])

    // refs

    const ref_kategorija = props.ref_kategorija

    return <>
        <div>Kategorijos:</div>

        <Kategorijos_list
            ref_kategorija={ref_kategorija}
            state_kategorijos={state_kategorijos}
        ></Kategorijos_list>

        <button
            onClick=
            {
                async function ()
                {
                    set_state_overlay_message("service_kategorijos_find...")

                    const result_of_service_kategorijos_find = await service_kategorijos_find()

                    set_state_overlay_message(null)

                    // error:
                    if (result_of_service_kategorijos_find.status === "error")
                    {
                        set_state_alert_message(
                            result_of_service_kategorijos_find.message
                        )
                        return
                    }

                    const kategorijos = result_of_service_kategorijos_find.kategorijos
                    set_state_kategorijos(kategorijos)
                }
            }
        >Update</button>
    </>

}



export default Kategorijos