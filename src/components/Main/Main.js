import { Avatar, Button, TextField } from '@mui/material'
import { useStateValue } from 'context/context'
import firebase from 'firebase'
import db, { storage } from 'lib/firebase'
import React, { useState } from 'react'
import { Announcement } from '..'
import './style.css'
const Main = ({classData}) => {
    const {loggedInMail} = useStateValue();
    const [showInput, setshowInput] = useState(false)
    const [inputValue, setinputValue] = useState('')
    const [image, setimage] = useState(null)
    const [error, seterror] = useState()
    const chooseImage=(e)=>{
        if(e.target.files[0]){
            setimage(e.target.files[0])
        }
    }
    const handleUpload=()=>{
        if(!image && inputValue===''){
            seterror(true);
        }
        else if(!image){
            seterror(false)
            console.log(inputValue)
            db.collection("announcements")
            .doc("classes")
            .collection(classData.id)
            .add({
                timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: inputValue,
                sender: loggedInMail,
            })
        }
        else if(image){
            seterror(false)
            const uploadImage = storage.ref(`images/${image.name}`).put(image);

            uploadImage.on("state_changed", () => {
                storage.ref("images").child(image.name).getDownloadURL()
                .then((url) => {
                    db.collection("announcements")
                    .doc("classes")
                    .collection(classData.id)
                    .add({
                        timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                        imageUrl: url,
                        text: inputValue,
                        sender: loggedInMail,
                    })
                    // .then(()=>{
                    //     setshowInput(false);
                    // });
                });
            });
        }
    };
    return (
        <div className="main">
            <div className="main__wrapper">
                <div className="main__content">
                    <div className="main__wrapper1">
                        <div className="main__bgImage">
                            <div className="main__emptyStyles" />
                        </div>
                        <div className="main__text">
                            <h1 className="main__heading main__overflow">
                                {classData.className}
                            </h1>
                            <div className="main__section main__overflow">
                            {classData.section}
                            </div>
                            <div className="main__wrapper2">
                                <em className="main__code">Class Code: </em>
                                <div className="main__id">{classData.id}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="announce">
                    <div className="status">
                        <p>Upcoming</p>
                        <p className="subText">No work due</p>
                    </div>
                    <div className="announcements">
                        <div className="announcement__wrapper">
                            <div className="announcement__window">
                                {showInput ?
                                (
                                    <div className="form">
                                        <TextField
                                        id="filled-multiline-flexible"
                                        multiline
                                        label="Post an announcement to the class"
                                        variant="filled"
                                        value={inputValue}
                                        onChange={(e) => setinputValue(e.target.value)}
                                        error={error}
                                        helperText={error && 'Cannot post empty announcement'}
                                        />
                                        <div className="form__buttons">
                                            <input color="primary" type="file"
                                            onChange={chooseImage}
                                            />
                                            <div>
                                                <Button onClick={() => setshowInput(false)}>Cancel
                                                </Button>
                                                <Button
                                                onClick={handleUpload}
                                                color="success"
                                                variant="contained"
                                                >
                                                Post
                                                </Button>
                                            </div>
                                        </div>
                                    </div> 
                                    ):
                                    (
                                    <div className="announcement__content"
                                    onClick={()=>setshowInput(true)}>
                                        <Avatar/>
                                        <div>Post an announcement to the class</div>
                                    </div>
                                )}
                                
                            </div>
                        </div>
                        <Announcement classData={classData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
