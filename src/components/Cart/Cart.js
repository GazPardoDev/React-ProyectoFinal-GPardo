import { useContext, useState } from "react";
import './cart.css'
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [provincia, setProvincia] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setNombre('');
        setApellido('');
        setTelefono('');
        setCodigoPostal('');
        setDireccion('');
        setCiudad('');
        setProvincia('');
    }

    return (
        <div>
            <h1 className="carritoFinal">CARRITO DE COMPRA</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                {prod.name}
                            </div>
                        )
                    })
                }
                <form onSubmit={handleSubmit} className="formularioCart">
                    <label>
                        Nombre:
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br/><br/><br/>
                    </label>
                    <label>
                        Apellido:
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} /><br/><br/><br/>
                    </label>
                    <label>
                        Teléfono:
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} /><br/><br/><br/>
                    </label>
                    <label>
                        Código Postal:
                        <input type="text" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} /><br/><br/><br/>
                    </label>
                    <label>
                        Dirección:
                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} /><br/><br/><br/>
                    </label>
                    <label>
                        Ciudad:
                        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} /><br/><br/><br/>
                    </label>
                    <label>
                        Provincia:
                        <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} /><br/><br/><br/>
                    </label>
                </form>
            </div>
            <Link className="botonCompra" to='/checkout'>CONFIRME SU COMPRA</Link>
        </div>
    )
}

export default Cart;