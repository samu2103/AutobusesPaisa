import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../assets/styles/Inputs.css'
import '../../assets/styles/FormRegister.css'


function FormRegister() {
        const navigate = useNavigate()
        const form = useRef()
        const handlerClick = (e) => {
            e.preventDefault()
            const formData = new FormData(form.current);
    
            let uri = 'http://34.225.239.102/api/registrar/usuario';
            let options = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    nombre: formData.get('nombre'),
                    usuario: formData.get('usuario'),
                    correo: formData.get('correo'),
                    contrasenia: formData.get('contrasenia')
                })
            }
            fetch(uri, options)
            .then((response) => response.json())
            .then((data) => {alert(JSON.stringify(data))});
        
       
        const newForm = new FormData(form.current)
        alert(' Nombre: '+ newForm.get('nombre') + '  UserName: '+ newForm.get('usuario') + '  Correo: ' + newForm.get('correo') + '  Password: ' + newForm.get('contrasenia'));
        alert('{"status":true,"message":"El registro se almacenó correctamente"}');
        navigate("/altabus");
    }
   
    return ( 
        <form ref={form} className="form-register">
                <h2 className="form__titulo">Login</h2>
                <div className="contenedor-inputs">
                    <input className="input-100" type="text" placeholder="Nombre De Completo" name='nombre' id="nombre"></input>
                    <input className="input-100" type="text" placeholder="Nombre De Usuario" name='usuario' id="usuario"></input>
                    <input className="input-100" type="text" placeholder="Correo Eléctronico" name='correo' id="correo"></input>
                    <input className="input-100" type="password" placeholder="Contraseña" name='contrasenia' id="contrasenia"></input>
                    <button className="btnAltaBus" onClick={handlerClick} >Acceder</button>
                </div>
            <Link className='registrarseLogin' to="/altabus">Dar Alta A Autobucito</Link>
        </form>
     );
}

export default FormRegister;