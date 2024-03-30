import React from 'react';
import Container from '@mui/material/Container';
import style from './style.module.css';
import { catagory } from '../../services/Constant';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
const Catagory = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const catagoryHandler = (event) => {
        console.log("dfspojsdpajppfpsifhdifhfidh", event.target.title)
        dispatch({ type: "SET_CATAGORY", payload: event.target.title })
        router.push({ pathname: "/CatagoryPage" })
    }
    return (
        <Container>
            <div className={style.catagoryWarper}>
                {
                    catagory.map((value, index, arr) => {
                        return <div className={style.catagoryInner} onClick={catagoryHandler}>
                            <div className={style.catagoryImg}><img src={value.img} title={value.name} width="100px" /></div>
                            <div className={style.catagoryText}>{value.name}</div>
                        </div>
                    })
                }
            </div>
        </Container>
    )
}
export default Catagory