import { useState, useEffect } from "react";

import styled from "styled-components";
import check from "../../assets/check.svg"

type Props = {
    key: string;
    id: string;
    label: string;
}

type CheckProps = {
    backgroundColor: string;
    backgroundImage: string;
    borderColor: string;
}

export function Checkbox(props:Props) {
    const { id, label } = props;

    const [checked, setChecked] = useState<boolean>(true)
    const [checkProperties, setCheckProperties] = useState<CheckProps>(handleCheck())

    function handleCheck():CheckProps {
        
        const checkProperties:CheckProps = checked ? {
            backgroundColor: "var(--primary-color)",
            backgroundImage: check,
            borderColor: "var(--primary-color)"
        } : {
            backgroundColor: "var(--background)",
            backgroundImage: "none",
            borderColor: "var(--input-border)"
        }
        
        return checkProperties
    }

    useEffect(() => {
        setCheckProperties(handleCheck())
    }, [checked])

    return(
        <Container onClick={() => setChecked(prev => !prev)}>
            <Check
                backgroundColor={checkProperties.backgroundColor}
                backgroundImage={checkProperties.backgroundImage}
                borderColor={checkProperties.borderColor}
            />
            <input type="checkbox" name={id} value={id} id={id} checked={checked}/>
            <label htmlFor={id} onClick={() => setChecked(prev => !prev)}>{label}</label>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    position: relative;

    * {
        cursor: pointer;
    }

    label {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: var(--input-placeholder);
    }
    
    input {
        opacity: 0;
        position: absolute;
    }
`

const Check = styled.div`
    width: 20px;
    height: 20px;

    background-color: ${(props:CheckProps) => props.backgroundColor};
    background-image: url(${(props:CheckProps) => props.backgroundImage});
    border: 1px solid ${(props:CheckProps) => props.borderColor};
    border-radius: 4px;
`