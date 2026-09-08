export type Project = {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce App",
    description:
      "A complete shopping experience with authentication, cart management, and Supabase integration. Built to demonstrate clean architecture, state management, and real-world e-commerce workflows.",
    images: [
      {
        src: "/project1/laptop.png",
        width: 4320, // TODO: replace with actual dimensions
        height: 1968, // TODO: replace with actual dimensions
      },
      {
        src: "/project1/tablet.png",
        width: 3039, // TODO: replace with actual dimensions
        height: 2232, // TODO: replace with actual dimensions
      },
      {
        src: "/project1/phone.png",
        width: 550, // TODO: replace with actual dimensions
        height: 876, // TODO: replace with actual dimensions
      },
    ],
    technologies: [
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "Zustand",
        icon: "devicon-zustand-plain colored",
      },
      {
        name: "React Query",
        icon: "devicon-react-original colored",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "Supabase",
        icon: "devicon-supabase-plain colored",
      },
    ],
    liveUrl: "https://vyde-store.vercel.app/",
    githubUrl: "https://github.com/MrVyde/E-commerce.git",
  },

  {
    id: "mechat",
    title: "MeChat",
    description:
      "A full-stack real-time messaging application with authentication, direct and group conversations, real-time messaging, user presence, search, and profile management. Built with Next.js on the frontend and a Node.js/Express backend with Socket.IO for real-time communication.",
    images: [
      {
        src: "/project2/laptop.png",
        width: 4320,
        height: 1968,
      },
      {
        src: "/project2/tablet.png",
        width: 3039,
        height: 2232,
      },
      {
        src: "/project2/phone.png",
        width: 550,
        height: 876,
      },
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "devicon-nextjs-plain colored",
      },
      {
        name: "React",
        icon: "devicon-react-original colored",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-plain colored",
      },
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain colored",
      },
      {
        name: "Express",
        icon: "devicon-express-original colored",
      },
      {
        name: "Socket.IO",
        icon: "devicon-socketio-original colored",
      },
      {
        name: "TanStack React Query",
        icon: "devicon-reactquery-original colored",
      },
    ],
    liveUrl: "https://me-chat-eta.vercel.app",
    githubUrl: "https://github.com/MrVyde/me-chat",
  },

{
  id: "crowd-quest",
  title: "Crowd-Quest",
  description:
    "A responsive hidden-character game where players search large images, select characters, and receive real-time validation through a backend API. Built with Next.js and TypeScript, with session-based gameplay, coordinate-based detection, progress tracking, and mobile touch support.",
  images: [
    {
      src: "/project3/laptop.png",
      width: 4320,
      height: 2544,
    },
    {
      src: "/project3/tablet.png",
      width: 2304,
      height: 2367,
    },
    {
      src: "/project3/phone.png",
      width: 960,
      height: 2193,
    },
  ],
  technologies: [
    {
      name: "Next.js",
      icon: "devicon-nextjs-plain colored",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain colored",
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain colored",
    },
    {
      name: "Express",
      icon: "devicon-express-original colored",
    },
    {
      name: "Prisma",
      icon: "devicon-prisma-original colored",
    },
  ],
  liveUrl: "https://crowd-quest.vercel.app/",
  githubUrl: "https://github.com/MrVyde/crowd-quest",
},
];