import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../../assets/styles/Inputs.css'
import '../../assets/styles/FormLogin.css'

function FormLogin() {
    const navigate = useNavigate()
    const form = useRef()
    const handlerClickEnviar = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current);

        let URI = 'http://34.225.239.102/api/iniciar';
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                usuario: formData.get('usuario'),
                contrasenia: formData.get('contrasenia'),
            })
        }
        fetch(URI, options)
        .then((response) => response.json())
        .then((data) => {
            alert(JSON.stringify(data))
        });
       
        alert("Su registro esta siendo procesado");

        alert('{"status":true,"message":"El registro se almacenó correctamente"}');

        navigate("/altabus");
    }
   
    return (
        <>
        <form ref={form} className="form-register">
                <h2 className="form__titulo">Login</h2>
                <div className="contenedor-inputs">
                    <input className="input-100" type="text" name='usuario' id='usuario' placeholder="Nombre De Usuario" ></input>
                    <input className="input-100" type="password" name='contrasenia' id='contrasenia' placeholder="Contraseña" ></input>
                    <button className="btnAltaBus" onClick={handlerClickEnviar} >Accede con nosotros</button>
                </div>
                <Link className='registrarseLogin' to="/register">Registrarse</Link>
            </form>
        </>
      );
}
export default FormLogin;