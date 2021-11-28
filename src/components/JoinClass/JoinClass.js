import { Button, Dialog } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Avatar, TextField } from '@mui/material';
import { useStateValue } from 'context/context'
import db from 'lib/firebase';
import React, {useState} from 'react'
import './style.css';


const JoinClass = () => {
    const {joinClassDialog, setJoinClassDialog, loggedInUser} = useStateValue();
    const [classCode, setClassCode] = useState('');
    const [email, setEmail] = useState('')
    const [error, setError] = useState()
    const [joinedData, setJoinedData] = useState()
    const [classExist, setClassExist] = useState(false)

    // Checks if the class code provided is valid. If the class exists then create a new collection for joined classes. It further contains all the class data linked to the user email id.
    const handleJoinClass=(e)=>{
        e.preventDefault();
        db.collection('CreatedClasses')
        .doc(email)
        .collection('classes')
        .doc(classCode)
        .get()
        .then((doc)=>{
            if(doc.exists && doc.owner !== loggedInUser.email){
                setClassExist(true);
                setJoinedData(doc.data())
                setError(false);
            }
            else {
                setError(true);
                setClassExist(false);
                return;
              }
        })
        if(classExist === true){
            db.collection("JoinedClasses")
            .doc(loggedInUser.email)
            .collection("classes")
            .doc(classCode)
            .set({
                joinedData,
            })
            .then(() => {
            setJoinClassDialog(false);
            });
        }
    }
    return (
        <div>
            <Dialog
                fullScreen
                onClose = {() =>setJoinClassDialog(false)}
                open={joinClassDialog}
            >
                <div className="joinClass">
                    <div className='joinClass__wrapper'>
                        <div className="joinClass__wrapper2" onClick = {() =>setJoinClassDialog(false)}>
                        <Close className="joinClass__svg" />
                        <div className="joinClass__topHead">Join Class</div>
                        </div>
                        <Button className='joinClass__btn' variant='contained' color='primary'
                        onClick={handleJoinClass} >
                            Join
                        </Button>
                    </div>
                    <div className="joinClass__form">
                        <p className="joinClass__formText">You are currently logged in as {loggedInUser?.email}</p>
                        <div className="joinClass__loginInfo">
                            <div className='joinClass__classLeft'>
                                <Avatar src={loggedInUser?.photoURL}/>
                                <div className="joinClass__loginText">
                                    <div className="joinClass__loginName">
                                        {loggedInUser?.displayName}
                                    </div>
                                    <div className="joinClass__loginEmail">
                                        {loggedInUser?.email}
                                    </div>
                                </div>
                            
                            </div>

                            <Button variant="outlined" color="primary">
                                Logout
                            </Button>
                        </div>
                    </div>
                    <div className="joinClass__form">
                        <div className="joinClass__formText" style={{ fontSize: "1.25rem", color: "#3c4043" }}>
                            Class Code
                        </div>
                        <div className="joinClass__loginInfo">
                        <TextField
                            id="outlined-basic"
                            label="Class Code"
                            variant="outlined"
                            value={classCode}
                            onChange={(e)=>setClassCode(e.target.value)}
                            error={error}
                            helperText={error && 'No class was found'}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Owner's email"
                            variant="outlined"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        </div>
                    </div>   
                </div> 
            </Dialog>
        </div>
    )
}

export default JoinClass
