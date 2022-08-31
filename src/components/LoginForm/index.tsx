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
        <Container>
            <form id="login-form">
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
            </form>
            <div id="additional-data">
                <fieldset form="login-form" name="remember-me">
                    <input type="checkbox" name="remember-me" value="lembre-me" />
                </fieldset>
                <p>Lembre-me</p>
                <a><p>Esqueci minha senha</p></a>
            </div>
            <fieldset form="login-form" name="submit">
                <input type="submit" value="entrar" />
            </fieldset>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    fieldset[name="submit"] > input {
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
    }

    #additional-data {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;

        input {
            width: 20px;
            height: 20px;
        }

        > p {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: var(--input-placeholder);
        }

        > a {
            flex-grow: 1;
            text-align: end;

            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;

            color: var(--primary-color);
        }
    }
`