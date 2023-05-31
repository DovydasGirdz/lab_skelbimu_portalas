import config_skelbimai from "../config/config_skelbimai.mjs"


const model_skelbimas_create = async function (
    param_autorius,
    param_pavadinimas,
    param_kategorija,
    param_aprasas,
    param_kaina,
    param_image_base64
)
{
    // document

    const document =
    {
        autorius: param_autorius,
        pavadinimas: param_pavadinimas,
        kategorija: param_kategorija,
        aprasas: param_aprasas,
        kaina: param_kaina,
        image_base64: param_image_base64,
        komentarai: []
    }

    // insertOne

    const result_of_createOne =
        await config_skelbimai.mongodb_client
            .insertOne(document)
}

export default model_skelbimas_create