import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/GameHub_logo.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}:Props) => {


  return (
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={logo} padding="10px" boxSize='60px'></Image>
        <HStack>
          <SearchInput onSearch={onSearch}/>
          <ColorModeSwitch/>
        </HStack>
    </HStack>
  )
}

export default NavBar