import { useState } from 'react';

//Props
export const AddCategory = ( { onNewCategory } ) => {
    
//     const [ inputValue, setInputValue ] = useState('Dragon Ball');
  
//     const onInputChange = ( event ) => {
//         console.log( event.target.value );
//         setInputValue( event.target.value );
//     }

//     return (
//     <input
//         type="text"
//         placeholder="Search for gifs"
//         value={ inputValue }
//         onChange={ (event) => onInputChange(event) }
//     />
//   )

    const [ inputValue, setInputValue ] = useState('');
  
    const onInputChange = ( {target} ) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //Validar longitud minima (1) para insertar el registro
        if (inputValue.trim().length <=1) return;
        setInputValue('');
        //callback with categories
        //setCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        
    }

    return (
        //<form onSubmit={ (event) => onSubmit(event)}> 
    <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="Search for gifs"
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
    />
    </form>
  )

}
