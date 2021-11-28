import { Checkbox, Dialog, DialogContent } from '@material-ui/core';
import { Button, DialogActions } from '@mui/material';
import React, { useState } from 'react'
import { useStateValue  } from '../../context/context';
import Form from './Form';
import './style.css'
const CreateClass = () => {
    const {createClassDialog, setCreateClassDialog} = useStateValue();
    const [check, setCheck] = useState(false);
    const [openform, setOpenform] = useState(false);
    return (
        <div>
            <Dialog
                onClose = {() =>setCreateClassDialog(false)}
                open={createClassDialog}
                arla-labelledBy="customized-dialog-title"
                maxWidth="lg"
                className="form__dialog"
            >
                {/* Enter all the details in the form to create your own classroom */}
                <Form/> 
            </Dialog>
        </div>
        
    )
}

export default CreateClass;


