import { TextField } from '@material-ui/core'
import { DialogActions } from '@mui/material'
import React from 'react'
import './style.css'
const Form = () => {
    return (
        <div className="form">
            <p className="class__title">
            Create Class
            </p>
            <div className='form__inputs'>
                <TextField id="filled-basic" label='Class Name (required)'
                className="form__input"
                variant="filled"/>

                <TextField id="filled-basic" label='Section'
                className="form__input"
                variant="filled"/>

                <TextField id="filled-basic" label='Subject'
                className="form__input"
                variant="filled"/>

                <TextField id="filled-basic" label='Room'
                className="form__input"
                variant="filled"/>
            </div>
            <DialogActions>
                {/* <Button color="primary" disabled={!className}>
                    Create
                </Button> */}
            </DialogActions>
        </div>
    )
}

export default Form
