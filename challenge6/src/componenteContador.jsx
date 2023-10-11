import React from "react";
import { UseCounter } from "./UseCounter";

const ComponenteContador = () => {
    const {Counter, Increment, Decrement, Reset} = UseCounter(0);


    return (
        <div>
            <p>Contador: {Counter}</p>
            <button onClick={Increment}>Incrementar</button>
            <button onClick={Decrement}>Decrementar</button>
            <button onClick={Reset}>Reiniciar</button>

        </div>
    )
}

export default ComponenteContador;