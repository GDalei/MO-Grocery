import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../components/header/Header';
import FooterWithSitemap from '../components/FooterWithSitemap/FooterWithSitemap';
import CarouselCustomNavigation from '../components/Carousel/Carousel'
import Containers from '../components/container/Containers';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import FooterComponent from '../components/FooterWithSitemap/FooterComponent';
import { init } from '../services/Services';
import { useEffect } from "react";
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Catagory from "@/components/Catagory/Catagory";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    init()
  }, [])

  async function logMovies() {
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const movies = await response.json();
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>", movies);
  }
  return (
    <div>
      <DefaultLayout>
        <CarouselCustomNavigation />
        <Catagory/>
        <Containers />
      </DefaultLayout>
      {/* <Header></Header>
      <CarouselCustomNavigation />
      <Containers />
      <FooterComponent /> */}

    </div>
  );
}
