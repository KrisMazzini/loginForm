import styled from "styled-components";
import campInLogo from "../../assets/logo.svg"

export function Logo() {
    return (
        <Container>
            <img src={campInLogo} alt="Camp.in Logo" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`