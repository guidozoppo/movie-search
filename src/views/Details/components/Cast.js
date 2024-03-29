const Cast = ( { cast } ) => {
    return (
        <div className="flex flex-row flex-wrap my-1">
            <span className="font-bold mr-1">Cast:</span>
            {cast.map( (value, index) => (
                <span key={index} className="mr-1">
                    {`${value.name}${index !== cast.length -1 ? ',' : '.' }`}
                </span>))}
        </div>
    )
};

export default Cast;