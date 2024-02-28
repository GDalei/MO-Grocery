import react, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
const SaveAddress = ({ closePopup }) => {
    const [addressOne, setAddressOne] = useState("");
    const [addresstwo, setAddresstwo] = useState("");
    const [addressThree, setAddressThree] = useState("");
    const [addressFour, setAddressFour] = useState("");
    const [addressFive, setAddressFive] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [currentAddress, setCurrentAddress] = useState({});
    const dispatch = useDispatch();

    const addressOneChangeHandler = (event) => {
        setAddressOne(event.target.value)
    }

    const addresstwoChangeHandler = (event) => {
        setAddresstwo(event.target.value)
    }

    const addressThreeChangeHandler = (event) => {
        setAddressThree(event.target.value)
    }

    const addressFourChangeHandler = (event) => {
        setAddressFour(event.target.value)
    }
    const addressFiveChangeHandler = (event) => {
        setAddressFive(event.target.value)
    }
    const addressNumberChangeHandler = (event) => {
        setAddressNumber(event.target.value)
    }
    const saveAddressHandler = (event) => {
        console.log("EventCheck>>>", event)
        const fullAddress = `${addressOne},${addresstwo},${addressThree},${addressFour},${addressFive},${addressNumber},`

        dispatch({ type: "CURRENT_ADDRESS", payload: fullAddress })

        if (closePopup != undefined) {
            closePopup()
        }
    }
    const formSubMiteHandler = () => {

    }
    return (
        <div>
            <form action="#" onSubmit={saveAddressHandler}>
                <div className="w-[20rem] flex w-72 flex-col gap-6">
                    <Input required color="teal" label="Receiver's name" value={addressFive} onChange={addressFiveChangeHandler} />
                    <Input type='number' pattern="/^+91(7\d|8\d|9\d)\d{9}$/" required color="teal" label="Receiver's phone (optional)" value={addressNumber} onChange={addressNumberChangeHandler} />
                    <Input type='text' required color="blue" label="Flat / House no / Building name" value={addressOne} onChange={addressOneChangeHandler} />
                    <Input required color="purple" label="Floor (optional)" value={addresstwo} onChange={addresstwoChangeHandler} />
                    <Input required color="indigo" label="Area / Sector / Locality " value={addressThree} onChange={addressThreeChangeHandler} />
                    <Input required color="teal" label="Nearby landmark (optional)" value={addressFour} onChange={addressFourChangeHandler} />


                </div>
                <div> sd</div>
                <Button type="submit" color="green" size="lg" fullWidth >Save Address</Button>
            </form>


        </div>
    );
}
export default SaveAddress