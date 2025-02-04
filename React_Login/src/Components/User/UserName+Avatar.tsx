import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import { TheContextUser } from '../HomePage';

const UserNameAvatar = () => {
    const { user } = useContext(TheContextUser)
    return (
        <>
            <div style={{ padding: "5px" }}>
                <div><Avatar alt={user?.name} src='../1.jpg.jpg' /></div>
                <p> Hello {user?.name}</p>
            </div>
        </>
    )
}

export default UserNameAvatar

