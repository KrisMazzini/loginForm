import styled from "styled-components";
import { Input, InputProps } from "../Input";
import { SubmitButton } from "../SubmitButton";
import { Checkbox } from "../Checkbox";

import mail from "../../assets/mail.svg"
import mailFocus from "../../assets/mail-focus.svg"
import lock from "../../assets/lock.svg"
import lockFocus from "../../assets/lock-focus.svg"

export function LoginForm() {
    
    const inputs:InputProps[] = [
        {
            icon: mail,
            onFocusIcon: mailFocus,
            type: "email",
            id: "email",
            label: "E-mail",
            placeholder: "Digite seu e-mail",
        },
        {
            icon: lock,
            onFocusIcon: lockFocus,
            type: "password",
            id: "password",
            label: "Senha",
            placeholder: "Digite sua senha",
        }
    ]
    
    return (
        <Container>
            <form id="login-form">
                <fieldset name="login-data">
                    {
                        inputs.map(input => (
                                <Input
                                    key={input.id}
                                    icon={input.icon}
                                    onFocusIcon={input.onFocusIcon}
                                    type={input.type}
                                    id={input.id}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                />
                            ))
                        }
                </fieldset>
            </form>
            <AdditionalData>
                <fieldset form="login-form" name="remember-me">
                    <Checkbox key="remember-me" id="remember-me" label="Lembre-me" />
                </fieldset>
                <a><p>Esqueci minha senha</p></a>
            </AdditionalData>
            <fieldset form="login-form" name="submit">
                <SubmitButton name="submit" content="Entrar" key="submit" />
            </fieldset>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > form > fieldset {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const AdditionalData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
        justify-self: flex-end;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;

        color: var(--primary-color);
    }
`