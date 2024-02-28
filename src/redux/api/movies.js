/**
 * En este archivo se solicitan las peliculas por titulo.
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Se declaran aca para no hacer mucho bardo en el llamado a la api y porque se usan siempre los mismos headers. 
const headers = {
    'X-RapidAPI-Key': 'ee4e94d805msh77a423d308d904ep14a6bcjsndd595eb5bae0',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
};

//Llamado a la API. 
export const moviesApi = createApi({
    reducerPath: 'moviesApi', //Se nombra toda la informacion que devuelve el llamado a la API. (Nombre del reducer dentro del store)
    baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com' }), //base URL de la api
    endpoints: (builder) => ({ //
        fetchMovies: builder.query({ //.query si es para un GET, .mutation para POST DELETE PUT 
            query: (title) => ({ //title se pasa por parametro desde el componente que consume el hook
                url: `/title/find?q=${title}`, //Segun la documentacion de la API para traer una pelicula por su titulo el path
                                                //debe ser asi (concatenandose a la base url)
                method: 'GET',
                headers
            })
        })
    })
});

//el nombre useFetchMoviesQuery se crea por default. use(por ser hook)+nombre del endpoint+Query (lo que se hizo con el builder)
//con ese nombre se puede usar el hook en los demas componentes y se debe configurar el store
export const { useFetchMoviesQuery } = moviesApi; 
