import React from 'react';
import Container from '@mui/material/Container';
import style from './style.module.css';
import SimpleCard from '../card/SimpleCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Containers = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <Container className={style.containerWapper2}>Soft Drink</Container>


            <Container>
                <Carousel responsive={responsive}   removeArrowOnDeviceType={["tablet", "mobile"]} 
                >
                    <SimpleCard name="English Oven Brown Bread" quantity="400 gr" marketPrice="60" ourPrice="50"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165" />
                    <SimpleCard name="Amul Fresh Malai Paneer" quantity="200 gr" marketPrice="91" ourPrice="91"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682" />
                    <SimpleCard name="Amul Salted Butter" quantity="100 gr" marketPrice="58" ourPrice="58"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11150a.jpg?ts=1688463551" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/57435a.jpg?ts=1688627217" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1700652991" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_540080.jpg?ts=1703665638" />
                    <SimpleCard name="Amul Masti Curd" quantity="1 Kg" marketPrice="72" ourPrice="27"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_45533.jpg?ts=1685975152" />
                    <SimpleCard name="Amul Pure Milk Cheese Slices" quantity="200 gr" marketPrice="140" ourPrice="136"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/32e1667a-295c-4e73-8492-4e20643c3dce.jpg?ts=1707312315" />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />

                </Carousel>;
                <Carousel responsive={responsive}   removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <SimpleCard name="English Oven Brown Bread" quantity="400 gr" marketPrice="60" ourPrice="50"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165" />
                    <SimpleCard name="Amul Fresh Malai Paneer" quantity="200 gr" marketPrice="91" ourPrice="91"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682" />
                    <SimpleCard name="Amul Salted Butter" quantity="100 gr" marketPrice="58" ourPrice="58"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11150a.jpg?ts=1688463551" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/57435a.jpg?ts=1688627217" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1700652991" />
                    <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_540080.jpg?ts=1703665638" />
                    <SimpleCard name="Amul Masti Curd" quantity="1 Kg" marketPrice="72" ourPrice="27"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_45533.jpg?ts=1685975152" />
                    <SimpleCard name="Amul Pure Milk Cheese Slices" quantity="200 gr" marketPrice="140" ourPrice="136"
                        url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/32e1667a-295c-4e73-8492-4e20643c3dce.jpg?ts=1707312315" />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />

                </Carousel>;
                {/* <SimpleCard name="English Oven Brown Bread" quantity="400 gr" marketPrice="60" ourPrice="50"
                    url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165" />
                <SimpleCard name="Amul Fresh Malai Paneer" quantity="200 gr" marketPrice="91" ourPrice="91"
                    url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682" />
                <SimpleCard name="Amul Salted Butter" quantity="100 gr" marketPrice="58" ourPrice="58"
                    url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11150a.jpg?ts=1688463551" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/57435a.jpg?ts=1688627217" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1700652991" />
                <SimpleCard url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_540080.jpg?ts=1703665638" />
                <SimpleCard name="Amul Masti Curd" quantity="1 Kg" marketPrice="72" ourPrice="27"
                    url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_45533.jpg?ts=1685975152" />
                <SimpleCard name="Amul Pure Milk Cheese Slices" quantity="200 gr" marketPrice="140" ourPrice="136"
                    url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/32e1667a-295c-4e73-8492-4e20643c3dce.jpg?ts=1707312315" />
                <SimpleCard />
                <SimpleCard />
                <SimpleCard /> */}

            </Container>
        </>
    )
}
export default Containers