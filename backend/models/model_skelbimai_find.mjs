import config_kategorijos from "../config/config_kategorijos.mjs"
import config_skelbimai from "../config/config_skelbimai.mjs"

const model_skelbimai_find = async function (
    param_query,
    param_projection,
    param_skip,
    param_limit,
    param_sort
)
{
    // query

    const query = param_query

    // options

    const options =
    {
    }

    if (param_projection !== undefined) options.projection = param_projection
    if (param_skip !== undefined) options.skip = param_skip
    if (param_limit !== undefined) options.limit = param_limit
    if (param_sort !== undefined) options.sort = param_sort

    // find

    const result_of_find =
        await config_skelbimai.mongodb_client
            .find(query)
            .toArray()

    return result_of_find
}

export default model_skelbimai_find