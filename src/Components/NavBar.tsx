import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/GameHub_logo.svg"
const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} padding="10px" boxSize='60px'></Image>
        <Text>Nav bar</Text>
    </HStack>
  )
}

export default NavBar