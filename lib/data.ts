import mangaSearch from "@/public/mangaSearch2.png";
import personalBlog from "@/public/personalblog.png";
import openFashionEcommerce from "@/public/openfashion.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce - Frontend",
    description:
      "An ecommerce website to practice my frontend skills, focusing on responsive design, and user-friendly interfaces.",
    tags: ["React", "TypeScript", "Redux", "Supabase", "Node.js"],
    imageUrl: openFashionEcommerce,
    href: "https://ecommerce-six-blond-87.vercel.app/",
  },
  {
    title: "Personal Blog",
    description:
      "A full-stack blog website to document my journey in web development, share my knowledge, and record my progress.",
    tags: ["React", "TypeScript", "Redux", "MonggoDB", "Node.js"],
    imageUrl: personalBlog,
    href: "https://raymart-personal-blog.vercel.app/",
  },
  {
    title: "Manga Search",
    description:
      "Manga Search allows users to find their favorite manga and get recommendations based on their preferences.",
    tags: ["React", "CSS", "HTML"],
    imageUrl: mangaSearch,
    href: "https://mangasearch.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MUI",
  "Prisma",
  "MongoDB",
  "Redux",
  "Tanstack",
  "Figma",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
