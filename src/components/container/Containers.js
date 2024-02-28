import React from 'react';
import Reals from './Reals';
import "slick-carousel/slick/slick-theme.css";
import CirlceImage from './CirlceImage/CirlceImage';
const Containers = () => {
    const Product = [
        {
            catagory: "Atta , rice", productList: [
                {
                    name: "English Oven Brown Bread",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165"
                },
                {
                    name: "Amul Fresh Malai Paneer",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                }
            ]
        },
        {
            catagory: "Suji, sugar", productList: [
                {
                    name: "English Oven Brown Bread",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165"
                },
                {
                    name: "Amul Fresh Malai Paneer",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                }
            ]
        },
        {
            catagory: "Mobile assesories", productList: [
                {
                    name: "English Oven Brown Bread",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165"
                },
                {
                    name: "Amul Fresh Malai Paneer",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                }
            ]
        },
        {
            catagory: "Milk products", productList: [
                {
                    name: "English Oven Brown Bread",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_18396.jpg?ts=1697722165"
                },
                {
                    name: "Amul Fresh Malai Paneer",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/full_screen/pro_329500.jpg?ts=1684835682"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                },
                {
                    name: "Amul Salted Butter",
                    quantity: "400 gr",
                    marketPrice: "60",
                    ourPrice: "50",
                    url: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/840fefe7-87d8-4fe2-9c8f-214a7e16d395.jpg?ts=1707312315"
                }
            ]
        }
    ]
    return (
        <>
            <CirlceImage />
            {Product.map((value) => {
                return <Reals catagory={value.catagory} productList={value.productList} />
            })}

        </>
    )
}
export default Containers