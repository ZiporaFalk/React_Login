import { User } from "../Components/HomePage"


type Action = {
    type: 'CREATE' | 'UPDATE' | 'DELETE'
    data: Partial<User> | undefined
}
export const userReducer = (state: User, action: Action): User => {
    const { name, email, phon, adress } = action.data as Partial<User>
    // const { familyname2, name2, password2 } =state as Partial<User>
    switch (action.type) {
        case 'CREATE': 
            if (state.name != name) {
                state.familyname = ''
                state.name = ''
                state.phon = ''
                state.email = ''
                state.password = ''
                state.phon = ''
            }
            // לא בטוח השאלה מה המורה התכוונה -אם זה רישום אז מצוין אם זה כניסה אז לכאורה פה לא צריך לעשות כלום
            // else {
            //     state.name = name
            //     state.familyname = familyname2
            //     state.password = password2
            // }
            console.log('create');
            console.log(state);
            return state
        case 'UPDATE':
            state.phon = phon
            state.email = email
            state.adress = adress
            console.log('update');
            console.log(state);
            return state
        default: return state

    }
}

