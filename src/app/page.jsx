"use client"
import { createGlobalStyle, styled } from "styled-components"
import { Provider } from 'react-redux';

import store from './store';
import Home from './home/page';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

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

const defaultProps = {
  title: "Bem vindo ao blog <span style={{ color: '#FF6978' }}>ADS</span>!",
  subtitle: "Lorem ipsum dolor sit amet consectetur",
  image: 'https://www.ifnmg.edu.br/arquivos/Almenara/Logos/LADS.png'

}


export default function MyApp({ children = <Home />, title = defaultProps.title, subtitle = defaultProps.subtitle, image = defaultProps.image }) {

  return (
    <Provider store={store}>
      <Main>
        <GlobalStyle />
        <Header title={title} subtitle={subtitle} image={image} />
        <Container>
          {children}
        </Container>
        <Footer />
      </Main>
    </Provider>)
}