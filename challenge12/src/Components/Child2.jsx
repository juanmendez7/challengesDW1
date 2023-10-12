import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export const Child2 = () => {
    const {setUser} = useContext( UserContext )

    const onLogin = () => {
        setUser({
            id: 313,
            name: 'Jonathan Lopez',
            email: 'jlopez0313@hotmail.com'
        })
    }

    return (
        <>
            <div>Child component 2</div>
            <button className='btn btn-primary'
            onClick={() => onLogin()}
            >
                SetUserInfo
            </button>
        </>
    )
}