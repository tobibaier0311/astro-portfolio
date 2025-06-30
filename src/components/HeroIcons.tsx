import { SiGithub } from "react-icons/si";
import { CiMail } from "react-icons/ci";

import type { ReactNode } from "react";

const icons = [
  {
    href: "mailto:tobiasbaier00@gmail.com",
    icon: <CiMail />,
  },
];

interface IconButtonProps {
  href: string;
  icon: ReactNode;
}

const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <a className="text-xl " href="mailto:tobiasbaier00@gmail.com">
      {icon}
    </a>
  );
};

export default function HeroIcons() {
  return (
    <div className="flex gap-4 items-center hover:text-brand-4 transition-colors duration-500 font-extralight cursor-pointer">
      contact me
      {icons.map((icon) => (
        <IconButton key={icon.href} href={icon.href} icon={icon.icon} />
      ))}
    </div>
  );
}
