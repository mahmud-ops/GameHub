import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
    {colorMode === "light" ? <FaSun />  : <MdDarkMode />}
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="blue"
      />
    </HStack>
  );
}
