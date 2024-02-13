import React, { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import style from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
const SignUp = () => {
    const handleOpen = () => setOpen((cur) => !cur);
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const dispatch = useDispatch()
    const registorHandleOpen = () => {
        dispatch({ type: "USER_REGISTOR" })
    }
    const numberChangeHandler = (event) => {
        setNumber(event.target.value)
    }
    const passwordChaneHandler = (event) => {
        setPassword(event.target.value)
    }
    const loginButtonHandler = () => {
        if(number == ""){
            setNumberError(true)
        }else{
            setNumberError(false)
        }
        if(password == ""){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }
    }
    return (
        <Card className="mx-auto  ">
            <div className={style.cardContainer}>
                <div className={style.cardData}>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray" align="center">
                            MO Grocery
                        </Typography>
                        <div className={style.login_head__text}>  India's last minute app</div>

                        <div className={style.login_help}>Log in </div>
                        <Input label=" Your Mobile No" size="lg" type="number" error={numberError} onChange={numberChangeHandler} value={number} />
                        <Input label="Your Password" size="lg" type="password" error={passwordError} onChange={passwordChaneHandler} value={password} />
                        <Button variant="gradient" color="green" onClick={loginButtonHandler} fullWidth >
                            Sign In
                        </Button>
                    </CardBody>


                </div>
            </div>
            <CardFooter className="pt-0">

                <Typography variant="small" className="mt-4 flex justify-center">
                    Don&apos;t have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                        onClick={registorHandleOpen}
                    >
                        Sign up
                    </Typography>
                </Typography>
            </CardFooter>
        </Card>
    )
}
export default SignUp