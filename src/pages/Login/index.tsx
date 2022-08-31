import { Header } from "../../components/Header"
import { LoginForm } from "../../components/LoginForm"
import { Footer } from "../../components/Footer"
import styled from "styled-components"

export function Login() {
    return (
        <Main>
            <Header />
            <LoginForm />
            <Footer />
        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--background);

    > * {
        width: 100%;
        max-width: 335px;
    }
`