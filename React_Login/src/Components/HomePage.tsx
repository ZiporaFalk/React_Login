import { Dispatch, createContext, useReducer } from "react"
import Login from "./Login"
import { User } from "../types/user";
import { Action } from "../types/action";

export const userReducer = (state: User, action: Action): User => {
    const { Id, name, familyname, password, phon, address, email } = action.data as Partial<User>
    switch (action.type) {
        case 'CREATE':
            if (state.name != name || state.familyname != familyname || state.password != password) {
                state.Id = Id
                state.familyname = familyname || ''
                state.name = name || ''
                state.password = password || ''
                state.phon = ''
                state.email = ''
                state.address = ''
            }        
            console.log('create');
            console.log(state);
            return state
        case 'UPDATE':
            // state.Id = Id
            // state.familyname = familyname || ''
            // state.name = name || ''
            // state.password = password || ''
            state.phon = phon || ''
            state.email = email || ''
            state.address = address || ''
            console.log('update');
            console.log(state);
            return state
        default: return state
    }
}

export const TheContextUser = createContext<{ user: User | null; userDispatch: Dispatch<any> }>({ user: null, userDispatch: () => { } })
export const TheContextUserDispatch = createContext(userReducer)

const HomePage = () => {
   // const myuser: User = { name: 'Zipi', familyname: 'Falk', address: 'chazom hish 54', email: 'z0548498935@gmail.com', password: 'ABCD', phon: '0548498935' }
    const myuser: User = { name: '', familyname: '', address: '', email: '', password: '', phon: '' }
    // const [user, userDispatch] = useReducer(userReducer, {} as User)
    console.log(myuser);
    const [user, userDispatch] = useReducer(userReducer, myuser)
    return (
        <>
            <TheContextUser.Provider value={{ user, userDispatch }}>
                <Login></Login>
            </TheContextUser.Provider>
        </>
    )
}
export default HomePage

