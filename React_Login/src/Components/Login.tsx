import { Button } from "@mui/material"
//
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useRef } from "react";
import { TheContextUser, User } from '../Components/HomePage'
import UserNameAvatar from "./UserName+Avatar";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Login = () => {
    const [islogin, setlogin] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const { user } = useContext(TheContextUser)
    //
    const nameRef = useRef<HTMLInputElement>(null)
    const familyRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const { userDispatch } = useContext(TheContextUser)
    // const newUser: User = { familyname: familyRef.current?.value, name: nameRef.current?.value, password: passwordRef.current?.value }
    const handleSubmit = () => {
        const newUser: User = {
            familyname: familyRef.current?.value,
            name: nameRef.current?.value,
            password: passwordRef.current?.value
        };
        console.log(newUser.name);
        userDispatch({ type: 'CREATE', data: newUser })
    }
    const check = () => {
        if (user?.name != nameRef.current?.value || user?.password != passwordRef.current?.value)
         { setlogin(false) }
        else {
            setlogin(true)
            handleSubmit()
        }
    }
    return (
        <>
            {!islogin ? <>
                <Button onClick={handleOpen} variant="contained" color="success">Login</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField label='userName' inputRef={nameRef} />
                            <TextField label='userLastName' inputRef={familyRef} />
                            <TextField label='userpassword' inputRef={passwordRef} />
                            <Button variant="contained" color="success" onClick={() => { setOpen(false); check(); }}>Login</Button>
                        </Typography>
                    </Box>
                </Modal>
            </> : <UserNameAvatar></UserNameAvatar>}
        </>
    )
}

export default Login
