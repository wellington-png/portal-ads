import { styled } from 'styled-components'


const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #F4F0F8;
`

const CardItemimage = styled.img`
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
`

const CardItemTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2D1441;
`

const CardItemSubtitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: #2D1441;
`

const CardItemDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #2D1441;
`




export default function CardClass({ title, subtitle, description, image }) {
    return (
        <CardItem>
            <CardItemimage src="https://picsum.photos/200/300" alt={title} />
            <CardItemTitle>{title}</CardItemTitle>
            <CardItemSubtitle>{subtitle}</CardItemSubtitle>
            <CardItemDescription>{description}</CardItemDescription>
        </CardItem>
    )
}