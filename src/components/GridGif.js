import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import './GridGif.css'
export const GridGif = ({category}) => {
        const {data:imgs, loading} = useFetchGifs(category)
    return (
        <>
        <p>{category}</p>
        {
            loading && <div className="load-wrapp">
           <div className="load-9">
                <div className="spinner">
                <div className="bubble-1"></div>
                <div className="bubble-2"></div>
                </div>
            </div>
        </div>
        }
        
        <div className="grid__gifs">
            {imgs.map(img=> <GifGridItem key={img.id} {...img}/>)}
        </div>
        </>
    )
}
