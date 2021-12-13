import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return ( 
    
    <header className="header">
        
            <h2>Logo</h2>
           
        <nav>  
            <ul>    
                <Link to ="/categoria/guitarra" ><li>Guitarras</li></Link>
                <Link to ="/categoria/bajo" ><li>Bajos</li></Link>
                <Link to ="/categoria/ukelele" ><li>Otros Instrumentos</li></Link>
           </ul>
        </nav>
    </header>)
}

export default NavBar