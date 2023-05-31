import React from "react"
import encode_image_to_base64 from "../../../../../../New folder/app_testas_new-main/app_testas_new-main/frontend/src/utils/encode_image_to_base64.mjs"

const Image_base64 = function (props)
{
    // props

    const ref_img = props.ref_image_base64

    // refs

    const ref_input_file = React.useRef()

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em 0 0.25em 0",

                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >

        <div>Nuotrauka: </div>

        <img
            ref={ref_img}
            style=
            {
                {
                    maxWidth: "10em"
                }
            }
        ></img>

        <input
            style=
            {
                {
                    display: "block"
                }
            }
            ref={ref_input_file}
            type="file"
            onChange=
            {
                async function ()
                {
                    // inputs

                    const file = ref_input_file.current.files[0]

                    // encode_image_to_base64

                    const result_of_encode_image_to_base64 =
                        await encode_image_to_base64(file)

                    // error

                    if (result_of_encode_image_to_base64.status === "error")
                    {
                        return
                    }

                    const image_base64 = result_of_encode_image_to_base64.file

                    // success

                    ref_img.current.src = image_base64
                }
            }
        ></input>

    </div>
}

export default Image_base64