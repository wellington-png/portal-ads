import { styled } from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    background-color: #232536;
`


export default function Footer() {
    return (
        <FooterWrapper>
            <p>Footer</p>
        </FooterWrapper>
    )
}