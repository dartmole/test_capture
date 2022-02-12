import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #1b1b1b;
        font-family: 'Dosis', sans-serif;

    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Dosis', sans-serif;
        &:hover {
            background-color: #23d997;
            color: white;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    p {
        padding: 2rem 0;
        color: #ccc;
        line-height: 1.5;
        font-size: 1.4rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    a {
        font-size: 1.1rem;
    }
`;

export default GlobalStyle;
