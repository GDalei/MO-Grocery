import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import style from './style.module.css';
import SaveAddress from '../SaveAddress/SaveAddress';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import PostBill from '../PostBill/PostBill';
const DialogDefault = ({ type = "" }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            {
                type === "address" ? <>
                    <div onClick={handleOpen} className={style.Address_widgets__Container}>
                        <AddCircleOutlineIcon fontSize="large" style={{ color: "#008000cf" }} />
                        <div style={{ fontSize: "14px", fontWeight: "bold" }}>Add a new address in <br />
                            <div style={{ fontSize: "10px" }}>Service Rd, Sector 57, Gurugram, Haryana 122003, India</div></div>
                    </div>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader className={style.Address_widgets__Container}>Enter complete address</DialogHeader>
                        <DialogBody className={style.Address_widgets__Container}>
                            <SaveAddress></SaveAddress>
                        </DialogBody>
                    </Dialog>
                </> : <>
                    <div onClick={handleOpen} className={style.Address_widgets__Container}>
                        <CameraEnhanceOutlinedIcon fontSize="large" />
                    </div>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader className={style.Address_widgets__Container}>Post or Enter</DialogHeader>
                        <DialogBody className={style.Address_widgets__Container}>
                            <PostBill></PostBill>
                        </DialogBody>
                    </Dialog>
                </>
            }


        </>
    );
}
export default DialogDefault;