interface project {
  title: string;
  description: string;
  image?: string;
  technologies: string | string[];
}

export const projects: project[] = [
  {
    title: "Baierbuam And Friends",
    description: 'Website for the music group "Baierbuam And Friends".',
    technologies: ["React", "Material UI", "Framer Motion"],
  },
  {
    title: "Radio WebWelle",
    description:
      "Website for the Internet Radio Station of the Deggendorf Institute of Technology. You can listen to hundreds of radio shows, podcasts etc. made & produced by students.",
    technologies: ["Next.js", "React", "Tailwind", "Framer Motion"],
  },
];
