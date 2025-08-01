import mangaSearch from "@/public/mangaSearch2.png";
import personalBlog from "@/public/personalblog.png";
import openFashionEcommerce from "@/public/openfashion.png";
import toothAbode from "@/public/tooth_abode.png";
import assetManagement from "@/public/asset_management.png";

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
    title: "CMTH Asset Management System (OJT)",
    description:
      "Led development of a multi-tenant Asset Management System, with features like user authentication and asset lifecycle management.",

    tags: ["ReactJS", "TypeScript", "TanStack", "NodeJS", "PostgreSQL"],
    imageUrl: assetManagement,
    href: "https://github.com/raymartbediaformalejo/asset-management",
  },
  {
    title: "Tooth Abode Dental Clinic: Appointment System (Capstone)",
    description:
      "Built an appointment system for a dental clinic with booking, reminders, and admin scheduling tools.",
    tags: ["ReactJS", "TypeScript", "NodeJS", "TansStack", "PostgreSQL"],
    imageUrl: toothAbode,
    href: "https://toothabodedentalclinic.vercel.app/",
  },
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
    tags: ["ReactJS", "TypeScript", "Redux", "MonggoDB", "Node.js"],
    imageUrl: personalBlog,
    href: "https://raymart-personal-blog.vercel.app/",
  },
  {
    title: "Manga Search",
    description:
      "Manga Search allows users to find their favorite manga and get recommendations based on their preferences.",
    tags: ["ReactJS", "CSS", "HTML"],
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
  "ExpressJS",
  "PostgreSQL",
  "Framer Motion",
] as const;
