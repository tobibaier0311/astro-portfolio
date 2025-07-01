import { CiMail } from "react-icons/ci";
import type { ReactNode } from "react";

const icons = [
  {
    href: "mailto:tobiasbaier00@gmail.com",
    icon: <CiMail />,
  },
];

interface IconButtonProps {
  text?: string;
  icon?: ReactNode;
}

const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <a className="text-xl " href="mailto:tobiasbaier00@gmail.com">
      {icon}
    </a>
  );
};

export default function HeroIcons({ text }: IconButtonProps) {
  return (
    <div className="flex gap-4 items-center  font-extralight cursor-pointer">
      {text}
      {icons.map((icon) => (
        <IconButton key={icon.href} icon={icon.icon} />
      ))}
    </div>
  );
}
