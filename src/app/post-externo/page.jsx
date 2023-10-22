"use client"
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import ListPost  from '../components/ListPost'
import Base from '../page'
import api, { getNews } from '../services/api'

const PostInternoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`



export default function PostInterno() {
    const [posts1, setPosts] = useState([])
    useEffect(() => {
            async function getPosts() {
                const response = await api.get('')
                const articles = response.data.articles.filter((article) => article.urlToImage)

                setPosts(articles.map((post) => ({
                    title: post.title,
                    subtitle: post.author,
                    description: post.description,
                    link: post.url,
                    tags: [],
                    image: post.urlToImage
                })))
            }
            getPosts()
    }, [])

    return (
        <Base>
            <h1>Post Externo</h1>
            <PostInternoWrapper>
                <ListPost posts={posts1} />
            </PostInternoWrapper>
        </Base>
    )
}