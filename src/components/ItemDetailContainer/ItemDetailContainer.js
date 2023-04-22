import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from 'react'
/* import { getProductById } from "../../asyncMock" */
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'


function ItemDetailContainer() {
    const [product, setProduct] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            }).catch(error => {
                console.log(error)
            })
        /* getProductById(itemId)
            .then(res => {
                setProduct(res);
            })
            .catch(error => {
                console.log(error);
            }); */
    }, [itemId]);


    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </div>
    );
}

export default ItemDetailContainer