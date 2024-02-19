import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../components/header/Header';
import FooterWithSitemap from '../components/FooterWithSitemap/FooterWithSitemap';
import CarouselCustomNavigation from '../components/Carousel/Carousel'
import Containers from '../components/container/Containers';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import FooterComponent from '../components/FooterWithSitemap/FooterComponent';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header></Header>
      <CarouselCustomNavigation />
      <Containers />
      <FooterComponent />

    </div>
  );
}
