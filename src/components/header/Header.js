
import React from "react";
import style from './style.module.css';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from 'next/link'
import DrawerPlacement from '../DrawerPlacement/DrawerPlacement'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Cart from '../cart/Cart';
import Login from '../login/Login';
import Container from '@mui/material/Container';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import DialogDefault from "../DialogDefault/DialogDefault";
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <IconButton
        as="li"
        variant="text"
        color="blue-gray"
        className="p-1 font-medium"
      >

        <DialogDefault />

      </IconButton>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Login />
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >

        {/* <Cart color="white" /> */}
        <DrawerPlacement />
      </Typography>
    </ul>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(true);

  const handleWindowResize = () =>
   // window.innerWidth >= 100 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container maxWidth={true} className={style.header_warper}>
      <Link href="/">
        <Typography

          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          MO Grocery
        </Typography>
      </Link>
      <div className=" lg:block">
        <NavList />
      </div>


    </Container>
  );
}
export default Header