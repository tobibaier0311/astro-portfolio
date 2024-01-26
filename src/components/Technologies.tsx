import React from "react";
import {
  SiAstro,
  SiFramer,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Container from "./Container";

export default function Technologies() {
  return (
    <Container>
      <div className="text-white">
        <div className="flex items-center gap-2">
          <SiJavascript /> JavaScript
        </div>
        <div>
          <SiTypescript /> TypeScript
        </div>
        <div>
          {" "}
          <SiReact /> React.js
        </div>
        <div>
          {" "}
          <SiNextdotjs /> Next.js
        </div>
        <div>
          <SiAstro /> Astro
        </div>
        <div>
          {" "}
          <SiTailwindcss /> Tailwind
        </div>
        <div>
          {" "}
          <SiMui /> Material UI
        </div>
        <div>
          <SiFramer /> Framer Motion
        </div>
      </div>
    </Container>
  );
}
