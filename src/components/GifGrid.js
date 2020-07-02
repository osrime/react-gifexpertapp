import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {


    const {data:images, loading} = useFetchGifs( category );

    console.log(loading);





    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__faster"> { category } </h3>

            {loading && <p className="animate__animated animate__flash animate__slow animate__repeat-3">Loading...</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key= { img.id }
                            { ...img }
                        />
                    ))  
                }
            </div>
        </>
    )
}
