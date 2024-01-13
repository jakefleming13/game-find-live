import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import newLogo from "../assets/newLogo.webp";

const NavBar = () => {
  return (
    //HStack: for laying out components horizontally
    <HStack padding="10px">
      <Image src= {newLogo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
