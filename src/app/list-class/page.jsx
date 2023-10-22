"use client"

import React from 'react';
import { styled } from 'styled-components';

import Base from '../page';
import CardClass from '../components/CardClass';
import GridPost from '../components/GridPost';


const ListClassWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    margin-bottom: 2rem;
`


const listClass = [
    {
        title: 'Ads modulo I',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg'
    },
    {
        title: 'Ads modulo IV',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg'
    },
    {
        title: 'Ads modulo VI',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg'
    },
]



export default function ListClass() {
    return (
        <Base title="Turma do ADS" >
            <ListClassWrapper>
                <GridPost title='' subTitle=''>
                    {
                        listClass.map((item, index) => {
                            return <CardClass key={index} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
                        })
                    }
                </GridPost>
            </ListClassWrapper>
        </Base>
    )
}