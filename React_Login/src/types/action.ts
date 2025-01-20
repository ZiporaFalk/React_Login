import { User } from "./user"

export type Action = {
    type: 'CREATE' | 'UPDATE' | 'DELETE'
    data: Partial<User> 
}
