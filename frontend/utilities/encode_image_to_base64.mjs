const encode_image_to_base64 = function (param_file)
{
    return new Promise(
        function (resolve, reject)
        {
            const file_reader = new FileReader()

            // onerror

            file_reader.onerror = function ()
            {
                reject({ status: "error"})
            }

            // onload

            file_reader.onload = function ()
            {
                resolve({ status: "success", file: file_reader.result})
            }

            file_reader.readAsDataURL(param_file)
        }
    )

}

export default encode_image_to_base64