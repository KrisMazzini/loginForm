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
    flex-grow: 1;
    
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Main = styled.main`
    margin: 30px 0;

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