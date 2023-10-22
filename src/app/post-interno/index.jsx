import { styled } from 'styled-components'
import { useSelector } from "react-redux";


import ListPost from '../components/ListPost'

const PostInternoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`


export default function PostInterno() {
    const  posts  = useSelector(state => state.posts)

    return (
        <>
            <h1>Post Interno</h1>
            <PostInternoWrapper>
                <ListPost posts={posts} />
            </PostInternoWrapper>
        </>
    )
}

