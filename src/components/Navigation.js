import { Link } from 'react-router-dom'

const Navigation = () => {
    return ( 
        <nav className="navbar">
            <h1>Warhammer 4e</h1>
                <Link to="/">Home</Link>
                <Link id="a2" to="/shop">Sklep</Link>
        </nav>
     );
}
 
export default Navigation;