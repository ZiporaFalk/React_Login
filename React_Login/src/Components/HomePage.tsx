import { Dispatch, createContext, useReducer } from "react"
import Login from "./Login"
import { userReducer } from "./User"

export type User = {
    familyname?: string,
    name?: string,
    email?: string,
    password?: string,
    adress?: string,
    phon?: string
} 
export const TheContextUser = createContext<{ user: User | null; userDispatch: Dispatch<any> }>({ user: null, userDispatch: () => { } })
export const TheContextUserDispatch = createContext(userReducer)

const HomePage = () => {
    const myuser: User = { name: 'Zipi', familyname: 'Flak', adress: 'chazom hish 54', email: 'z0548498935@gmail.com', password: 'ABCD', phon: '0548498935' }
    // const [user, userDispatch] = useReducer(userReducer, {} as User)
    console.log(myuser);
    const [user, userDispatch] = useReducer(userReducer, myuser)
    return (
        <>
            <TheContextUser.Provider value={{ user, userDispatch }}>
                <h1 id="home" >Home</h1 >
                <Login></Login>
            </TheContextUser.Provider>
        </>
    )
}
export default HomePage

