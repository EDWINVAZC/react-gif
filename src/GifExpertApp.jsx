import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Dragon Ball Super' ]);

  const onAddCategory = ( newCategory ) => {
        
    console.log(newCategory);

    if (categories.includes(newCategory) ) return;

    //categories.push(newCategory);
    setCategories([ newCategory, ...categories]);
    //setCategories([ 'New Category', ...categories ]);
    //setCategories( cat => [ ...cat, 'New Category' ] );
  }

  return (
    <>
        
        <h1>GifExpertApp</h1>

        
        <AddCategory 
        onNewCategory = { (value) => onAddCategory(value) }
        currentCategories={ categories }
        />
        
        

        {/* Delete button */}
        {/* <button onClick={ onAddCategory }>Add Category</button> */}
        
            {/* map permite barrer cada uno de los elementos del arreglo y regresar a algo nuevo*/}
            {
                  categories.map( (category) => (
                  <GifGrid
                      key={ category }
                      category={ category } />
                  ))
            }

    </>
  )
}
