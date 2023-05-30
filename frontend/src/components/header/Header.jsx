import React from "react"
import { set_state_page } from "../../App.jsx"
import Header_admin from "./Header_admin.jsx"
import Header_guest from "./Header_guest.jsx"
import Header_user from "./Header_user.jsx"

export var state_username 
export var set_state_username

const Header = function ()
{
    // states

    [state_username, set_state_username] = React.useState(null)

    //
    
    if(state_username === null) return <Header_guest></Header_guest>
    if(state_username === "admin") return <Header_admin></Header_admin>
    return <Header_user></Header_user>
}

export default Header