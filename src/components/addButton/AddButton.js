import React, { useCallback, useEffect, useState } from 'react';
import style from './style.module.css';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const AddButton = ({ price = "" }) => {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()


    const onClickHandler = useCallback(() => {
        setIsOpen(true)
        // dispatch({ type: "ADD_CART", payload: price })

    }, [isOpen])
    useEffect(() => {
        if (count <= 0) {
            setIsOpen(false)
        }
    }, [count])
    const nagativeHandler = () => {
        setCount((prev) => {
            if (prev != 0) {
                return prev - 1
            } else {
                return 0
            }
        }
        )
        if (count > 0) {
            dispatch({ type: "REMOVE_CART", payload: price })
        }

    }
    const positiveClickHandler = useCallback(() => {
        setCount((prev) => {
            return prev + 1
        })
        if (count >= 0) {
            dispatch({ type: "ADD_CART", payload: price })
            dispatch({ type: "ADD_ITEM" })
        }

    }, [])

    return (
        <>
            <div className={!isOpen ? style.buttonDefault : style.buttonwarper} onClick={onClickHandler}>
                {
                    isOpen ? <> <IconButton onClick={nagativeHandler} color="inherit">-</IconButton>
                        <div>{count}</div>
                        <IconButton color="inherit" onClick={positiveClickHandler}>+</IconButton></> : <>ADD</>
                }

            </div>
        </>
    )
}
export default AddButton;