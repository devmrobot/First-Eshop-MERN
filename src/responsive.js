import { css } from "styled-components"

// adjust for mobile
export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 380px) {
        ${props}
    }`
}

// You adjust for other devices
// export const tablet = (props) => {
//     return css`
//     @media only screen and (max-width: 380px) {
//         ${props}
//     }`
// }