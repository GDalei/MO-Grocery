import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@material-tailwind/react";
import style from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
const RadioWithDescription = ({ closePopup }) => {
    const [value, setValue] = React.useState('female');
    const [disable, setDisable] = React.useState(true);

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setDisable(false)
        setValue(event.target.value)

    };
    const addressList = useSelector((state) => {
        return state.userInfo.addressList
    })

    const selectAddressHandler = (event) => {
        dispatch({ type: "SELECTED_ADDRESS", payload: value });
        if (closePopup != undefined) {
            closePopup()
        }

    }

    return (
        <>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Choose Delivery Address</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    {
                        addressList.map((value, index) => {
                            return <><FormControlLabel value={value} control={<Radio />} label={"Address"} />
                                <div className={style.fullAddress}>{value}</div>
                            </>
                        })
                    }

                </RadioGroup>

            </FormControl>
            <Button fullWidth disabled={disable} onClick={selectAddressHandler}>Done</Button>
        </>
    );
}
export default RadioWithDescription