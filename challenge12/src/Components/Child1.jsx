import React from "react";
import { useContext } from "react";
import { UserProvider } from "../context/UserProvider";
import { UserContext } from "../context/UserContext";

export const Child1 = () => {
    const { user } = useContext( UserContext )

    return(
        <>
            <div>Child component 1</div>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}