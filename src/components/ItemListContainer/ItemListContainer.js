import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/* import { getProducts, getProductsByCategory } from "../../asyncMock" */
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        
        const productsRef = categoryId
            ? query(collection(db, 'products'), where('category','==', categoryId)) 
            : collection(db, 'products')
        
        getDocs(productsRef)
            .then(snapshot => {
                
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
        
        .catch(error => {
            console.log(error)
        })
        /* const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            }) */
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer