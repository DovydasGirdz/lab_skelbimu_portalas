const service_kategorijos_delete = async function (
    param_id
)
{
    // method

    const method = "DELETE"

    // uri

    const uri = `/api/kategorijos/${param_id}/`

    // headers

    // body

    const result_of_fetch = await fetch(
        uri,
        {
            method: method
        }
    )

    // error: unvalid status code

    if (result_of_fetch.status !== 200 &&
        result_of_fetch.status !== 400)
    {
        return { status: "error", message: "invalid status code" }
    }

    // error:

    if (result_of_fetch.status === 400)
    {
        const body = await result_of_fetch.json()

        const message = body.message

        return { status: "error", message: message }
    }

    // success

    return { status: "success"}
}

export default service_kategorijos_delete