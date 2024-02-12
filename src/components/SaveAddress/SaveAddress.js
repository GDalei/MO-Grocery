import react, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
const SaveAddress = () => {
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
    const saveAddressHandler = () => {

        const fullAddress = {
            addressOne: addressOne, addresstwo: addresstwo, addressThree: addressThree, addressFour: addressFour, addressFive: addressFive,
            addressNumber: addressNumber,
        }
        dispatch({ type: "CURRENT_ADDRESS", payload: fullAddress })
    }
    return (
        <div>
            <div className="w-[20rem] flex w-72 flex-col gap-6">
                <Input color="blue" label="Flat / House no / Building name *" value={addressOne} onChange={addressOneChangeHandler} />
                <Input color="purple" label="Floor (optional)" value={addresstwo} onChange={addresstwoChangeHandler} />
                <Input color="indigo" label="Area / Sector / Locality *" value={addressThree} onChange={addressThreeChangeHandler} />
                <Input color="teal" label="Nearby landmark (optional)" value={addressFour} onChange={addressFourChangeHandler} />
                <Input color="teal" label="Receiver's name *" value={addressFive} onChange={addressFiveChangeHandler} />
                <Input color="teal" label="Receiver's phone (optional)" value={addressNumber} onChange={addressNumberChangeHandler} />
            </div>
            <div> sd</div>
            <Button color="green" size="lg" fullWidth onClick={saveAddressHandler}>Save Address</Button>
        </div>
    );
}
export default SaveAddress