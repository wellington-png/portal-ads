"use client"
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import GridPost from '../components/GridPost';
import CardPost from '../components/CardPost';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem;
`

export default function Home() {
  const posts = useSelector((state) => state.posts);

  

  return (
    <HomeWrapper>
      <GridPost title="Posts Internos" subTitle="sub">
        {posts.map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            link={post.link}
            tags={post.tags}
            image={post.image}
          />
        ))}
      </GridPost>
    </HomeWrapper>
  )
}