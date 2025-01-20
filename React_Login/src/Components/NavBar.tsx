import { Link } from "react-router"


const NavBar = () => {
 
    return (<>
        <nav style={{
            position: "fixed", top: "0", right: "0", padding: "20px"
        }}>
            <Link to="/">home </Link> |
            <Link to="/about">about </Link> |
            <Link to="/hello">hello </Link> |
            <Link to="/zipi">zipi </Link>
        </nav>
    </>)
}

export default NavBar

