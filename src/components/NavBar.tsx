import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import newLogo from "../assets/newLogo.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    //HStack: for laying out components horizontally
    <HStack padding="10px">
      <Link to='/'>
        <Image src={newLogo} boxSize="60px" objectFit='cover'/>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
