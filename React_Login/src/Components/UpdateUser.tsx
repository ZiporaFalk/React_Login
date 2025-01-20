
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { FormEvent, useContext, useRef, useState } from "react"
import { TheContextUser } from "../Components/HomePage"
import axios from "axios";
import { Action } from "../types/action";
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
const UpdateUser = ({ closeModal }: { closeModal: () => void }) => {
    const { userDispatch } = useContext(TheContextUser)
    const emailRef = useRef<HTMLInputElement>(null)
    const adressRef = useRef<HTMLInputElement>(null)
    const phonRef = useRef<HTMLInputElement>(null)
    const { user } = useContext(TheContextUser)//myuser

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setOpen(false)
        const action: Action = {
            type: 'UPDATE',
            data: { email: emailRef.current?.value, address: adressRef.current?.value, phon: phonRef.current?.value }
        }
        let res;
        try {
            res = await axios.put('http://localhost:3000/api/user/', action.data, { headers: { 'user-id': user?.Id } })

        } catch (e: any) {
            if (e.status == 404)
                alert('לא נמצא משתמש זה')
        }
        if (res)
            userDispatch(action)
        closeModal();  // סגירת המודל אחרי שמירת הנתונים
    }
    const [open, setOpen] = useState(true)
    // const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField label='userEmail' inputRef={emailRef} />
                            <TextField label='userAdrees' inputRef={adressRef} />
                            <TextField label='userPhon' inputRef={phonRef} />
                            <Button variant="outlined" color="error" type="submit">Save</Button>
                        </Typography>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
export default UpdateUser


