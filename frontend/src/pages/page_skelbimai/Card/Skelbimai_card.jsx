import React from "react";

const Skelbimai_card = function (props) 
{
    // props

    const autorius = props.autorius
    const pavadinimas = props.pavadinimas
    const kategorija = props.kategorija
    const aprasas = props.aprasas
    const kaina = props.kaina
    const image_base64 = props.image_base64

    return <>
        <div 
            style = 
            {
                {
                    width: "20%",
                    display: "flex",
                    gap: "15px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(80,80,80,0.15)",
                    border: "2px solid black",
                    paddingBottom: "15px",
                    textAlign: "center"
                }
            }
        >
            <img 
                src={image_base64} 
                alt="" 
                style = 
                {
                    {
                        width: "100%"
                    }
                }
            />

            <div>Autorius: {autorius}</div>

            <div>Pavadinimas: {pavadinimas}</div>

            <div>Kategorija: {kategorija}</div>

            <div>Aprasas: {aprasas}</div>

            <div>Kaina: {kaina} eur</div>
        </div>
    </>

}

export default Skelbimai_card