import { observer } from "mobx-react-lite"
import Recipes from "./StoreRecipes"
import { Link, Outlet } from "react-router"

export default observer(() => {
    return (<>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", textAlign: "center", alignItems: "center", direction: "rtl", top: "10px" }}>
            <div style={{ padding: "50px" }}>
                <nav >
                    {Recipes.list.map(r => <div key={r.id}> <Link to={`/recipes/${r.id}`}>{r.title} </Link> </div>)}
                </nav>
            </div>
            <Outlet />
        </div>
    </>)
})


