import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['Turtle']);

    /* const handleAdd = () => {
        setCategorias([...categorias, 'Digimon']);

    } */

    return (
        <>
            <h2>Gif Expert App</h2> 
            <AddCategory setCategorias={ setCategorias } />
            <hr />

            <ol>
                {
                    categorias.map( (category, i) =>
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>
            

        </>
    )
}
