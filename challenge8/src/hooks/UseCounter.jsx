import { useState } from "react";

export const UseCounter = (value) => {
    const [counter, setCounter] = useState(value)

    const increment = () => {
        setCounter( counter + 1)
    }

    const decrement = () => {
        setCounter( counter - 1)
    }

    const reset = () => {
        setCounter(value)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}