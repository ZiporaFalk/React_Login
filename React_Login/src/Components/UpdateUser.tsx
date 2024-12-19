
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import {  useContext, useRef, useState } from "react"
import { TheContextUser, User } from "../Components/HomePage"
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

    const handleSubmit = () => {
        const newUser: User = {
            email: emailRef.current?.value,
            adress: adressRef.current?.value,
            phon: phonRef.current?.value
        }
        userDispatch({
            type: 'UPDATE',
            data: newUser
        })
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField label='userEmail' inputRef={emailRef} />
                        <TextField label='userAdrees' inputRef={adressRef} />
                        <TextField label='userPhon' inputRef={phonRef} />
                        <Button variant="contained" color="success" onClick={() => { setOpen(false); handleSubmit(); }}>Save</Button>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
export default UpdateUser


