"use client"
import { createGlobalStyle, styled } from "styled-components"

import Home from './home/page';
import Header from './components/Header';
import Container from './components/Container';
import  Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #f5f5f5;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`


export default function Base({ children=<Home/> }) {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </Main>
  );
}