import model_skelbimai_find from "../models/model_skelbimai_find.mjs"

const controller_skelbimai_find = async function (req, res)
{
    // inputs

    try
    {
        // model_kategorijos_find

        const result_of_model_skelbimai_find =
            await model_skelbimai_find(
                {
                }
            )

        // success

        res.statusCode = 200
        res.json({ skelbimai: result_of_model_skelbimai_find })
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

export default controller_skelbimai_find