"use client"
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { styled } from 'styled-components';

import GridPost from '../components/GridPost';
import CardPost from '../components/CardPost';
import api from '../services/api'


const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`

export default function Home() {
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

    const posts = useSelector((state) => state.posts)
    return (
        <HomeWrapper>
            <GridPost title="Post internos" subTitle="sub">
                {
                    posts.map((post, index) => (
                        <CardPost
                            key={post.id}
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
            <GridPost title="Post Externos" subTitle="sub">
                {
                    posts1.map((post, index) => (
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