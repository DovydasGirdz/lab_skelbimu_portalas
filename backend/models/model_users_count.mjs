import config_users from "../config/config_users.mjs"

const model_users_count = async function (
    param_query,
    param_limit
)
{
    // query

    const query = param_query

    // options

    const options =
    {
    }

    if (param_limit !== undefined) options.limit = param_limit

    // countDocuments

    const result_of_countDocuments =
        await config_users.mongodb_client
            .countDocuments(query, options)

    return result_of_countDocuments
}

export default model_users_count