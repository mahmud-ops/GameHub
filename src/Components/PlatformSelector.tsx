import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import type { Platform } from "./GameGrid";

interface Props {
    onSelectPlatform:(platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}:Props) => {
  
    const { data } = usePlatforms();
    const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>

      <MenuList height={'70dvh'} overflow={'auto'}>
        {
            data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key = {platform.id}>{platform.name}</MenuItem>)
        }
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
