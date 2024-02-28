const Error = ( props ) => {
    return (
        <div className="flex items-center justify-center h-full">
            <p className="txt-xl">{props.errorMessage}</p> 
        </div>
    );
}

export default Error;