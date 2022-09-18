import styled from "styled-components";

import background from "../../assets/side-image.jpg"

export function Background() {
    return(
        <Container></Container>
    )
}

const Container = styled.div`
    min-width: 720px;
    flex-basis: 50%;

    background-image: url(${background});
    background-size: 100% auto;
    background-position: center center;
    background-repeat: no-repeat;
`