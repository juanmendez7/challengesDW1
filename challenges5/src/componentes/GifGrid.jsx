import { useEffect, useState } from "react";
import getGifs from "../Helpers/GetGifs";
import { GifItem } from "./gifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";


export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs( category )

    return (
        <>
         <h3>{ category }</h3>
         <div className="card-grid">
            {
                images.map((image, key) => {
                    return <GifItem key = {key} {...image}></GifItem>
                })
            }

         </div>
        </>
    )
}