import { Dispatch, createContext, useReducer } from "react"
import Login from "./User/Login"
import { User } from "../types/user";
import { Action } from "../types/action";
import NavBar from "./NavBar";

export const userReducer = (state: User, action: Action): User => {
    const { Id, name, familyname, password, phon, address, email } = action.data as Partial<User>
    switch (action.type) {
        case 'CREATE':
            if (state.name != name || state.familyname != familyname || state.password != password) {
                return { Id: Id || 0, name: name || '', familyname: familyname || '', password: password || '', phon: '', email: '', address: '' }
            }
            else {
                return { Id: 0, name: '', familyname: '', address: '', email: '', password: '', phon: '' }
            }
        case 'UPDATE':
            return { Id: state.Id, name: state.name, familyname: state.familyname, password: state.password, phon: phon || '', email: email || '', address: address || '' }
        default: return state
    }
}
 
export const TheContextUser = createContext<{ user: User; userDispatch: Dispatch<any> }>
    ({ user: { Id: 0, name: '', familyname: '', address: '', email: '', password: '', phon: '' }, userDispatch: () => { } })
const HomePage = () => {
    const myuser: User = { Id: 0, name: '', familyname: '', address: '', email: '', password: '', phon: '' }
    const [user, userDispatch] = useReducer(userReducer, myuser)
    return (
        <>
            <TheContextUser value={{ user, userDispatch }}>
                <Login></Login>
                <NavBar></NavBar>
            </TheContextUser>
        </>
    )
}
export default HomePage

