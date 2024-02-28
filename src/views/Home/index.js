import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Chairs from "../../assets/chairs.png"

const Home = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }
    
    const handleCleanClick = () => {
        setSearch('');
    }
    //trim elimina los espacios en blanco finales e iniciales como tambine las terminaciones de linea
    const handleSearchClick = () => {
        navigate(`/results/${search.trim()}`)
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-2/5">
                <img src={Chairs} alt="Butacas de Cine" className="w-full h-full object-cover"/>
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-10">
                <h2 className="text-4xl font-bold font-lato">Busca tu pelicula...</h2>
                <input 
                    className="bg-special-grey font-lato w-full my-3 h-9 p-1 border 
                                focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
                    value={search}
                    onChange={handleInputChange}
                />
                <div className="flex w-full justify-between">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9" 
                            style={{width: "48%"}}
                            onClick={handleSearchClick}        
                    >
                        Buscar
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-lato w-full shadow-lg h-9" 
                            style={{width: "48%"}}
                            onClick={handleCleanClick}        
                    >
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Home;