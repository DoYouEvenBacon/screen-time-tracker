import React, { useEffect, useState } from 'react';
import {
    //Link,
    NavLink,
    useLocation
} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';

const menuIcons = {
    //Dashboard: <DashboardIcon/>,
    Home: <HomeIcon/>,
    Trends: <BarChartIcon/>,
    About: <InfoIcon/>,

};

function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mainDrawerItems, setMainDrawerItems] = useState([]);
    const [miscDrawerItems, setMiscDrawerItems] = useState([]);

    useEffect(() => {
        setMainDrawerItems(['Home', 'Trends']);
        setMiscDrawerItems(['About']);
    }, []);


    const toggleDrawer = () =>{
        setDrawerOpen(v => !v);
    };

    const drawerList = () =>(
        <Box
            sx={{ width: 350}}
            role="presentation"
            onClick={toggleDrawer}
        >
            <List>
                {mainDrawerItems.map((text, index) => (
                    <NavLink 
                        key={`mainNavlink${index}`}
                        to={`/${text.toLowerCase()}`}
                        /*activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}*/
                        style={{ textDecoration: 'none' }}
                    >
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {menuIcons[text]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider />
            <List>
                {miscDrawerItems.map((text, index) => (
                    <NavLink 
                        key={`miscNavlink${index}`}
                        to={`/${text.toLowerCase()}`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {menuIcons[text]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    )
    return(
        <div>
            <AppBar position='fixed'>
                <Toolbar>
                    {
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
            <Drawer
                anchor={'left'}
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                {drawerList()}
            </Drawer>
        </div>
    );
}

export default NavBar;