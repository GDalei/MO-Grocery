import React from 'react';
import Container from '@mui/material/Container';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import Header from '@/components/header/Header';
import FooterWithSitemap from '@/components/FooterWithSitemap/FooterWithSitemap';
import style from './registration.module.css';
import Divider from '@mui/material/Divider';

const Registration = () => {
    return (
        <>
            <Header />
            <Container className={style.registorWarper}>
                <CheckoutForm />
                <CheckoutForm />
            </Container>
            <FooterWithSitemap />
        </>
    )
}
export default Registration