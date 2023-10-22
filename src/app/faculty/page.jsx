"use client"
import { styled } from 'styled-components';
import GridPost from '../components/GridPost';
import CardPost from '../components/CardPost';

import Base from '../page'


const FacultyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const FacultyInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`
const NameCurso = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 1rem;
`

const Description = styled.p`
    font-size: 1rem;
    color: #000;
    margin-bottom: 1rem;
`



const posts = [
    {
        title: 'Docente 1',
        subtitle: 'informação',
        description: 'Description 1',
        link: 'https://google.com',
        tags: ['POO', 'WEB', 'ALG'],
        image: 'https://picsum.photos/200/300'
    },
    {
        title: 'docente 2',
        subtitle: 'informação',
        description: 'Description 2',
        link: 'https://google.com',
        tags: ['POO', 'WEB', 'ALG'],
        image: 'https://picsum.photos/200/300',


    },
    {
        image: 'https://picsum.photos/200/300',

        title: 'docente 3',
        subtitle: 'informação',
        description: 'Description 3',
        link: 'https://google.com',
        tags: ['POO', 'WEB', 'ALG']
    },
    {
        title: 'docente 4',
        image: 'https://picsum.photos/200/300',

        subtitle: 'informação',
        description: 'Description 4',
        link: 'https://google.com',
        tags: ['POO', 'WEB', 'ALG']
    },
]

export default function Faculty() {
    return (
        <Base>
            <FacultyWrapper>
                <FacultyInfo>
                    <NameCurso>Nome do curso</NameCurso>
                    <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </Description>
                </FacultyInfo>
                <GridPost title="Corpo docente" subTitle="sub">
                    {
                        posts.map((post, index) => (
                            <CardPost
                                key={index}
                                title={post.title}
                                subtitle={post.subtitle}
                                description={post.description}
                                link={post.link}
                                tags={post.tags}
                                image={post.image}
                            />
                        ))
                    }
                </GridPost>
            </FacultyWrapper>
        </Base>
    )
}