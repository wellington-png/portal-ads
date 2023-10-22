import { styled } from 'styled-components'
import Link from 'next/link'

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

    a {
        color: #fff;
        text-decoration: none;
        margin-left: 1rem;
        &:hover {
            color: #fff;
            text-decoration: underline;
        }
    }
`

const NavBarLink = styled.a`

`

export default function NavBar() {
    return (
        <NavBarContainer>
            <NavBarTitle>
                <h1>Blog ADS</h1>
            </NavBarTitle>
            <NavBarLinks>
                <Link href="/">Home</Link>
                <Link href="/post-interno">Post ADS</Link>
                <Link href="/post-externo">Post externos</Link>
                <Link href="/contact">Contato</Link>
                <Link href="/faculty">Corpo docente</Link>
                <Link href="/student-representative">Representante</Link>
                <Link href="/list-class">Turmas</Link>
            </NavBarLinks>
        </NavBarContainer>
    )
}
