import { styled } from 'styled-components'


const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #232536;
    color: #fff;
    padding: 0 1rem;
`

const NavBarTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const NavBarLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const NavBarLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    &:hover {
        color: #fff;
        text-decoration: underline;
    }
`

export default function NavBar() {
    return (
        <NavBarContainer>
            <NavBarTitle>
                <h1>Blog ADS</h1>
            </NavBarTitle>
            <NavBarLinks>
                <NavBarLink href="/">Home</NavBarLink>
                <NavBarLink href="/about">About</NavBarLink>
                <NavBarLink href="/contact">Contact</NavBarLink>
            </NavBarLinks>
        </NavBarContainer>
    )
}
