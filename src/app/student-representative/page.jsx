"use client"

import { styled } from 'styled-components'

import Base from '../page'


const StudentRepresentativeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const StudentRepresentativeImage = styled.img`
    width: 450px;
    height: 100%;
    object-fit: cover;

`

const StudentRepresentativeTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem 0;
`

const StudentRepresentativeSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1rem 0;
`

const StudentRepresentativeDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
`

const StudentRepresentativeLink = styled.a`
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
`

const StudentRepresentativeList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const StudentRepresentativeListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`


export default function StudentRepresentative() {
    return (
        <Base title="Representante do curso">
            <StudentRepresentativeWrapper>
                <StudentRepresentativeImage src="https://www.psicologosberrini.com.br/wp-content/uploads/10-dicas-de-saude-mental-para-mulheres-768x576.jpg" alt="Sara" />
                <StudentRepresentativeTitle>Representante de classe</StudentRepresentativeTitle>
                <StudentRepresentativeSubtitle>Nome</StudentRepresentativeSubtitle>
                <StudentRepresentativeDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.</StudentRepresentativeDescription>
                <StudentRepresentativeLink href="https://www.instagram.com/sabrinaccastelo/">Instagram</StudentRepresentativeLink>

                <StudentRepresentativeList>
                    <StudentRepresentativeListItem>
                        <StudentRepresentativeSubtitle>Nome</StudentRepresentativeSubtitle>
                        <StudentRepresentativeDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.</StudentRepresentativeDescription>
                        <StudentRepresentativeLink href="https://www.instagram.com/sabrinaccastelo/">Instagram</StudentRepresentativeLink>
                    </StudentRepresentativeListItem>

                    <StudentRepresentativeListItem>
                        <StudentRepresentativeSubtitle>Nome</StudentRepresentativeSubtitle>
                        <StudentRepresentativeDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.</StudentRepresentativeDescription>
                        <StudentRepresentativeLink href="https://www.instagram.com/sabrinaccastelo/">Instagram</StudentRepresentativeLink>
                    </StudentRepresentativeListItem>

                    <StudentRepresentativeListItem>
                        <StudentRepresentativeSubtitle>Nome</StudentRepresentativeSubtitle>
                        <StudentRepresentativeDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.</StudentRepresentativeDescription>
                        <StudentRepresentativeLink href="https://www.instagram.com/saracarolineoliveira/">Instagram</StudentRepresentativeLink>
                    </StudentRepresentativeListItem>
                </StudentRepresentativeList>
            </StudentRepresentativeWrapper>
        </Base>
    )
}