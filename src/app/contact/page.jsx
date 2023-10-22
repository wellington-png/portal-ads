"use client"

import { styled } from 'styled-components'

import Base from '../page'

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;

    label {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    input, textarea {
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
    }

    input[type="submit"] {
        background-color: #2D1441;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #4A1D6E;
    }

    input[type="submit"]:active {
        background-color: #2D1441;
    }
`




export default function Contact() {
    return (
        <Base>
            <ContactWrapper>
                <FormContainer>
                    <Form>
                        <label for="name">Nome</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome" />

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Seu email" />

                        <label for="message">Mensagem</label>
                        <textarea id="message" name="message" placeholder="Sua mensagem" />

                        <input type="submit" value="Enviar" />
                    </Form>
                </FormContainer>
            </ContactWrapper>
        </Base>
    )
}