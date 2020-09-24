import  React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem, IconButton, Typography, AppBar, Toolbar } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function NavBar(props) {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null);
    const location = useLocation()

    const handleClick = (e) => {
      setAnchor(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchor(null);
    };

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchor}
                        keepMounted
                        open={Boolean(anchor)}
                        onClose={handleClose}
                    >
                        <Link to='/'>
                            <MenuItem onClick={handleClose}>About</MenuItem>
                        </Link>
                        <Link to='/game'>
                            <MenuItem onClick={handleClose}>Game</MenuItem>
                        </Link>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        {location.pathname === '/game' ? "Conway's Game of Life":'About the Project'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default NavBar