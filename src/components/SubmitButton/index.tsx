import styled from "styled-components";

type Props = {
    key: string;
    content: string;
    name: string;
}

export function SubmitButton(props:Props) {
    const {content, name} = props;
    
    return(
        <Button type="submit" name={name} value={name}>
            {content}
        </Button>
    )
}

const Button = styled.button`
    width: 100%;
    height: 51px;

    border-radius: 4px;

    border: none;
    outline: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.015em;

    text-transform: uppercase;

    cursor: pointer;

    color: var(--submit-text);
    background-color: var(--primary-color);

    :hover {
        filter: brightness(1.1);
    }

    :active {
        filter: brightness(0.9);
    }
`