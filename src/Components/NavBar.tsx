import { HStack, Image, Show, IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import logo from "../assets/GameHub_logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onOpenDrawer: () => void;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onOpenDrawer, onSearch }: Props) => {
  return (
    <HStack justifyContent={'space-between'} padding="10px">
      <HStack>
        <Show below="lg">
          <IconButton
            icon={<MdMenu />}
            onClick={onOpenDrawer}
            aria-label="Open menu"
            variant="ghost"
          />
        </Show>
        <Image src={logo} padding="10px" boxSize="60px"></Image>
      </HStack>
      <HStack>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
