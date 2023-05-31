import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_kategorijos_delete from "../../services/service_kategorijos_delete.mjs"
import { update } from "./List.jsx"

const List_line = function (props)
{
    // props

    const _id = props._id
    const pavadinimas = props.pavadinimas

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em",
                textAlign: "left",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        <span
        >{pavadinimas}</span>

        <button
            onClick=
            {
                async function ()
                {
                    // service_kategorijos_delete

                    set_state_overlay_message("service_kategorijos_delete...")

                    const result_of_service_kategorijos_delete =
                        await service_kategorijos_delete(_id)

                    set_state_overlay_message(null)

                    // error

                    if (result_of_service_kategorijos_delete.status === "error")
                    {
                        set_state_alert_message(
                            result_of_service_kategorijos_delete.message
                        )
                        return
                    }

                    // success

                    update()
                }
            }
        >Delete</button>
    </div>
}

export default List_line