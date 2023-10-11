import React from "react";
import { useFetch } from "./hooks/useFetch";


const ComponenteFetch = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/4'; 
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {hasError && <p>Error: {hasError.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ComponenteFetch;