import styled from "styled-components"

import loginIcon from "../../assets/login.svg"

export function Header() {
    return (
        <Container>
            <img src={loginIcon} alt="Login Icon" />
            <h1>Faça seu login</h1>
            <h2>Entre com suas informações de cadastro.</h2>
        </Container>
    )
}

const Container = styled.header`
    margin-bottom: 27px;

    display: grid;
    grid-template-areas: 
        "image heading"
        "subHeading subHeading";

    grid-template-columns: 24px 1fr;

    align-items: center;

    img {
        grid-area: image;
    }

    h1 {
        grid-area: heading;
        margin-left: 10px;

        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;

        color: var(--text-title);
    }

    h2 {
        grid-area: subHeading;
        margin-top: 5px;

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: var(--text-base);
    }
`