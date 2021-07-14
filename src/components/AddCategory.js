import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setinputValue] = useState('');
    
    //Para actualizar los cambios dentro de la caja
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    //Para agregar a la lista
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategory(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    //retorna los valores y los agrega a la lista
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type = "text"
            value = {inputValue}
            onChange = { handleInputChange }
             />
        </form>      
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}