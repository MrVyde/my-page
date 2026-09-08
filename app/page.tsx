import {
  siNextdotjs,
  siReact,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siReactquery,
  siMongodb,
  siSupabase,
  siExpress,
  siSocketdotio,
  siPrisma,
  siPostgresql,
} from "simple-icons/icons";

function Icon({
  icon,
  label,
}: {
  icon: { svg: string; hex: string };
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{
          __html: icon.svg.replace(
            "<svg",
            `<svg fill="#${icon.hex}"`
          ),
        }}
        title={label}
      />

      <span className="mt-3 text-base text-center">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const techIcons = [
    { icon: siNextdotjs, label: "Next.js" },
    { icon: siReact, label: "React" },
    { icon: siTypescript, label: "TypeScript" },
    { icon: siJavascript, label: "JavaScript" },
    { icon: siTailwindcss, label: "Tailwind CSS" },
    { icon: siNodedotjs, label: "Node.js" },
    { icon: siExpress, label: "Express.js" },
    { icon: siPrisma, label: "Prisma" },
    { icon: siPostgresql, label: "PostgreSQL" },
    { icon: siSupabase, label: "Supabase" },
    { icon: siReactquery, label: "React Query" },
    { icon: siSocketdotio, label: "Socket.IO" },
    { icon: siMongodb, label: "MongoDB" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Avatar */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar/myavatar.png"
        alt="David Adebisi"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
      />

      {/* Name */}
      <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
        David Adebisi
      </p>

      {/* About Card */}
      <div className="border-2 border-gray-400 rounded-lg shadow-sm p-5 md:p-6 w-full mt-6 max-w-[370px] md:max-w-[450px] mx-auto min-h-[450px] md:min-h-[500px]">
        <h1 className="text-xl md:text-2xl font-bold">
          Full-Stack Developer
        </h1>

        {/* Bio */}
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          I&apos;m a developer working at the intersection of
          frontend engineering, backend development, and
          database-driven systems. Since 2022, I&apos;ve been
          growing through full-stack development, building
          responsive applications and APIs with React, Next.js,
          TypeScript, Node.js, Express, Prisma, and Supabase.
        </p>

        <p className="mt-3 text-base md:text-lg leading-relaxed">
          I enjoy going beyond simply writing code, thinking about
          reliable architecture, authentication, performance,
          and building a solid foundation that can grow with the
          product.
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-bold pt-6">
          Tech Stack:
        </h2>

        <div className="grid grid-cols-4 gap-8 px-1 py-6 max-w-5xl mx-auto">
          {techIcons.map(({ icon, label }) => (
            <Icon
              key={label}
              icon={icon}
              label={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}