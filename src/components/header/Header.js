'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import style from './style.module.css';
// import CartIcon from '../CartIcon';
// import LoginComponent from '../LoginComponent/LoginComponent';
export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className={style.bgColor}>
                <Toolbar className={style.navHeight}>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"

                        sx={{ mr: 2, height: "20px" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} className={style.companyName}>
                        OrissaFertilizer
                    </Typography>
                    {/* <LoginComponent></LoginComponent> */}
                    {/*               
                        <CartIcon name="Cart" count="5"/>
                    
                    <Button color="inherit"><a href="http://localhost/fertilizer/register.php" target='blank'>register</a></Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}