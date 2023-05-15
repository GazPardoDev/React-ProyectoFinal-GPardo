import ItemDetail from "../ItemDetail/ItemDetail";
/*import { useState, useEffect } from 'react' */
/* import { getProductById } from "../../asyncMock" */
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../services/firebase/firestore/products'
import { useAsync } from "../../hooks/useAsync"


const ItemDetailContainer = () => {
    
    const { itemId } = useParams()

    const getProductsWithId = () => getProductsById(itemId)

    const { data: product, error, loading } = useAsync(getProductsWithId, [itemId])
        

    return (
            <div className= "ItemDetailContainer">
                <ItemDetail {...product}/>
            </div>

    )
}

export default ItemDetailContainer