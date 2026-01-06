import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "../Hooks/useGames";
import { HStack, Icon} from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    nintendo: SiNintendoswitch,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms?.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIcon;
