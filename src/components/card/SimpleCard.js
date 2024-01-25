import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import style from './style.module.css';
const SimpleCard = ({url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/530158a.jpg"}) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <Card className="mt-3 w-48">
      <CardBody className={style.cardBody}>
        <div width="120" height="120" className={style.cardImg}>
          <img src={url}/>
        </div>
        <div className={style.deliveryTime}>10 mins</div>
        <div className={style.productTitle}>
          <spn>Eggoz Farm Fresh White Eggs (10 pieces)</spn>
        </div>
      </CardBody>
      <CardFooter className={`pt-0`}>
        <span className={style.pieces}>10 pieces</span>
        <div className={style.footerWapper}>
          <div>
            <div style={{ color: "black", fontWeight: 600, fontSize: 12 }}>₹134</div>
            <div style={{ color: "gray", fontWeight: 600, fontSize: 12 }}>₹155</div>
          </div>
          <Button variant="outlined" className={style.buttonStyle} color="green" size="sm"> ADD</Button>

        </div>
      </CardFooter>
    </Card>
  );
}
export default SimpleCard