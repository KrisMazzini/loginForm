import styled from "styled-components";

type Props = {
    key: string;
    id: string;
    label: string;
}

export function Checkbox(props:Props) {
    const { id, label } = props;

    return(
        <Container>
            <input type="checkbox" name={id} value={id} id={id}/>
            <label htmlFor={id}>{label}</label>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    label {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: var(--input-placeholder);
    }
    
    input {
        width: 20px;
        height: 20px;
    }
`