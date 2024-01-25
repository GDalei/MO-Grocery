import React from 'react';
import { Button } from "@material-tailwind/react";
import style from './style.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Cart = () => {
    return (
        <>
           <Button className={style.cartButtonWaper}>
            <div>
                <AddShoppingCartIcon style={{ color: 'white' }} fontSize="medium"/>
                </div>
                <div className={style.cartPrice}>
               <div>2 items </div>
               ₹368
                </div>
             </Button>
        </>
    )
}
export default Cart