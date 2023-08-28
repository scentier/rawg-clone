import { TPlatform } from "./Types";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiCommodore, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

type TProps = {
  platforms: { platform: TPlatform }[];
};

const PlatformList = ({ platforms }: TProps) => {
  const iconMap: { [key: string]: any } = {
    // cari pengganti any
    // slug: icon
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    ios: <MdPhoneIphone />,
    android: <FaAndroid />,
    mac: <FaApple />,
    linux: <FaLinux />,
    nintendo: <SiNintendo />,
    atari: <SiAtari />,
    commodoreamiga: <SiCommodore />,
    sega: <SiSega />,
    web: <BsGlobe />,
  };
  return (
    <>
      <ul>
        {platforms.map(({ platform }) => (
          // deconstruk {platform} agar tidak platform.platform.name
          <li>
            {iconMap[platform.slug.replace("-", "")]} - {platform.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlatformList;
