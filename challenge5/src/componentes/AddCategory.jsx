import React from 'react';

import { useState } from 'react';
export const AddCategory = ({onAddCategory}) => {
    const [InputValue, setInputValue] = useState('...')

    const onInputChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory( InputValue );
        setInputValue('');
    }


    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <input
            type="text"
            placeholder='Buscar'
            value={InputValue}
            onChange={(event) => onInputChange(event)}
            />

        </form>
    )
}