import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchMovieDetail, fetchMovieRatings } from "../../redux/actions/movies";

import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import Loading from "../Results/components/Loading";
import Error from "../Results/components/Error";

const Detail = () => {
   const { movieId } = useParams();
   const dispatch = useDispatch();
   const {  
      isFetchingMovieRatings,
      isFetchingMovieDetail,
      isLoading,
      errorFetchingMovieDetail,
      errorFetchingMovieRatings,
      ratings,
      movieDetail
    } = useSelector( (state) => /*state.moviesReducer*/ state.moviesReducerSlice);
   
const state = useSelector( (state) => state);
console.log(state);

   useEffect( () => {
      dispatch(fetchMovieRatings(movieId));
   }, [dispatch, movieId]);
   
   useEffect( () => {
      dispatch(fetchMovieDetail(movieId));
   }, [dispatch, movieId]);
 
   const renderContent = () => {
      if (isLoading || isFetchingMovieDetail || isFetchingMovieRatings) {
         return <Loading message="Obteniendo informacion de la pelicula..."/>
      }
      else if ( errorFetchingMovieDetail || errorFetchingMovieRatings) {
         return <p>"Ha ocurrido un erro al obtener la informacion de la pelicula"</p>
      }

      return (
         <>
            <LeftContainer imageUrl={movieDetail?.details?.image?.url} />
            <RightContainer 
               title={movieDetail.details?.title ?? 'Sin titulo'}
               year={movieDetail.details?.year ?? 'No disponible'}
               rating={ratings.rating}
               synopsis={movieDetail.overview?.plotSummary?.text ?? 'No disponible'}
               genres={movieDetail.overview?.genres ?? 'No disponible'}
               cast={movieCast}
            />
         </>
      )
   };

   

   const movieCast = movieDetail?.fullCredits?.cast?.slice(0, 20) ?? [];
   return (
      <div className="flex flex-row px-16 h-screen items-center justify-center">
         {renderContent()}
      </div>
   );
}
export default Detail;