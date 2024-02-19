'use client'
import { Carousel } from "@material-tailwind/react";
import Card from '../card/SimpleCard';
const url = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
const CarouselCustomNavigation = () => {
    return (
        <Carousel
            autoplay={true}
            loop={true}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <img
                src={url}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={url}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src={url}
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}
export default CarouselCustomNavigation