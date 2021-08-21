import { createGlobalStyle } from "styled-components"
import { fontFamily } from "../../styles/font"
import { primaryColor } from "../../styles/theme"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
    }
    html {
        height: 100%;
    }
    body{
        font-family: ${fontFamily};
        background-color: ${primaryColor};
    }
`

export default GlobalStyles