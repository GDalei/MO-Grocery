'use client'
import React from 'react';
import { Button } from "@material-tailwind/react";
import style from './style.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';

const Cart = ({ price = 0 }) => {
    const state = useSelector((state) => {
        return state.addCartReducer;
    })
    return (
        <div className={style.cartButtonWaperInner}>
            <Button className={style.cartButtonWaper}>
                <div >
                    <AddShoppingCartIcon style={{ color: 'white' }} fontSize="medium" />
                </div>
                <div className={style.cartPrice}>
                    <div>{state.item} items </div>
                    ₹ {state.price}
                </div>
            </Button>
            </div>
            )
}
            export default Cart