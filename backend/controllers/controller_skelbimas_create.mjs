import config_skelbimai from "../config/config_skelbimai.mjs"
import config_users from "../config/config_users.mjs"
import model_kategorijos_create from "../models/model_kategorijos_create.mjs"
import model_users_read from "../models/model_users_read.mjs"

const controller_skelbimas_create = async function (req, res)
{
    // inputs

    const identification_token = req.cookies.identification_token
    const pavadinimas = req.body.pavadinimas
    const kategorija = req.body.kategorija
    const aprasas = req.body.aprasas
    const kaina = req.body.kaina
    const image_base64 = req.body.image_base64

    try
    {
        // validate_inputs

        validate_inputs(
            identification_token,
            pavadinimas,
            kategorija,
            aprasas,
            kaina,
            image_base64
        )

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(
                identification_token
            )

        const autorius = result_of_resolve_username

        // model_kategorijos_create

        await model_kategorijos_create(
            autorius,
            pavadinimas,
            kategorija,
            aprasas,
            kaina,
            image_base64
        )

        // success

        res.statusCode = 200
        res.end()

    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }
}

//
// validate_inputs
//

const validate_inputs = function (
    param_identification_token,
    param_pavadinimas,
    param_kategorija,
    param_aprasas,
    param_kaina,
    param_image_base64
)
{
    // param_identification_token

    config_users.validate_identification_token(param_identification_token)

    // param_pavadinimas

    config_skelbimai.validate_pavadinimas(param_pavadinimas)

    // param_kategorija

    config_skelbimai.validate_kategorija(param_kategorija)

    // param aprasas 

    config_skelbimai.validate_aprasas(param_aprasas)

    // param_kaina

    config_skelbimai.validate_kaina(param_kaina)

    // param_image_base64

    config_skelbimai.validate_image_base64(param_image_base64)
}

//
// resolve_username
//

const resolve_username = async function (param_identification_token)
{
    const result_of_model_users_read =
        await model_users_read(
            {
                identification_token: param_identification_token
            },
            {
                _id: 0,
                username: 1
            }
        )

    const username = result_of_model_users_read.username

    return username
}

export default controller_skelbimas_create