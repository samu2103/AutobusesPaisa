import { Link } from "react-router-dom";
import Imagenes from "../components/atoms/Imagenes";
import '../assets/styles/Texto.css'

function Home(){
    
    return (
        <>
            <Link className="home" to="/login">Inicia sesión con nosotros</Link>
        </>
    )
}

export default Home;