"use client"
import { styled } from 'styled-components'
import ListPost  from '../components/ListPost'
import Base from '../page'

const PostInternoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const posts = [
    {
        title: 'Post 1',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 2',
        subtitle: 'Subtitle 2',
        description: 'Description 2',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 3',
        subtitle: 'Subtitle 3',
        description: 'Description 3',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 4',
        subtitle: 'Subtitle 4',
        description: 'Description 4',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 5',
        subtitle: 'Subtitle 5',
        description: 'Description 5',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 6',
        subtitle: 'Subtitle 6',
        description: 'Description 6',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 7',
        subtitle: 'Subtitle 7',
        description: 'Description 7',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 8',
        subtitle: 'Subtitle 8',
        description: 'Description 8',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    }
]


export default function PostInterno() {
    return (
        <Base>
            <h1>Post Interno</h1>
            <PostInternoWrapper>
                <ListPost posts={posts} />
            </PostInternoWrapper>
        </Base>
    )
}