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

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Material UI",
    icon: <SiMui />,
  },
  {
    name: "Astro",
    icon: <SiAstro />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },
];

export default function Icons() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-2 text-lg">
        {technologies.map((item) => (
          <div
            key={item.name}
            id={item.name}
            className="flex gap-3 items-center"
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </Container>
  );
}
