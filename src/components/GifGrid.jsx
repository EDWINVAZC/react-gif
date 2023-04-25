// useEffect, sirve para disparar efectos secundarios
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  console.log({ isLoading });

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Loading...</h2> )
          
        }
        <div className="card-grid">
          {
            images.map( ( image ) => (
              // Nuevo componente que se renderizara aqui
              <GifItem 
              key={ image.id }
              { ...image }
              />
            ))
          }
          
        </div>

        {/* <h5>{ counter }</h5>
        <button onClick={ () => setCounter( counter + 1 ) } >+1</button> */}

    </>
  )
}

export default GifGrid;