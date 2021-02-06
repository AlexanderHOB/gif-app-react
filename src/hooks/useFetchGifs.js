import { useState,useEffect } from "react";
import { fetchGifts } from "../helpers/getGif";


export const useFetchGifs=(category)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {
        fetchGifts(category).then(imgs =>{
            setState({
                data:imgs,
                loading:false,
            })
        })
    }, [category])
    return state;
}