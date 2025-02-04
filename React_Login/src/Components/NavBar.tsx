import { useContext } from "react"
import { Link } from "react-router"
import { TheContextUser } from "./HomePage"

const NavBar = () => {
    const { user } = useContext(TheContextUser)
    return (<>
        <nav style={{ position: "fixed", top: "0", right: "0", padding: "20px" }}>
            <Link to="/">home </Link>
            <Link to="/recipes"> | recipes </Link>
            {user.Id != 0 && <Link to="/Addrecipe" >| Add Recipe </Link>}
        </nav>
    </>)
}

export default NavBar

