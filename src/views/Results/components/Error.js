import BackButton from "../../../components/BackButton";

const Error = ( props ) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <p className="txt-xl">{props.errorMessage}</p>
            <BackButton />
        </div>
    );
}

export default Error;