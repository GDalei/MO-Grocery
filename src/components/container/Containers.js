import React from 'react';
import Reals from './Reals';
import "slick-carousel/slick/slick-theme.css";
import CirlceImage from './CirlceImage/CirlceImage';
import { ProductList } from '../../services/Constant';
const Containers = () => {
    return (
        <>
            {ProductList.map((value) => {
                return <Reals catagory={value.catagory} productList={value.productList} />
            })}

        </>
    )
}
export default Containers