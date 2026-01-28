import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';



export default function FullResume() {
  return (
    <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg my-8 shadow-sm bg-white text-gray-800">
      {/* Header */}
      <header className="mb-6">
      <h1 className="text-3xl font-bold">David Adebisi</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-2 text-sm space-y-2 sm:space-y-0">
        {/* Email */}
        <a
          href="mailto:mrvyde@gmail.com"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
        >
          <FaEnvelope className="text-red-500" />
          mrvyde@gmail.com
        </a>

        {/* Phone */}
        <span className="flex items-center gap-2 text-gray-700">
          <FaPhone className="text-green-600" />
          (+234) 810–202-4488
        </span>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/david-adebisi-35655526a"
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

      {/* Title */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Junior Full Stack Developer(Front-End Focused)</h2>
<p className="my-2 text-base leading-relaxed">
  Front-End Focused Junior Full-Stack Developer passionate about building responsive, scalable web applications using React, TypeScript, and Supabase. I specialize in clean, user-friendly interfaces and implement full-stack features like authentication, database integration, and API interactions.
</p>
<p>
  My project experience spans e-commerce and digital health platforms, with a strong emphasis on responsive design, testing, and reliable user experiences. I thrive in agile teams and i am currently deepening my Node.js and Express skills to tackle more advanced full-stack challenges.
</p>

      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Work Experience</h3>

        <div className="mb-6">
          <h4 className="font-bold">Junior Full Stack Developer(Front-End Focused)</h4>
          <p className="text-sm text-gray-600">TechWave Solutions ・ 03/2024 – 05/2025</p>
          <ul className="list-disc list-inside mt-2 text-base space-y-1">
             <li>Built and maintained a full-stack e-commerce platform using React and Supabase, supporting authentication, database operations, and real-world purchase flows.</li>
              <li>Developed responsive, accessible, and reusable UI components with state management and API integrations for product listings, carts, and checkout.</li>
              <li>Integrated backend services for user accounts, product management, and order workflows using Supabase APIs.</li>
              <li>Improved performance and user experience through frontend optimizations, structured queries, and bug fixes.</li>
              <li>Collaborated in an agile team to deliver features, perform manual testing, and ensure release quality.</li>

          </ul>
        </div>

        <div className="mb-6">
            <h4 className="font-bold">Software QA Tester</h4>
            <p className="text-sm text-gray-600">Freelance ・ 06/2023 – 11/2023</p>
            <ul className="list-disc list-inside mt-2 text-base space-y-1">
                <li>Tested mobile and web applications for brands including Facebook, Instagram, WhatsApp, and Sidekick Health — a digital health platform supporting chronic care, mental wellness, and lifestyle improvement.</li>
                <li>Validated features across multiple health programs, including maternal care, habit tracking, and mindfulness tools.</li>
                <li>Performed manual testing across devices to ensure functionality, responsiveness, and accessibility.</li>
                <li>Logged bugs and usability issues in structured spreadsheets with detailed reproduction steps.</li>
                <li>Uploaded screen recordings and walkthrough videos to confirm test coverage and verify issue resolution.</li>
                <li>Collaborated with QA leads to retest fixed issues and ensure regression stability.</li>
                <li>Maintained high accuracy while testing edge cases, user flows, and error handling scenarios.</li>
            </ul>
        </div>

        <div>
          <h4 className="font-bold">Front-End Developer</h4>
          <p className="text-sm text-gray-600">Innovatech Solutions ・ 12/2022 – 05/2023</p>
          <ul className="list-disc list-inside mt-2 text-base space-y-1">
            <li>Assisted in the development of a responsive web application using HTML, CSS, and JavaScript, enhancing mobile accessibility and increasing traffic by 10%.</li>
            <li>Participated in Agile sprints, contributing to the successful delivery of five key features ahead of schedule, improving project timelines by 15%.</li>
            <li>Integrated third-party APIs to enhance application functionality, resulting in a 12% increase in user satisfaction and engagement.</li>
          </ul>
        </div>
      </section>

      {/* Skills & Competencies */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Skills & Competencies</h3>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Full Stack Application Architecture</li>
          <li>RESTful API Design and Development</li>
          <li>Database Schema Design and Optimization</li>
          <li>Responsive Web Development</li>
          <li>Agile Development Methodology</li>
          <li>Performance Optimization Analysis</li>
          <li>Technical Problem Solving</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>AI-Assisted Code Development</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <p className="text-base">
          <strong>Bachelor of Science in Management and Accounting</strong><br />
          Obafemi Awolowo Unversity, Ile-ife<br />
          Focus: Management and Accountingt<br />
          2015 – 2019
        </p>
      </section>
    </div>
  );
}