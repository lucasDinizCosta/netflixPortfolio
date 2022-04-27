import React, { useEffect } from 'react'
import { getMovies } from '../api';

function Row({title, path}) {
  // Define um estado/hook para movies
  const [movies, setMovies] = React.useState([]);
  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data: ", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  }
  // Hook executada toda vez que a pagina renderizar
  useEffect(() => {
    // faz alguma coisa
    fetchMovies(path);
    // return () => {
    //   // faz alguma coisa quando for destruido
    // }
  }, [path]) // dependencias
  

  return (
    <div>Row</div>
  )
}

export default Row
