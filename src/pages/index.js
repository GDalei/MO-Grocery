import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '../components/header/Header';
import FooterWithSitemap from '../components/FooterWithSitemap/FooterWithSitemap';
import CarouselCustomNavigation from '../components/Carousel/Carousel'
import Containers from '../components/container/Containers';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <CarouselCustomNavigation/>
      <Containers />
      <FooterWithSitemap />

    </>
  );
}
