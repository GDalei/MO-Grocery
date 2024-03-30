import React from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import CatagoryContainer from '@/components/Catagory/CatagoryContainer';
import { ProductList } from '../services/Constant';
import Container from '@mui/material/Container';
import SimpleCard from "../components/card/SimpleCard";
import style from './product.module.css';
import { useSelector, useDispatch } from 'react-redux';
const CatagoryPage = () => {
    const catagory = useSelector((state) => {
        return state.getCatagory.CatagoryName
    })
    console.log("catagorycatagory", catagory)
    const filter = ProductList.filter((value) => {
        return value.catagory === String(catagory)  //Milk products
    })
    return (
        <DefaultLayout>
            <Container>
                <div className={style.catagoryPageWaper}>
                    {
                        filter[0].productList.map((value) => {
                            return <SimpleCard name={value.name} quantity={value.quantity} marketPrice={value.marketPrice} ourPrice={value.ourPrice} url={value.url} />
                        })
                    }
                </div>
            </Container>
        </DefaultLayout>
    )
}
export default CatagoryPage