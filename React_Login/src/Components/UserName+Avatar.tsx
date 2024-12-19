import Avatar from '@mui/material/Avatar';
import { useContext, useState } from 'react';
import { TheContextUser } from '../Components/HomePage';
import { Button } from '@mui/material';
import UpdateUser from './UpdateUser';

const UserNameAvatar = () => {
    const [isupdate, setupdate] = useState(false)
    const { user } = useContext(TheContextUser)
    return (
        <>
            <div>
                <div><Avatar alt={user?.name} src='../1.jpg.jpg' /></div>
                <p> Hello {user?.name}</p>
                <Button variant="contained" color="success" onClick={() => { setupdate(!isupdate) }}>Update</Button>
            </div>
            {isupdate && <UpdateUser closeModal={() => setupdate(false)} />}

        </>
    ) 
}

export default UserNameAvatar

