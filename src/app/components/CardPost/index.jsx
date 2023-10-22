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

const CardItemLink = styled.a`
    font-size: 1rem;
    font-weight: 400;
    color: #2D1441;
`

const CardItemTags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const CardItemTag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background-color: #F4F0F8;
`

const CardItemTagText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #2D1441;
`


export default function CardPost({ title, subtitle, description, link, tags, image }) {
    return (
        <CardItem>
            <CardItemimage src={image} alt={title} />
            <CardItemTitle>{title}</CardItemTitle>
            <CardItemSubtitle>{subtitle}</CardItemSubtitle>
            <CardItemDescription>{description}</CardItemDescription>
            <CardItemLink href={link}>Acessar</CardItemLink>
            <CardItemTags>
                {tags.map((tag, index) => (
                    <CardItemTag key={index}>
                        <CardItemTagText>{tag}</CardItemTagText>
                    </CardItemTag>
                ))}
            </CardItemTags>
        </CardItem>
    )
}