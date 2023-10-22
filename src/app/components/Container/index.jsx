import { styled } from "styled-components"


const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

export default function Container({ children }) {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}
