import { Typography, Avatar, MenuItem, Menu } from '@material-ui/core'
import { Add, Apps } from '@mui/icons-material'
import { AppBar, Toolbar } from '@mui/material'
import { CreateClass, JoinClass } from '..'
import React from 'react'
import { useStyles } from './style'
import { useStateValue } from 'context/context'

const Header = ({children}) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {setCreateClassDialog, setJoinClassDialog, loggedInUser, logout} = useStateValue();
    
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    //close menu
    const handleClose = () => setAnchorEl(null);

    const handleCreate = ()=>{
        handleClose();
        setCreateClassDialog(true);
    }
    const handleJoin = ()=>{
        handleClose();
        setJoinClassDialog(true);
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.headerWrapper}>
                        {children}
                        <Typography variant="h6" className={classes.title}>
                        Simpl-e-Classroom
                        </Typography>
                    </div>
                    <div className={classes.header__wrapper__right}>
                        <Add onClick={handleClick} className={classes.icon}/>
                        <Apps className={classes.icon}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                            <MenuItem onClick={handleCreate}>Create Class</MenuItem>
                        </Menu>
                        <div>
                            <Avatar onClick={()=>logout()}  src={loggedInUser?.photoURL} className={classes.icon}/>
                        </div>
                    </div>
                </Toolbar>
               
            </AppBar>
            <CreateClass/>
            <JoinClass/>
        </div>
    )
}

export default Header
