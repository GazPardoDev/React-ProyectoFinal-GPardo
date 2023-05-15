import './NavBar.css'
import { Link, useParams, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from './main-logo.png'
import { getCategories } from '../../services/firebase/firestore/categories'
import { useAsync } from '../../hooks/useAsync'

const NavBar = () => {
           
    const { categoriesId } = useParams ()

    const getCategoriesWithId = () => getCategories (categoriesId)

    const { data: categories, error, loading} = useAsync(getCategoriesWithId, [categoriesId])

    if(loading) {
        return <h1>Está cargando...</h1>
    }

    if(error) {
        return <h1>Por favor, vuelva a cargar la pagina</h1>
    }


  return (
    <nav className="NavBar" >
        
        
        <Link to='/'><img src={logo} alt="Good Morning!" /></Link>
        <div className="Categories">
        {
            categories.map(cat => {
                return (
                  <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                )
              }) 
        }
            <CartWidget/>
        </div>
    </nav>
  )
   
}

export default NavBar