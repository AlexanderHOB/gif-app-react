import React from 'react'
import './GridGif.css'

export const GifGridItem = ({title, url}) => {
    return (
        <div className="grid__gifs__self animate__animated animate__flipInX">
            <img src={url} alt={title}/>
            <p className="grid__gifs__title">{title}</p>
        </div>
    )
}
