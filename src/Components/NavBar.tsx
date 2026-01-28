import { HStack, Image, Show, IconButton, Hide } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import logo from "../assets/GameHub_logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

interface Props {
  onOpenDrawer: () => void;
}

const NavBar = ({ onOpenDrawer }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <HStack>
        <Show below="lg">
          <IconButton
            boxShadow={"60px"}
            padding={"10px"}
            icon={<MdMenu />}
            onClick={onOpenDrawer}
            aria-label="Open menu"
            variant="ghost"
          />
        </Show>
        <Hide below="md">
          <Link to={"/"}>
            <Image src={logo} padding="10px" boxSize="60px"></Image>
          </Link>
        </Hide>
      </HStack>
      <HStack>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
