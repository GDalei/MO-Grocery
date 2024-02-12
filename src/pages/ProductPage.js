
import React from 'react';
import Header from '../components/header/Header';
import FooterWithSitemap from '../components/FooterWithSitemap/FooterWithSitemap';
import Container from '@mui/material/Container';
import style from './product.module.css';
import ReactImageMagnify from 'react-image-magnify';
import img from '../../public/productImg/wristwatch_small.jpg'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AddButton from '../components/addButton/AddButton';
import { useSearchParams } from 'next/navigation'
const ProductPage = () => {
    const searchParams = useSearchParams()
    const IMG_UR = searchParams.get('img');
   //const Big_Img = IMG_UR.replace("w=270","w=1200")
    //console.log(">>", IMG_UR.replace("w=270","w=1200"))

    return (
        <div>
            <Header />

            <Container className={style.productContainerCanvas}>
                <div className={style.productContainer}>
                    <div className={style.productImageArea}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                width: 300,
                                height: "500",
                                src: IMG_UR,
                            },
                            largeImage: {
                                src: IMG_UR,
                                width: 1200,
                                height: 1800

                            },
                            enlargedImageContainerDimensions: {
                                width: '300%',
                                height: '150%'
                            },

                        }} />

                    </div>
                    <div className={style.productDetailsView}>
                        <div className={style.ProductInfoCard__ProductInfoWrapper}>
                            <div className={style.ProductInfoCard__ZoomedImageContainer}></div>
                            <div className={style.ProductInfoCard__Breadcrumb}>
                                Home / Bread & Pav / Harvest Gold 100% Atta Whole Wheat Bread
                            </div>
                            <div className={style.ProductInfoCard__ProductName}>
                                <h1>Harvest Gold 100% Atta Whole Wheat Bread
                                </h1>
                            </div>
                            <div className={style.ProductInfoCard__EtaTagContainer}></div>
                            <div className={style.ProductInfoCard__BrandContainer}>
                                <div className="ProductInfoCard__BrandLink" style={{ color: "rgb(12, 131, 31)", fontSize: "18px", lineHeight: "24px" }}>View all by Harvest Gold</div><div className="ProductInfoCard__IconContainer"><div className="ProductInfoCard__RightArrow"></div></div>

                            </div>
                            <div className={style.ProductInfoCard__Divider}></div>
                            <div className={style.ProductVariants___StyledDiv2}>
                                <div className={style.ProductVariants__VariantDetailsContainer}>
                                    <p className={style.ProductVariants__VariantUnitText} >450 g</p>
                                    <div className={style.ProductVariants__PriceContainer}><span className={style.ProductVariants__OutOfStockText}>Out Of Stock</span></div>
                                    <div className={style.ProductVariants__TaxText} >(Inclusive of all taxes)</div>
                                </div>
                                <AddButton />
                            </div>
                        </div>
                        <div className={style.GrofersPromises__PDPPromiseContainer}>
                            <div className={style.GrofersPromises__PDPPromiseHeader}>Why shop from mo Grocery ?</div>
                            <div className={style.first_row}>
                                <div className={style.column}>
                                    <div className={style.first_row__icon}>
                                        <Avatar></Avatar>
                                    </div>
                                    <div className={style.display_table_cell}>
                                        Superfast Delivery
                                        Get your order delivered to your doorstep at the earliest from dark stores near you.
                                    </div>
                                </div>
                                <div className={style.column}>
                                    <div className={style.first_row__icon}>
                                        <Avatar></Avatar>
                                    </div>
                                    <div className={style.display_table_cell}>
                                        Superfast Delivery
                                        Get your order delivered to your doorstep at the earliest from dark stores near you.
                                    </div>
                                </div>
                                <div className={style.column}>
                                    <div className={style.first_row__icon}>
                                        <Avatar></Avatar>
                                    </div>
                                    <div className={style.display_table_cell}>
                                        Superfast Delivery
                                        Get your order delivered to your doorstep at the earliest from dark stores near you.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <FooterWithSitemap />
        </div>
    )
}
export default ProductPage