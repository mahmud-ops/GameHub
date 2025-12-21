import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/GameHub_logo.svg"
import ColorModeSwitch from "./ColorModeSwitch"
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} padding="10px" boxSize='60px'></Image>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar