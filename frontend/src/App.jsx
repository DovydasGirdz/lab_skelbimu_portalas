import React from "react"
import Overlay from "./Overlay.jsx"
import Alert from "./Alert.jsx"
import Page from "./Page.jsx"
import Header from "./Header.jsx"
import Page_sign_in from "./pages/Page_sign_in.jsx"

const App = function ()
{
    return <>

        <Header></Header>

        <Page></Page>

        <Overlay></Overlay>

        <Alert></Alert>
    </>
}

export default App