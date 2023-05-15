import React from 'react';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { createOrdenCompra,getOrdenCompra } from '../../services/firebase/firestore/orders';
import { getProducts, getProductsById } from "../../services/firebase/firestore/products";
import { useNavigate } from 'react-router-dom'
import './Checkout.css'
import Swal from "sweetalert2"

const Checkout = () => {
    const {getTotal, cart, clearCart} = useContext(CartContext)
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...cart]

        aux.forEach(prodCarrito => {
            getProducts(prodCarrito.id).then(prod => {
                if(prod.stock >= prodCarrito.quantity) {
                    prod.stock -= prodCarrito.quantity
                    getProductsById(prodCarrito.id, prod)
                } else {
                }
            })
        })

        createOrdenCompra(cliente, getTotal , new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id)
            .then(item => {
                Swal.fire(
                    'COMPRA CONFIRMADA',
                    `¡Muchas gracias por su compra, su orden es ${item.id}!`,
                    'success'
                )
                clearCart()
                e.target.reset()
            }).catch(error => {
                Swal.fire(
                    'Error',
                    `HUBO UN ERROR EN SU OPERACIÓN. POR FAVOR VUELVA A INTENTARLO`,
                    'error'
                )
            })
            
        })
        
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="form">
                    <label htmlFor="nombre" className="formData">NOMBRE Y APELLIDO</label>
                    <input type="text" className="formDataNew" name="nombre" />
                </div>
                <div className="form">
                    <label htmlFor="email" className="formData">DIRECCIÓN EMAIL</label>
                    <input type="email" className="formDataNew" name="email" />
                </div>
                <div className="form">
                    <label htmlFor="email2" className="formData">REPETIR EMAIL</label>
                    <input type="email" className="formDataNew" name="email2" />
                </div>
                <div className="form">
                    <label htmlFor="dni" className="formData">DNI</label>
                    <input type="number" className="formDataNew" name="dni" />
                </div>
                <div className="form">
                    <label htmlFor="celular" className="formData">NÚMERO DE CELULAR</label>
                    <input type="number" className="formDataNew" name="celular" />
                </div>
                <div className="form">
                    <label htmlFor="direccion" className="formData">DOMICILIO</label>
                    <input type="text" className="formDataNew" name="direccion" />
                </div>
                <button className='buttonConfirm' type="submit">GENERAR ORDEN</button>
            </form>
        </div>
    );
}

export default Checkout;