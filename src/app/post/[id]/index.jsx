import { styled } from 'styled-components'
import { useSelector } from "react-redux";
const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

const BlogContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`


export default function Post({ id }) {
    const post = useSelector(state => {
        const post = state.posts.find((item) => parseInt(item.id) === parseInt(id))
        console.log(post)
        return post
    
    })


    return (
        <>
            <PostWrapper>
                {
                    post ? (
                        <>
                            <h1>{post.title}</h1>
                            <BlogContent>
                                <p>{post.conteudo}</p>
                            </BlogContent>
                        </>
                    ) : (
                        <h1>Post não encontrado</h1>
                    )
                }
            </PostWrapper>
        </>
    )
}