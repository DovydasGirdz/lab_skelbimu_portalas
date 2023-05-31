import mongodb from "mongodb"

export default
    {
        mongodb_client: new mongodb.MongoClient("mongodb+srv://lab_skelbimu_portalas_user_1:slaptikas1123@cluster1.edybjjp.mongodb.net/")
            .db("lab_skelbimu_portalas")
            .collection("skelbimai"),
        validate_pavadinimas: function (param_pavadinimas)
        {
            if (param_pavadinimas === undefined) throw new Error("param_pavadinimas undefined")
            if (typeof param_pavadinimas !== "string") throw new Error("param_pavadinimas is not a string")
            if (param_pavadinimas.length < 3) throw new Error("param_pavadinimas too short")
            if (param_pavadinimas.length > 64) throw new Error("param_pavadinimas too long")
        },
        validate_kategorija: function (param_kategorija)
        {
            if (param_kategorija === undefined) throw new Error("param_kategorija undefined")
            if (typeof param_kategorija !== "string") throw new Error("param_kategorija is not a string")
            if (param_kategorija.length < 8) throw new Error("param_kategorija too short")
            if (param_kategorija.length > 64) throw new Error("param_kategorija too long")
        },
        validate_aprasas: function (param_aprasas)
        {
            if (param_aprasas === undefined) throw new Error("param_aprasas undefined")
            if (typeof param_aprasas !== "string") throw new Error("param_aprasas is not a string")
            if (param_aprasas < 3) throw new Error("param_aprasas too short")
            if (param_aprasas > 500) throw new Error("param_aprasas too long")
        },
        validate_kaina: function (param_kaina)
        {
            if (param_kaina === undefined) throw new Error("param_kaina undefined")
            if (typeof param_kaina !== "number") throw new Error("param_kaina is not a number")
            if (param_kaina < 0) throw new Error("param_kaina too little")
            if (param_kaina > 99999999) throw new Error("param_kaina too big")
        },
        validate_image_base64: function (param_image)
        {
            if (param_image === undefined) throw new Error("param_image undefined")
            if (typeof param_image !== "string") throw new Error("param_image is not a string")
        },
        validate_komentarai: function (param_komentarai)
        {
            if (param_komentarai === undefined) throw new Error("param_komentarai undefined")
            if (param_komentarai instanceof Array === false) throw new Error("param_komentarai is not an array")
        }
    }