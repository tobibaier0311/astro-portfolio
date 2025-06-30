import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAstro } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaVuejs } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaGit } from "react-icons/fa";

import React from "react";

const logos = [
  FaHtml5,
  IoLogoJavascript,
  SiAstro,
  SiNextdotjs,
  SiAdobeillustrator,
  FaReact,
  IoLogoCss3,
  FaVuejs,
  SiMui,
  SiTypescript,
  FaShopify,
  SiAdobephotoshop,
  FaGit,
];

export default function LogoPathMotion() {
  return (
    <div className="w-[300px] h-[300px] relative">
      {/* Container dreht sich um das Zentrum */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformOrigin: "center center" }}
      >
        {logos.map((logo, index) => {
          const angle = (360 / logos.length) * index;
          const radius = 135;

          const x = 150 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 150 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute w-8 h-8"
              style={{
                left: `${x - 16}px`,
                top: `${y - 16}px`,
                transformOrigin: "center center",
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-full h-full"
              >
                {React.createElement(logo, {
                  className: "w-full h-full object-contain text-brand-5",
                })}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
