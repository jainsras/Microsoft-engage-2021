import { Avatar } from '@material-ui/core'
import db from 'lib/firebase'
import React, { useEffect, useState } from 'react'
import './style.css'
const Announcement = ({classData}) => {
    const [announcement, setannouncement] = useState([]);
    useEffect(() => {
        if(classData){
            let unsubscribe = db.collection('announcements')
            .doc('classes')
            .collection(classData.id)
            .onSnapshot((snap)=>{
                setannouncement(snap.docs.map((doc)=>doc.data()))
            });
            return ()=>unsubscribe();
        }
    }, [classData]);
    console.log(announcement)
    return (
        <div>
            {announcement.map((item) => (
                <div className="ann__display">
                    <div className="centre">
                        <div className="top">
                        <Avatar />
                        <div>{item.sender}</div>
                        </div>
                        <p className="text">{item.text}</p>
                        <img className="image" src={item.imageUrl} alt={item.text} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Announcement
