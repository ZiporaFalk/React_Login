import { Outlet } from "react-router"
// import NavBar from "./NavBar"
import HomePage from "./HomePage"


const AppLayuot = () => {

    return (<>
        <header>
            <HomePage ></HomePage>
        </header>
        <h1>אתר המתכונים שלי</h1>
        <div >
            <Outlet />
        </div>
    </>)

}

export default AppLayuot


