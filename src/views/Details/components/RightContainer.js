import Rating from "./Rating";
import Genre from "./Genre";
import Cast from "./Cast";
import BackButton from "../../../components/BackButton";

const RightContainer = ( {title, year, rating, synopsis, genres, cast} ) => {
    return (
        <div className="flex flex-col w-2/3 items-start overflow-y-auto justify-center pl-11 pb-4">
            <h2 className="text-4xl font-bold my-1">
                {`${title} (${year})`}
            </h2>
            {rating && <Rating rating={rating}/>}
            <p className="text-left"> {synopsis} </p>
            {genres?.length > 0 && <Genre genre={genres}/>}
            {cast?.length > 0 && <Cast cast={cast}/>}
            <BackButton />
        </div>
    )
};

export default RightContainer;