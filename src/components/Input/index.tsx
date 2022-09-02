import React from "react";
import styled from "styled-components";

export type InputProps = {
    icon: string;
    type: string;
    id: string;
    label: string;
    placeholder: string;
}

type Props = InputProps & { key: string | number; }

export function Input(props:Props) {
    const { icon, type, id, label, placeholder } = props;

    function focusOnInput(event:React.MouseEvent<HTMLDivElement>) {
        const input = event.currentTarget.querySelector('input')
        input?.focus()
    }

    return (
        <Container onClick={focusOnInput}>
            <label htmlFor={id}>{label}</label>
            <InputContainer>
                <img src={icon} alt={`${id}-icon`} />
                <input type={type} name={id} id={id} placeholder={placeholder} />
            </InputContainer>
        </Container>
    )
}

const Container = styled.div`
    label {
        margin-bottom: 5px;

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        color: var(--text-base);
    }
`

const InputContainer = styled.div`
    height: 44px;

    padding: 0 12px;

    display: flex;
    align-items: center;
    gap: 5px;

    border: 1px solid var(--input-border);
    border-radius: 4px;

    input {
        border: none;
        outline: none;

        flex-grow: 1;
        
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: var(--text-base);
        background-color: inherit;
    }

    input::placeholder{
        color: var(--input-placeholder);
    }
`