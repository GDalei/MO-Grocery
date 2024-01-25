import React from 'react';
import Container from '@mui/material/Container';
import style from './style.module.css';
import SimpleCard from '../card/SimpleCard';
const Containers = () => {
    return (
        <>
            <Container className={style.containerWapper2}>Soft Drink</Container>
            <div className={style.containerWapper}>
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/539700a.jpg" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/530158a.jpg" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/448096a.jpg?ts=1683810912" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11150a.jpg?ts=1688463551" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/57435a.jpg?ts=1688627217" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1700652991" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_540080.jpg?ts=1703665638" />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard />


            </div>
        </>
    )
}
export default Containers