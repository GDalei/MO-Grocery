import React from 'react';
import Container from '@mui/material/Container';
import style from './style.module.css';
import SimpleCard from '../card/SimpleCard';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Reals = ({ catagory = "", productList = [] }) => {
    const [nav1, setNav1] = React.useState(null);
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [slider1, setSlider1] = React.useState(null);
    React.useEffect(() => {
        setNav1(slider1);
    }, [slider1]);

    const settings = {
        dots: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        autoplay: false,
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
        autoplaySpeed: 1000,
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: false,
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="next-slick-arrow rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };


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
            <Container className={style.containerWapper2}>{catagory}</Container>
            <Container>
                <Slider {...settings}
                    asNavFor={nav1}
                    ref={(slider) => setSlider1(slider)}
                >
                    {
                        productList.map((value) => {

                            return <div><SimpleCard name={value.name} quantity={value.quantity} marketPrice={value.marketPrice} ourPrice={value.ourPrice} url={value.url} /></div>
                        })
                    }

                </Slider>

            </Container>


        </>
    )
}
export default Reals