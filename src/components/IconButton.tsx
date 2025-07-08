import { CiMail } from "react-icons/ci";
import type { ReactNode } from "react";
import { LiaDownloadSolid } from "react-icons/lia";

interface IconButtonProps {
  icon?: ReactNode;
  text?: string;
  href?: string;
  download?: boolean;
  downloadIcon?: boolean;
}

const IconButton = ({
  href,
  download,
  text,
  downloadIcon,
}: IconButtonProps) => {
  return (
    <a
      className="flex justify-start items-center gap-2 font-extralight text-xs cursor-pointer hover:text-brand-4 transition-colors duration-500 border rounded-md px-2 py-2 hover:bg-brand-1/50 border-brand-4 hover:border-brand-4"
      href={href}
      download={download}
    >
      <div className="text-xs">
        {downloadIcon ? <LiaDownloadSolid /> : <CiMail />}
      </div>
      {text}
    </a>
  );
};

export default IconButton;
