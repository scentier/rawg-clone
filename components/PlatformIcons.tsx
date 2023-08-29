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
import { ReactElement } from "react";

type TProps = {
  platforms: { platform: TPlatform }[];
};

const PlatformList = ({ platforms }: TProps) => {
  const iconMap: { [key: string]: ReactElement } = {
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
    web: <BsGlobe />,
  };
  return (
    <>
      <ul className="flex flex-wrap px-2 mb-2 relative overflow-auto">
        {platforms.map(({ platform }) => (
          // deconstruk {platform} agar tidak platform.platform.name
          <li key={platform.id} className="mb-2 mr-4 text-stone-400">
            {iconMap[platform.slug.replace("-", "")]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlatformList;
