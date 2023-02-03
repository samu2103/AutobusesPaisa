import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AltaBus from '../pages/AltaBus';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/altabus' element={<AltaBus/>}/>
            </Routes>
        </BrowserRouter>
      );
}

export default App;