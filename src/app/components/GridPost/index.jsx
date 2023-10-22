import { styled } from 'styled-components'

import CardPost from '../CardPost'

const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem 2rem;
`

const GridTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #2D1441;
`

const GridSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #2D1441;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
`


export default function GridPost({ title, subTitle, children  }) {
    return (
        <GridWrapper>
            <GridTitle>{ title }</GridTitle>
            <GridSubtitle>{ subTitle }</GridSubtitle>
            <Grid>
                { children }
            </Grid>           
        </GridWrapper>
    )
}
