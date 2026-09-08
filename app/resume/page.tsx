import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function FullResume() {
  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg my-8 shadow-sm bg-white text-gray-800">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">David Adebisi</h1>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 mt-2 text-sm space-y-2 sm:space-y-0">
          {/* Email */}
          <a
            href="mailto:mrvyxfhdhxchde@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <FaEnvelope className="text-red-500" />
            mrvyde@gmail.com
          </a>

          {/* Phone */}
          <span className="flex items-center gap-2 text-gray-700">
            <FaPhone className="text-green-600" />
            (+234) 810–022-4488
          </span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mr-vyde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MrVyde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:underline"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          Full-Stack Developer
        </h2>

        <p className="mt-2 text-base leading-relaxed">
          Full-stack developer with 3+ years of professional
          experience spanning frontend engineering, backend
          development, and software quality assurance. I build
          responsive applications and database-driven systems
          using React, Next.js, TypeScript, Node.js, Express,
          Prisma, PostgreSQL, and Supabase.
        </p>

        <p className="mt-2 text-base leading-relaxed">
          Experienced in building authentication workflows,
          REST APIs, database operations, middleware, real-time
          communication, and responsive interfaces. I approach
          development with a focus on reliable architecture,
          maintainable code, performance, and dependable user
          experiences.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Work Experience
        </h3>

        {/* TechWave */}
        <div className="mb-6">
          <h4 className="font-bold">
            Full Stack Developer
          </h4>

          <p className="text-sm text-gray-600">
            TechWave Solutions ・ 03/2024 – 05/2025
          </p>

          <ul className="list-disc list-inside mt-2 text-base space-y-1">
            <li>
              Built and maintained a full-stack e-commerce
              platform using React, Supabase, and PostgreSQL,
              supporting authentication, database operations,
              product workflows, and purchase flows.
            </li>

            <li>
              Implemented authentication, middleware, and API
              integrations for user, product, cart, and order
              workflows.
            </li>

            <li>
              Developed responsive and reusable frontend
              components with structured state management and
              reliable API interactions.
            </li>

            <li>
              Optimized frontend performance and backend queries
              to improve application responsiveness and support
              scalable data operations.
            </li>

            <li>
              Collaborated within an Agile workflow to deliver
              features, troubleshoot issues, perform manual
              testing, and maintain release quality.
            </li>
          </ul>
        </div>

        {/* QA */}
        <div className="mb-6">
          <h4 className="font-bold">
            Software QA Tester
          </h4>

          <p className="text-sm text-gray-600">
            Freelance ・ 06/2023 – 11/2023
          </p>

          <ul className="list-disc list-inside mt-2 text-base space-y-1">
            <li>
              Tested mobile and web applications for brands
              including Facebook, Instagram, WhatsApp, and
              Sidekick Health.
            </li>

            <li>
              Validated features across digital health programs
              including chronic care, maternal health, habit
              tracking, and mindfulness experiences.
            </li>

            <li>
              Performed cross-device manual testing to verify
              functionality, responsiveness, accessibility, and
              error handling.
            </li>

            <li>
              Identified and documented bugs with detailed
              reproduction steps, screenshots, and screen
              recordings.
            </li>

            <li>
              Collaborated with QA leads to retest resolved
              issues and verify regression stability across
              application releases.
            </li>
          </ul>
        </div>

        {/* Innovatech */}
        <div>
          <h4 className="font-bold">
            Front-End Developer
          </h4>

          <p className="text-sm text-gray-600">
            Innovatech Solutions ・ 12/2022 – 05/2023
          </p>

          <ul className="list-disc list-inside mt-2 text-base space-y-1">
            <li>
              Assisted in developing responsive web
              applications using HTML, CSS, and JavaScript,
              improving mobile accessibility and contributing
              to increased website traffic.
            </li>

            <li>
              Participated in Agile sprints and contributed to
              the delivery of five key features ahead of
              schedule.
            </li>

            <li>
              Integrated third-party APIs to enhance application
              functionality and improve the overall user
              experience.
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          Technical Skills
        </h3>

        <div className="space-y-2 text-base">
          <p>
            <strong>Languages:</strong>{" "}
            JavaScript, TypeScript, SQL, HTML, CSS
          </p>

          <p>
            <strong>Frontend:</strong>{" "}
            React, Next.js, Tailwind CSS, React Query
          </p>

          <p>
            <strong>Backend:</strong>{" "}
            Node.js, Express.js, REST APIs, Socket.IO
          </p>

          <p>
            <strong>Databases & ORM:</strong>{" "}
            PostgreSQL, Supabase, MongoDB, Prisma
          </p>

          <p>
            <strong>Engineering:</strong>{" "}
            Authentication, Middleware, API Integration,
            Database Design, State Management, Performance
            Optimization, Responsive Development
          </p>

          <p>
            <strong>Testing:</strong>{" "}
            Manual Testing, Regression Testing, Cross-Device
            Testing, Accessibility Testing, Bug Reporting
          </p>
        </div>
      </section>

      {/* Selected Projects */}
      <section>
        <h3 className="text-lg font-semibold mb-4">
          Selected Projects
        </h3>

        {/* MeChat */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h4 className="font-bold">
              MeChat · Full-Stack Real-Time Messaging
            </h4>

            <a
              href="https://me-chat-eta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          </div>

          <p className="text-base mt-1">
            Built a real-time messaging platform with Next.js,
            TypeScript, Node.js, Express, Prisma, PostgreSQL,
            Socket.IO, and React Query. Implemented
            authentication, direct and group conversations,
            presence tracking, optimistic updates, search, and
            profile management.
          </p>
        </div>

        {/* CrowdQuest */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h4 className="font-bold">
              Crowd-Quest · Full-Stack Interactive Game
            </h4>

            <a
              href="https://crowd-quest.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          </div>

          <p className="text-base mt-1">
            Built a responsive hidden-character game using
            Next.js, TypeScript, Express, Prisma, and REST APIs.
            Implemented session-based gameplay, coordinate-based
            character detection, API validation, progress
            tracking, completion states, and touch-friendly
            interactions.
          </p>
        </div>

        {/* E-commerce */}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h4 className="font-bold">
              Full-Stack E-Commerce Platform
            </h4>

            <a
              href="https://vyde-store.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          </div>

          <p className="text-base mt-1">
            Built an e-commerce application using React,
            TypeScript, Zustand, React Query, Tailwind CSS, and
            Supabase, including authentication, cart management,
            product workflows, and database integration.
          </p>
        </div>
      </section>
    {/* Education */}
      {/* <section>
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <p className="text-base">
          <strong>Bachelor of Science in Management and Accounting</strong><br />
          Obafemi Awolowo Unversity, Ile-ife<br />
          Focus: Management and Accountingt<br />
          2015 – 2019
        </p>
      </section> */}
    </div>
  );
}