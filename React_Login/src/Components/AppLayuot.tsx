import { Outlet } from "react-router"
// import NavBar from "./NavBar"
import HomePage from "./HomePage"


const AppLayuot = () => {
    return (<>

        <header>
            <HomePage ></HomePage>
        </header>
        <div >
            <Outlet />
        </div>
    </>)
}

export default AppLayuot


