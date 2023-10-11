import { useState } from "react";
import { useEffect } from "react";
export const useFetch = ( url ) => {
    const [state, setState] = useState({
        data: null,
        isLoading:true,
        hasError: null
    })

    const getFetch = async () => {
        const api = await fetch ( url )
        const data = await api.json();

        setState({
            data,
            isLoading:false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return{
        ...state
    }
}