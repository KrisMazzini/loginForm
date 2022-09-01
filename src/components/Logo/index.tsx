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
    margin: 40px 0 0 40px;
`