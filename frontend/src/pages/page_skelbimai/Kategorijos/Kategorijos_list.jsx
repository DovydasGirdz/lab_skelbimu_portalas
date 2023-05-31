import React from "react";

const Kategorijos_list = function (props)
{
    // props 

    const state_kategorijos = props.state_kategorijos
    const ref_kategorija = props.ref_kategorija

    // refs

    
    const components = [""]

    for (var i = 0; i < state_kategorijos.length; i++)
    {
        const kategorija = state_kategorijos[i]

        components.push(
            <div>
                <span>{kategorija.pavadinimas}</span>

                <button
                    onClick =
                    {
                        function ()
                        {
                            ref_kategorija.current = kategorija.pavadinimas
                        }
                    }
                >Select</button>
            </div>
        )
    }

    return components
}

export default Kategorijos_list