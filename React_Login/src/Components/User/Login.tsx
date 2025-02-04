import { Button, ButtonGroup } from "@mui/material"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from "react";
import { TheContextUser } from '../HomePage'
import UserNameAvatar from "./UserName+Avatar";
import axios from 'axios';
import { Action } from "../../types/action";
import UpdateUser from "./UpdateUser";

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
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const familyRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const { userDispatch } = useContext(TheContextUser)
    const [islogin, setlogin] = useState(false)
    const [typebutton, settypebutton] = useState(false)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setOpen(false);
        const action: Action = {
            type: 'CREATE',
            data: { familyname: familyRef.current?.value, name: nameRef.current?.value, password: passwordRef.current?.value }
        }
        let res;
        if (typebutton) {
            try {
                res = await axios.post('http://localhost:3000/api/user/login', action.data)
                action.data.Id = res.data.user.id
                setlogin(true)
            } catch (e: any) {
                if (e.status === 401)
                    alert("שם וסיסמה לא קיימים במערכת, נסה שוב!")
            }
        }
        else {
            try {
                res = await axios.post('http://localhost:3000/api/user/register', action.data)
                action.data.Id = res.data.userId
                setlogin(true)
            } catch (e: any) {
                if (e.status === 400)
                    alert("כבר קיים סיסמה , נסה סיסמה אחרת")
            }
        }
        if (res) {
            console.log(action.data.familyname + "0000");
            userDispatch(action)
            handleClose();
            settypebutton(false);
        }
    }
    const [isupdate, setupdate] = useState(false)

    return (
        <>
            <ButtonGroup variant="text" aria-label="Basic button group">
                <Button variant="outlined" onClick={() => { handleOpen(); settypebutton(true); }} color="error" >Login</Button>
                <Button variant="outlined" onClick={() => { handleOpen(); settypebutton(false); }} color="error" >Register </Button>
                {islogin && <>
                    <Button variant="outlined" onClick={() => { setupdate(!isupdate) }} color="error" >Update</Button>
                    {isupdate && <UpdateUser closeModal={() => setupdate(false)} />}
                </>}
            </ButtonGroup>
            {islogin && <UserNameAvatar ></UserNameAvatar>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} >
                    <form onSubmit={handleSubmit}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField label='userName' inputRef={nameRef} />
                            <TextField label='userLastName' inputRef={familyRef} />
                            <TextField label='userpassword' inputRef={passwordRef} type="password" />
                            <Button variant="outlined" color="error" type="submit" >Confirm</Button>
                        </Typography>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default Login
