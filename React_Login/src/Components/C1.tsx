import { Outlet } from "react-router"
import NavBar from "./NavBar"


const C1 = () => {

    return (<>
        <NavBar></NavBar>
        <Outlet />
    </>)
}

export default C1


