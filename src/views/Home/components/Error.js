const Error = ( props ) => {
    return (
        <div className={`${props.errorMessage ? 'flex' : 'hidden'} items-center justify-center`}>
            <p className="txt-xl">{props.errorMessage}</p> 
        </div>
    );
}

export default Error