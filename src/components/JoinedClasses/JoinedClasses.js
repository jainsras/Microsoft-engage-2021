import { ClassNames } from "@emotion/react";
import { Avatar } from "@material-ui/core";
import { FolderOpen, PermContactCalendar } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const JoinedClasses = ({ classData }) => {
  const arr = ["Physics", "Chemistry", "Biology"]

  let sub = arr[Math.floor(Math.random()*3)]

  return (
    <li className="joined__list">
      <div className="joined__wrapper">
        <div className="joined__container">
          <div className="joined__imgWrapper" />
            <div className="joined__image">
              <img id="card__image" src={`https://gstatic.com/classroom/themes/${sub}.jpg`}/>
            </div>
            <div className="joined__content">
            <Link className="joined__title" to={`/${classData.id}`}>
              <h2>{classData.className}</h2>
            </Link>
            <p className="joined__owner">Section: {classData.section}</p>
            <p className="joined__owner">Subject: {classData.subject}</p>
            <p className="joined__owner">{classData.owner}</p>
            </div>
        </div>
        <Avatar className="joined__avatar"
        src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg">
        </Avatar>
      </div>
      <div className="joined__bottom">
        <PermContactCalendar/>
        <FolderOpen/>
      </div>
    </li>
  );
};

export default JoinedClasses;
