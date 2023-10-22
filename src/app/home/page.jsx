import React from 'react';
import { styled } from 'styled-components';
import GridPost from '../components/GridPost';
import CardPost from '../components/CardPost';



const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

// posts.title
// posts.subtitle
// posts.description
// posts.link
const posts = [
    {
        title: 'Post 1',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3'],
        image: 'https://picsum.photos/200/300'
    },
    {
        title: 'Post 2',
        subtitle: 'Subtitle 2',
        description: 'Description 2',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3'],
        image: 'https://picsum.photos/200/300',

        
    },
    {
        image: 'https://picsum.photos/200/300',

        title: 'Post 3',
        subtitle: 'Subtitle 3',
        description: 'Description 3',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 4',
        image: 'https://picsum.photos/200/300',

        subtitle: 'Subtitle 4',
        description: 'Description 4',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 5',
        image: 'https://picsum.photos/200/300',

        subtitle: 'Subtitle 5',
        description: 'Description 5',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 6',
        image: 'https://picsum.photos/200/300',

        subtitle: 'Subtitle 6',
        description: 'Description 6',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 7',
        image: 'https://picsum.photos/200/300',

        subtitle: 'Subtitle 7',
        description: 'Description 7',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        title: 'Post 8',
        image: 'https://picsum.photos/200/300',

        subtitle: 'Subtitle 8',
        description: 'Description 8',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    }
]


export default function Home() {
    // cardPost: title, subtitle, description, link, tags, image
  return (
    <HomeWrapper>
      <GridPost title="Post" subTitle="sub">
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
    </HomeWrapper>
  )
}