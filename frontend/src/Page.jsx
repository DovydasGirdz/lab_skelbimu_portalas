import React from "react"
import Page_kategorijos from "./pages/page_kategorijos/Page_kategorijos.jsx"
import Page_sign_in from "./pages/Page_sign_in.jsx"
import Page_sign_up from "./pages/Page_sign_up.jsx"
import Page_skelbimai_create from "./pages/page_skelbimai/Page_skelbimai_create.jsx"

export var state_page
export var set_state_page

const Page = function ()
{
    // states

    [state_page, set_state_page] = React.useState("Page_sign_in")

    //

    if (state_page === "Page_sign_in")
    {
        return <Page_sign_in
        ></Page_sign_in>
    }

    if (state_page === "Page_sign_up")
    {
        return <Page_sign_up
        ></Page_sign_up>
    }

    if (state_page === "Page_kategorijos")
    {
        return <Page_kategorijos
        ></Page_kategorijos>
    }

    if (state_page === "Page_skelbimai_create")
    {
        return <Page_skelbimai_create
        ></Page_skelbimai_create>
    }
}

export default Page