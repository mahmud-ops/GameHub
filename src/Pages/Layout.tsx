import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar onOpenDrawer={onOpen} />
      <Box paddingX={5}>
        <Outlet context={{ isOpen, onClose }} />
      </Box>
    </>
  );
};

export default Layout;
