import './CartWidget.css'
import cartLogo from './shopping-cart.png'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity, total } = useContext(CartContext)

    const navigate = useNavigate()

    return(
        <div className="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cartLogo} alt='cart-widget' className='CartImg'/>
            {totalQuantity} total ${total}
        </div>
    );
}

export default CartWidget