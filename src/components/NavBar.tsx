import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (

    //HStack: for laying out components horizontally
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>GameFind</Text>
    </HStack>
  )
}

export default NavBar