import { startFetchMovieRatings, errorFetchMovieRatings, successFetchMovieRatings,
         startFetchMovieDetail, successFetchMovieDetail, errorFetchMovieDetail
} from "../actions/movies";

const initialState = {
    isFetchingMovieRatings: false,
    isFetchingMovieDetail: false,
    isLoading: true,
    errorFetchingMovieDetail: null,
    errorFetchingMovieRatings: null,
    successFetchingMovieRatings: null,
    successFetchingMovieDetail: null,
    ratings: {},
    movieDetail: {},
};
const MoviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case startFetchMovieRatings.toString():    
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: true,
            };
        case successFetchMovieRatings.toString():    
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: action.payload.data,
                successFetchingMovieRatings: true,
                errorFetchingMovieRatings: null,
            };
        case errorFetchMovieRatings.toString():    
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: {},
                successFetchingMovieRatings: false,
                errorFetchingMovieRatings: action.payload.error
            };
        case startFetchMovieDetail.toString():
            return {
                ...state,
                isFetchingMovieDetail: true,
            };
        case successFetchMovieDetail.toString():
            return {
                ...state,
                successFetchingMovieDetail: true,
                errorFetchingMovieDetail: null,
                movieDetail: { ...action.payload },
                isFetchingMovieDetail: false, 
            };
            case errorFetchMovieDetail.toString():
                return {
                isFetchingMovieDetail: false,
                successFetchingMovieDetail: false,
                errorFetchingMovieDetail: action.payload.error,
                movieDetail: {}, 

            };
        default:
            return state;
    }
};

export default MoviesReducers;