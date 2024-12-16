import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaJava,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="flex items-center justify-center w-screen px-6 py-24 md:py-28 bg-top dark:bg-top-dark">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-md dark:shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Sreenadh Yandapalli"
              width={240}
              height={240}
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-gray-300">
              Saisreenadh (Sreenadh) Yandapalli
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 mt-4">
              Stanford CS & Psychology Student | Innovator | Problem Solver
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center mt-6">
              <a
                href="/projects"
                className="px-6 py-2 bg-gray-700 text-white dark:text-gray-300 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="mailto:syandapalli89@gmail.com"
                className="px-6 py-2 bg-gray-500 text-white dark:text-gray-300 rounded-lg shadow-md hover:bg-gray-600 transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="https://github.com/saisreenadh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/saisreenadh-yandapalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:syandapalli89@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-bottom dark:bg-bottom">
        <h2 className="text-4xl font-bold text-center text-foreground dark:text-gray-300 mb-12">
          Skills & Tools
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <SkillCard Icon={FaPython} label="Python" color="text-teal-500" />
          <SkillCard Icon={SiJavascript} label="JavaScript" color="text-yellow-500" />
          <SkillCard Icon={FaJava} label="Java" color="text-red-500" />
          <SkillCard Icon={SiCplusplus} label="C++" color="text-blue-500" />
          <SkillCard Icon={SiReact} label="React" color="text-cyan-500" />
          <SkillCard Icon={SiCss3} label="CSS" color="text-blue-400" />
          <SkillCard Icon={SiHtml5} label="HTML" color="text-orange-500" />
          <SkillCard Icon={FaAws} label="AWS" color="text-orange-500" />
          <SkillCard Icon={SiFirebase} label="Firebase" color="text-yellow-500" />
          <SkillCard Icon={FaDatabase} label="SQL" color="text-teal-400" />
        </div>
      </section>
    </div>
  );
}

function SkillCard({ Icon, label, color }) {
  return (
    <div className="group flex flex-col items-center bg-top dark:bg-top-dark p-5 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl">
      <Icon size={40} className={`${color} group-hover:opacity-75`} />
      <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-300">
        {label}
      </span>
    </div>
  );
}