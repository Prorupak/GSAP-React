import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
 }

    body {
        font-family: 'Radio Canada', sans-serif;
        --primary: #2779a7;
        --secondary: #49c5b6;
        --red: #d14836;
        --color-text: rgba(49, 49, 49, 1);
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;
