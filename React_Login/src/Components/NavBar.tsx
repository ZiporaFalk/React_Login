import { useContext } from "react"
import { Link } from "react-router"
import { TheContextUser } from "./HomePage"
const stylyLink = {
    color: "rgb(219, 30, 40)"
}
const NavBar = () => {
    const { user } = useContext(TheContextUser)
    return (<>
        <nav style={{ position: "fixed", top: "0", right: "0", padding: "20px" }}>
            <Link to="/" style={stylyLink} >home </Link>
            <Link to="/recipes" style={stylyLink}> | recipes </Link>
            {user.Id != 0 && <Link to="/Addrecipe" style={stylyLink}>| Add Recipe </Link>}
        </nav>
    </>)
}

export default NavBar


