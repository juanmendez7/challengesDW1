import React from "react";
import { UseCounter } from "../hooks/UseCounter";
import { useFetch } from "../hooks/useFetch";


export const MultipleCustomHooks = () => {
    const {counter, increment} = UseCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
        <h1>MultipleCustomHooks</h1>
        <hr/>

        {
            isLoading ? (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
            ) : (
                <blockquote className='blockquote text-end'>
                    <p className='mb-1'> {data [0]?.quote} </p>
                    <footer className='blockquote-footer'>{ data.name}</footer>
                </blockquote>
            )
        }

        <button className='btn btn-primary' onClick={() => increment()}>Next Quote</button>
        
        </>
    )
}