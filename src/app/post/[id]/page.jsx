"use client"
import Base from '../../page'

import Post from './index'


export default function PostPage({ params: { id } }) {
    console.log(id)
    return (
        <Base title="Detalhes do post">
            <Post id={id} />
        </Base>
    )
}