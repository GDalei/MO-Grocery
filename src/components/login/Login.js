import React from "react";
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
import Registor from "./Registor";
import SignUp from "./SignUp";
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [registor, setRegistor] = React.useState(false);

  const inputChangeHandler = (event) => {

  }
  const registorHandleOpen = () => {
    setOpen(false)
  }
  const state = useSelector((state) => {
    console.log("statestatestate", state)
    return state.loginDetails
  })
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className={`bg-transparent shadow-none ${style.wapper}`}
      >
        {
          state.typeName == "registor" ? <Registor /> : <SignUp />
        }
      </Dialog>
    </>
  );
}
export default Login