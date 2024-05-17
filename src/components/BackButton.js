import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate(-1)
    };
    
    return (
        <button className="border-2 border-red-400 rounded-md 
            px-2 h-10 text-xl text-red-400 hover:bg-red-400 hover:text-white mt-16"
            onClick={handleBackClick}
        >
            Volver atras
        </button>
    )
}

export default BackButton