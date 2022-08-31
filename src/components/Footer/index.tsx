import styled from "styled-components"

export function Footer() {
    return (
        <Container>
            <p>Não tem uma conta? <a>Registre-se</a></p>
        </Container>
    )
}

const Container = styled.footer`
    margin-top: 14px;
    
    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;

        text-align: center;

        color: var(--primary-color);

        a {
            font-weight: 600;
        }
    }
`