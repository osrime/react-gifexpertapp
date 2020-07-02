import { useState, useEffect } from "react"
import { getGifs } from "../components/helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect( ()  =>  {
        


        getGifs( category )
            .then( img => {

                setState({
                    data: img,
                    loading: false
                })
                
            })

    }, [])

    

    return state  //{data: [], loading: true}

}