import { Button, Dialog } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useStateValue } from 'context/context'
import React from 'react'
import './style.css';


const JoinClass = () => {
    const {joinClassDialog, setJoinClassDialog} = useStateValue();
    return (
        <div>
            <Dialog
                fullScreen
                onClose = {() =>setJoinClassDialog(false)}
                open={joinClassDialog}
                // TransitionComponent={Transition}
               
            >
                <div className="joinClass">
                    <div className='joinClass__wrapper'>
                        <div className="joinClass__wrapper2" onClick = {() =>setJoinClassDialog(false)}>
                        <Close className="joinClass__svg" />
                        <div className="joinClass__topHead">Join Class</div>
                        </div>
                        <Button className='joinClass__btn' variant='contained' color='primary'>
                            Join
                        </Button>
                    </div>

                </div>    
            </Dialog>
        </div>
    )
}

export default JoinClass
