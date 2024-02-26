import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from 'next/link'
import style from './style.module.css';
import AddButton from "../addButton/AddButton";
import { useRouter } from 'next/router';
const SimpleCard = ({ url = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/530158a.jpg", name = "English Oven Brown Bread", quantity = "400 gr", marketPrice = "60", ourPrice = "50" }) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  const router = useRouter()
  const imgClickHandler = (event) => {
    const Img = event.target.getAttribute("src")
    router.push({ pathname: "/ProductPage", query: { img: Img, price: ourPrice, Name: name } })
  }
  return (
    <Card className={`mt-3 w-48 ${style.cardWapper}`}>
      <CardBody className={style.cardBody}>
        <div width="100" height="100" className={style.cardImg} onClick={imgClickHandler}>
          <div className={style.cardImgInner}>
          <img src={url} />
          </div>
        </div>
        <div className={style.deliveryTime}>10 mins</div>
        <div className={style.productTitle}>
          <span>{name}</span>
        </div>
      </CardBody>
      <CardFooter className={`pt-0`}>
        <span className={style.CardfooterPieces}>{quantity}</span>
        <div className={style.CardfooterWapper}>
          <div>
            <div style={{ color: "black", fontWeight: 600, fontSize: 12 }}>₹{marketPrice}</div>
           
          </div>
          <AddButton price={134} />

        </div>
      </CardFooter>
    </Card>
  );
}
export default SimpleCard