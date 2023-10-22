import { styled } from 'styled-components'
import NavBar from '../NavBar'


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #F4F0F8;
`

const HeaderBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 2rem;
`

const HeaderBannerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const HeaderBannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #2D1441;
`

const HeaderBannerSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #2D1441;
`

const HeaderBannerImage = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
`



export default function Header() {
    return (
        <HeaderContainer>
            <NavBar />
            <HeaderBanner>
                <HeaderBannerText>
                    <HeaderBannerTitle>Bem vindo ao blog <span style={{ color: '#FF6978' }}>ADS</span></HeaderBannerTitle>
                    <HeaderBannerSubtitle>Lorem ipsum dolor sit amet consectetur</HeaderBannerSubtitle>
                </HeaderBannerText>
                <HeaderBannerImage src="https://avatars.githubusercontent.com/u/59374678?v=4" alt="Sara" />
            </HeaderBanner>
        </HeaderContainer>
    )
}
