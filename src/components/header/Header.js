
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
import { useSelector, useDispatch } from 'react-redux';
import UserInfo from '../login/UserProfile/UserInfo';
import {constant} from '../../constant';
import SearchComponent from "../SearchComponent/SearchComponent";
function NavList() {
  const isLogin = useSelector((state) => {
    return state.userInfo.isLogin
  })

  return (
    <ul className="items-center my-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:items-center sm:items-center">
      <IconButton
        as="li"
        variant="text"
        color="blue-gray"
        className={`p-1 font-medium ${style.cartCheckOutCamera}`}
      >

        <DialogDefault />

      </IconButton>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-medium ${style.cartCheckOutLogin}`}
      >
        {isLogin ? <UserInfo /> : <Login />}
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-medium ${style.cartCheckOutBacket}`}
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
        {constant.siteName}
        </Typography>
      </Link>
      <><SearchComponent/></>
      <div className="sm:block md:block lg:block">
        <NavList />
      </div>


    </Container>
  );
}
export default Header