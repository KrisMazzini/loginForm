import styled from "styled-components";
import { Input, InputProps } from "../Input";

import mail from "../../assets/mail.svg"
import lock from "../../assets/lock.svg"

export function LoginForm() {
    
    const inputs:InputProps[] = [
        {
            icon: mail,
            type: "email",
            id: "email",
            label: "E-mail",
            placeholder: "Digite seu e-mail",
        },
        {
            icon: lock,
            type: "password",
            id: "password",
            label: "Senha",
            placeholder: "Digite sua senha",
        }
    ]
    
    return (
        <Form>
            <fieldset name="login-data">
                {
                    inputs.map(input => (
                        <Input
                            key={input.id}
                            icon={input.icon}
                            type={input.type}
                            id={input.id}
                            label={input.label}
                            placeholder={input.placeholder}
                        />
                    ))
                }
            </fieldset>
        </Form>
    )
}

const Form = styled.form`
    fieldset {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`