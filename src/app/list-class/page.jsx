"use client"

import React from 'react';
import { styled } from 'styled-components';

import Base from '../page';
import CardClass from '../components/CardClass';



const ListClassWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`


const listClass = [
    {
        title: 'Ads modulo I',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://picsum.photos/200/300'
    },
    {
        title: 'Ads modulo IV',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://picsum.photos/200/300'
    },
    {
        title: 'Ads modulo VI',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://picsum.photos/200/300'
    },
]



export default function ListClass() {
    // CardClass({ title, subtitle, description, image }
    return (
        <Base>
            <ListClassWrapper>
                {/* <CardClass title={listClass[0].title} subtitle={listClass[0].subtitle} description={listClass[0].description} image={listClass[0].image} /> */}
                {
                    listClass.map((item, index) => {
                        return <CardClass key={index} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
                    })
                }
            </ListClassWrapper>
        </Base>
    )
}