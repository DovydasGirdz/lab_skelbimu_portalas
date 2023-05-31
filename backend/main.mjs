import express from "express"
import cookieParser from "cookie-parser"
import controller_sign_up from "./controllers/controller_sign_up.mjs"
import controller_sign_in from "./controllers/controller_sign_in.mjs"
import controller_sign_out from "./controllers/controller_sign_out.mjs"
import controller_kategorijos_create from "./controllers/controller_kategorijos_create.mjs"
import controller_kategorijos_find from "./controllers/controller_kategorijos_find.mjs"
import controller_kategorijos_delete from "./controllers/controller_kategorijos_delete.mjs"
import controller_skelbimas_create from "./controllers/controller_skelbimas_create.mjs"

const express_1 = express()

// middlewares

const middleware_file_server = express.static("../frontend/public")
express_1.use(middleware_file_server)

const middleware_parse_json_body = express.json({ limit: "4mb" })
express_1.use(middleware_parse_json_body)

const middleware_parse_cookies = cookieParser()
express_1.use(middleware_parse_cookies)

// endpoints

express_1.post("/api/sign_up", controller_sign_up)
express_1.post("/api/sign_in", controller_sign_in)
express_1.get("/api/sign_out", controller_sign_out)

express_1.post("/api/kategorijos/", controller_kategorijos_create)
express_1.get("/api/kategorijos/", controller_kategorijos_find)
express_1.delete("/api/kategorijos/:_id/", controller_kategorijos_delete)

express_1.post("/api/skelbimai/", controller_skelbimas_create)

// listen

const port = 80

express_1.listen(port)