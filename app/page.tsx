import {
  siNextdotjs,siReact,siTypescript,siJavascript,siTailwindcss,siNodedotjs,
 siReactquery,siMongodb,siStyledcomponents,siSupabase,siExpress,
} from 'simple-icons/icons';


function Icon({ icon, label }: { icon: { svg: string; hex: string }; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{
          __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}"`),
        }}
        title={label}
      />
      <span className="mt-3 text-base text-center">{label}</span>
    </div>

  );
}




export default function About() {

  const techIcons = [
    { icon: siNextdotjs, label: 'Next.js' },
    { icon: siReact, label: 'React' },
    { icon: siTypescript, label: 'TypeScript' },
    { icon: siJavascript, label: 'JavaScript' },
    { icon: siTailwindcss, label: 'Tailwind CSS' },
    { icon: siNodedotjs, label: 'Node.js' },
    { icon: siReactquery, label: 'React Query' },
    { icon: siMongodb, label: 'MongoDB' },
    { icon: siStyledcomponents, label: 'Styled Components' },
    { icon: siSupabase, label: 'Supabase' },
    { icon: siExpress, label: 'Express.js' },
  ];


  return (
  <div className="flex flex-col items-center justify-center py-10">
      {/* Avatar Image */}
       {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar/myavatar.png" // Replace with your image path
        alt="Avatar"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
      />

      {/* Text below the avatar */}
      <p className="mt-4 text-lg font-semibold text-gray-800 text-center">
        David Adebisi
      </p>

      <div className="border-2 border-gray-400 rounded-lg shadow-sm p-5 md:p-6 w-full mt-6 max-w-[370px] md:max-w-[450px] mx-auto  min-h-[450px] md:min-h-[500px]">
          <h1 className="text-1xl md:text-2xl font-bold">
            Full-stack Dev(Frontend Focus)
          </h1>

          {/* Bio Text */}
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            I am a software developer with expertise in Next.js. I have experience in building scalable,
            secure and reliable web applications using various frameworks and technologies.
            I enjoy solving complex problems and learning new skills. I am passionate about creating
            high-quality code that follows best practices and industry standards. 
            I’m strengthening my Node.js and Express knowledge to take on more complete full-stack challenges.
          </p>
          <h1 className="text-2xl md:text-2xl font-bold pt-8">
            Tech stack:
          </h1>
          <div className="grid grid-cols-4 gap-8 px-1 py-6 max-w-5xl mx-auto">
              {techIcons.map(({ icon, label }) => (
                <Icon key={label} icon={icon} label={label} />
              ))}
          </div>
      </div>
  </div>
  );
}
