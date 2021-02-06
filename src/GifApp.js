import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GridGif } from './components/GridGif'
import './gifApp.css'
export const GifApp = () => {
    const [categories, setCategories] = useState(['kimetsu no yaiba'])
    return (
        <section className="container">
            <h2> Divierteté con los gifs </h2>
            <CategoryAdd setCategories={setCategories}/>
            
           { categories.map(category=> <GridGif key={category} category={category} />)}
        </section>
    )
}
