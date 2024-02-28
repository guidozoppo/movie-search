import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../views/Home/';
import Results from '../views/Results';
import Detail from '../views/Details';

const RoutesComponent = () => {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path='/results/:title' element={<Results />} />
            <Route path='/detail/:movieId' element={<Detail />} />
        </Routes>
    </BrowserRouter>
    )
};

export default RoutesComponent;