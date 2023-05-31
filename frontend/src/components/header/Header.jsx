import React from "react"
import { set_state_page } from "../../App.jsx"
import Header_admin from "./Header_admin.jsx"
import Header_guest from "./Header_guest.jsx"
import Header_user from "./Header_user.jsx"

const Header = function ()
{
    // states


    //
    
    if(state_username === null) return <Header_guest></Header_guest>
    if(state_username === "admin") return <Header_admin></Header_admin>
    return <Header_user></Header_user>
}

export default Header