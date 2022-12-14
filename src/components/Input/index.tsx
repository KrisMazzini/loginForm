import { useState, useEffect } from "react";
import styled from "styled-components";

import eye from "../../assets/eye.svg"

export type InputProps = {
    icon: string;
    onFocusIcon: string;
    type: string;
    id: string;
    label: string;
    placeholder: string;
}

type Props = InputProps & { key: string | number; }

type InputProperties = {
    borderColor: string;
    dropShadow: string;
}

type InputStyle = InputProperties & {
    icon: string;
}

export function Input(props:Props) {
    const { icon, onFocusIcon, type, id, label, placeholder } = props;

    const isPassword = type === "password";

    const [focus, setFocus] = useState<boolean>(false)
    const [inputStyle, setInputStyle] = useState<InputStyle>(handleFocus())
    const [inputType, setInputType] = useState<string>(type)

    function handleFocus():InputStyle {
        const style:InputStyle = focus ? {
            borderColor: "var(--primary-color)",
            dropShadow: "0px 0px 0px 2px var(--dropshadow)",
            icon: onFocusIcon
        } : {
            borderColor: "var(--input-border)",
            dropShadow: "none",
            icon: icon
        }

        return style
    }

    function togglePassword() {
        setInputType(prev => prev === "password" ? "text" : "password")
    }

    useEffect(() => {
        setInputStyle(handleFocus())
    }, [focus])

    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <InputContainer
                borderColor={inputStyle.borderColor}
                dropShadow={inputStyle.dropShadow}
            >
                <img src={inputStyle.icon} alt={`${id}-icon`} />
                <input 
                    type={inputType} name={id} id={id} placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                {
                    isPassword &&
                    <img src={eye} alt="eye-icon" onClick={togglePassword} />
                }
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

    border: 1px solid ${(props:InputProperties) => props.borderColor};
    box-shadow: ${(props:InputProperties) => props.dropShadow};
    border-radius: 4px;

    img {
        cursor: pointer;
    }

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