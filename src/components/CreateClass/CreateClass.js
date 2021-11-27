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
                <Form/>
                {/* {openform ? <Form/> :(
                    <div>
                        <div className="class__title">
                        Using classroom at a school with students?
                        </div>
                        <DialogContent className="class__content">
                            <div className="class__text">
                            </div>
                            <div className="class__checkboxWrapper">
                                <Checkbox color="primary" onChange={() => setCheck(!check)} />
                                <p>
                                I've read and understood the above terms and conditions.
                                </p>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={()=>setCreateClassDialog(false)}>
                            Close
                            </Button>
                            <Button autoFocus color="primary" disabled={!check} onClick={()=>setOpenform(true)}>
                            Continue
                            </Button>
                        </DialogActions>
                    </div>
                    )
                } */}
            </Dialog>
        </div>
        
    )
}

export default CreateClass;


