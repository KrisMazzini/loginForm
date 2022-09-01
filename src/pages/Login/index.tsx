import styled from "styled-components"

import { Logo } from "../../components/Logo"
import { Header } from "../../components/Header"
import { LoginForm } from "../../components/LoginForm"
import { Footer } from "../../components/Footer"

export function Login() {
    return (
        <Container>
            <Logo />
            <Main>
                <Header />
                <LoginForm />
                <Footer />
            </Main>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    
    display: flex;
    flex-direction: column;
`

const Main = styled.main`
    flex-grow: 1;
    
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > * {
        width: 100%;
    }

    * {
        max-width: 335px;
    }
`