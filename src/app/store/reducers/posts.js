import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid'


const initialState = [
    {
        id: uuid(),
        title: 'Post 1',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3'],
        image: 'https://picsum.photos/200/300'
    },
    {
        id: uuid(),
        title: 'Post 2',
        subtitle: 'Subtitle 2',
        description: 'Description 2',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3'],
        image: 'https://picsum.photos/200/300',


    },
    {
        id: uuid(),
        image: 'https://picsum.photos/200/300',
        title: 'Post 3',
        subtitle: 'Subtitle 3',
        description: 'Description 3',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: uuid(),
        title: 'Post 4',
        image: 'https://picsum.photos/200/300',
        subtitle: 'Subtitle 4',
        description: 'Description 4',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: uuid(),
        title: 'Post 5',
        image: 'https://picsum.photos/200/300',
        subtitle: 'Subtitle 5',
        description: 'Description 5',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: uuid(),
        title: 'Post 6',
        image: 'https://picsum.photos/200/300',
        subtitle: 'Subtitle 6',
        description: 'Description 6',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: uuid(),
        title: 'Post 7',
        image: 'https://picsum.photos/200/300',
        subtitle: 'Subtitle 7',
        description: 'Description 7',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: uuid(),
        title: 'Post 8',
        image: 'https://picsum.photos/200/300',
        subtitle: 'Subtitle 8',
        description: 'Description 8',
        link: 'https://google.com',
        tags: ['tag1', 'tag2', 'tag3']
    }
];

const postsSlices = createSlice(
    {
        name: 'posts',
        initialState,
    }
)

export default postsSlices.reducer