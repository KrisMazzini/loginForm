import React, { ReactElement, useContext, useEffect, useState } from "react"

import styled, { StyledComponent } from "styled-components"

import { WindowContext } from "../../contexts/WindowContext"
import { Background } from "../../components/Background"
import { Logo } from "../../components/Logo"
import { Header } from "../../components/Header"
import { LoginForm } from "../../components/LoginForm"
import { Footer } from "../../components/Footer"

type MainProps = {
    justifyContent: string;
    margin: string | number;
    maxWidth: string;
}

export function Login() {
    const windowSize = useContext(WindowContext)
    const [mainLayout, setMainLayout] = useState<MainProps>(getMainLayout())

    function getMainLayout():MainProps {
        return windowSize.width < 600 ? {
            justifyContent: "flex-start",
            margin: 0,
            maxWidth: "none"
        } :{
            justifyContent: "center",
            margin: "auto",
            maxWidth: "334px"
        }
    }

    useEffect(() => {
        setMainLayout(getMainLayout())
    }, [windowSize])
    
    return (
        <Container>
            <FormContainer>
                <Logo />
                <Main justifyContent={mainLayout.justifyContent} margin={mainLayout.margin} maxWidth={mainLayout.maxWidth}>
                    <Header />
                    <LoginForm />
                    <Footer />
                </Main>
            </FormContainer>
            {
                windowSize.width < 1150 ? <></> : <Background />
            }
        </Container>
    )
}

const Container = styled.div`
    flex-grow: 1;

    display: flex;
`

const FormContainer = styled.div`
    flex-grow: 1;
    
    padding: 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;
`

const Main = styled.main`
    width: 100%;

    margin: ${(props:MainProps) => props.margin};

    display: flex;
    flex-direction: column;
    justify-content: ${(props:MainProps) => props.justifyContent};
    align-items: center;

    
    > * {
        width: 100%;
        max-width: ${(props:MainProps) => props.maxWidth};
    }
`