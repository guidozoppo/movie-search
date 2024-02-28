import { useNavigate, useParams } from "react-router-dom";
import movieTheater from "../../assets/movie-theater.png";
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "./components/Loading";
import List from "./components/List";
import Error from "./components/Error";

const Results = () => {
    const { title } = useParams();
    //Se realiza llamado al endpoint con el title que esta en el params del path
    const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title); 
    const navigate = useNavigate();

    //El movieId viene del componente ListItem
    const handleListItemClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    };

    const renderContent = () => {
        if (error) {
            return <Error errorMessage="Ha ocurrido un error con la busqueda de la pelicula"/>
        } else if (isLoading || isFetching) {
            return <Loading message="Buscando Peliculas..."/>
        } else if (isSuccess && movies?.results) {
            return <List data={movies?.results} onListItemClick={handleListItemClick} />
        }
    };

    return (
        <div className="flex flex-row">
            <div className="w-3/5 h-screen overflow-y-auto px-10">
                {renderContent()}
            </div>
            <div className="w-2/5">
                <img src={movieTheater} alt="Movies Chairs" className="w-full h-screen object-cover" />
            </div>
        </div>
    )
}

export default Results;