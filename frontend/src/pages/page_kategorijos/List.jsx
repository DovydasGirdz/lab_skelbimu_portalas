import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_kategorijos_find from "../../services/service_kategorijos_find.mjs"
import Line from "./Line.jsx"

export var update

const List = function (props)
{
    // states

    const [state_kategorijos, set_state_kategorijos] = React.useState()

    //

    update = async function ()
    {
        // service_kategorijos_find

        set_state_overlay_message("service_kategorijos_find...")

        const result_of_service_kategorijos_find =
            await service_kategorijos_find()

        set_state_overlay_message(null)

        // error:

        if (result_of_service_kategorijos_find.status === "error")
        {
            set_state_alert_message(result_of_service_kategorijos_find.message)
            return
        }

        // success

        const kategorijos = result_of_service_kategorijos_find.kategorijos

        set_state_kategorijos(kategorijos)
    }

    // effects 

    React.useEffect(
        function ()
        {
            update()
        },
        {

        }
    )

    return <div
        style=
        {
            {
                minWidth: "20em",
                width: "fit-content",
                padding: "1em",
                border: "0",
                margin: "1em auto 0 auto",
                textAlign: "left",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        {
            function ()
            {
                const elements = []

                for (var i = 0; i < state_kategorijos.length; i++)
                {
                    const kategorija = state_kategorijos[i]

                    elements.push(
                        <Line
                            key={i}
                            _id={kategorija._id}
                            pavadinimas={kategorija.pavadinimas}
                        ></Line>
                    )
                }

                return elements
            }()
        }
    </div>
}

export default List