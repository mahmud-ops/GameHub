import { useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <NavBar onOpenDrawer={onOpen} />
      <Outlet context={{isOpen, onClose}}/>
    </>
  );
};

export default Layout;
