'use client'
import React, { useState } from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import AddButton from '../cart/Cart';
import style from './style.module.css';
import RadioWithDescription from '../RadioWithDescription/RadioWithDescription';
import DialogDefault from '../DialogDefault/DialogDefault';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from 'react-redux';
import Spiner from '../Spiner/Spiner';
const DrawerPlacement = () => {

    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    const [isAddress, setisAddress] = useState(false)

    const state = useSelector((state) => {
        return state.addCartReducer;
    })

    const selectedAddress = useSelector((state) => {
        console.log("><><>State>>", state.userInfo)
        return state.userInfo.currentAddress;
    })

    const checkOutButtonClickHandler = () => {
        setisAddress((prev) => {
            return !prev
        })
    };
    const checkOutOrderButtonClickHandler = () => {
        alert()
    }
    const backDrawerRight = () => {
        setisAddress((prev) => {
            return !prev
        })
    }

    return (
        <React.Fragment>
            <div className="flex flex-wrap gap-4">
                <div onClick={openDrawerRight} className={style.cartButtonWaper}><AddButton></AddButton></div>
            </div>

            <Drawer
                placement="right"
                open={openRight}
                overlay={true}
                className={`p-4 ${style.waper} overscroll-auto`}
                size="500px"
            >

                {
                    isAddress ? <>
                        <div className="mb-6 flex items-center">
                            <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={backDrawerRight}
                            >
                                <ArrowBackIcon fontSize="medium" />
                            </IconButton>
                            <Typography variant="h6" color="blue-gray">
                                {`My Address`}
                            </Typography>


                        </div>
                        <DialogDefault type="address" />
                        <div className={style.address_chose}>Choose Delivery Address</div>

                        <RadioWithDescription closePopup={backDrawerRight} />

                    </> : <>
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                                My Cart
                            </Typography>
                            <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={closeDrawerRight}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                        <div className={style.widgets__Container}>
                            <Spiner />
                            <div className={`blur-sm ${style.widgets_Card_Container}`}>

                                <div className={style.bill_details_warper}>Bill details</div>
                                <div></div>
                                <div>Total Item</div>
                                <div>₹ {state.item}</div>
                                <div>Sub total</div>
                                <div>₹ {state.price}</div>
                                <div>Delivery charge</div>
                                <div>₹ FREE</div>
                                <div>Grand total</div>
                                <div> ₹ {state.price}</div>
                                <div>Your total savings</div>
                                <div>₹ 0</div>

                            </div>

                        </div>

                        <div className={style.button_warper}>
                            <div className={style.selectAddress}>{selectedAddress}</div>
                            {

                                String(selectedAddress).length <= "0" ?
                                    <div className={style.button_process} onClick={checkOutButtonClickHandler}>
                                        <div className={style.CheckoutStrip__PriceContainer}>
                                            <div className={style.CheckoutStrip__NetPriceText}>₹{state.price}</div>
                                            <div className={style.CheckoutStrip__TotalText}>TOTAL</div>
                                        </div>

                                        <div className={style.CheckoutStrip__CTAText}>Proceed</div>
                                    </div> : <div className={style.button_process} onClick={checkOutOrderButtonClickHandler}>
                                        <div className={style.CheckoutStrip__PriceContainer}>
                                            <div className={style.CheckoutStrip__NetPriceText}>₹{state.price}</div>
                                            <div className={style.CheckoutStrip__TotalText}>TOTAL</div>
                                        </div>

                                        <div className={style.CheckoutStrip__CTAText}>Submite</div>
                                    </div>
                            }


                        </div>
                    </>
                }
            </Drawer>
        </React.Fragment>
    );
}
export default DrawerPlacement