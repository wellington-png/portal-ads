
import { styled } from 'styled-components'

const ListPostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const PostWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

`

const PostTags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const PostTag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background-color: #F4F0F8;
`


const PostImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #F4F0F8;
`

const PostImage = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 0.5rem;
`

const PostTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2D1441;
`

const PostSubtitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: #2D1441;
`



export default function ListPost({ posts }) {
    return (
        <ListPostWrapper>
            {posts.map((post, index) => (
                <PostWrapper key={index}>
                    <PostImageWrapper>
                        <PostImage src={post.image} alt={post.title} />
                        <PostTags>
                            {post.tags.map((tag, i) => (
                                <PostTag key={i}>{tag.name}</PostTag>
                            ))}
                        </PostTags>
                    </PostImageWrapper>
                    <div style={{ width: '70%' }}>
                        <PostTitle>{post.title}</PostTitle>
                        <PostSubtitle>{post.subtitle}</PostSubtitle>
                    </div>
                </PostWrapper>
            ))}                
        </ListPostWrapper>
    )
}