import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import type { ReactNode } from "react";

const icons = [
  {
    href: "https://www.google.com",
    icon: <SiGithub />,
  },
  {
    href: "https://www.google.com",
    icon: <SiLinkedin />,
  },
  {
    href: "mailto:tobiasbaier00@gmail.com",
    icon: <MdEmail />,
  },
];

interface IconButtonProps {
  href: string;
  icon: ReactNode;
}

const IconButton = ({ href, icon }: IconButtonProps) => {
  return (
    <a
      className="text-2xl text-earth hover:text-white py-6 transition-colors duration-500"
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default function HeroIcons() {
  return (
    <div className="flex gap-6 items-center">
      {icons.map((icon) => (
        <IconButton href={icon.href} icon={icon.icon} />
      ))}
    </div>
  );
}
