"use client";
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
      <header className="flex items-center justify-center w-screen px-6 py-16 md:py-20 bg-top dark:bg-top-dark">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)]">
            <Image
              src="/images/profile.jpg"
              alt="Sreenadh Yandapalli"
              width={192}
              height={192}
              className="object-cover object-center w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground dark:text-gray-300">
              Saisreenadh (Sreenadh) Yandapalli
            </h1>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mt-3">
              Stanford Computer Science & Psychology Student | Full Stack Developer | Wordle Fanatic
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center mt-5">
              <a
                href="/projects"
                className="px-5 py-2 bg-gray-700 text-white dark:text-gray-300 rounded-lg shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)] hover:bg-gray-800 transition-transform transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="mailto:syandapalli@stanford.edu"
                className="px-5 py-2 bg-gray-500 text-white dark:text-gray-300 rounded-lg shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)] hover:bg-gray-600 transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-5 mt-5">
              <a
                href="https://github.com/saisreenadh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saisreenadh-yandapalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:syandapalli@stanford.edu"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-bottom dark:bg-bottom">
        <h2 className="text-3xl font-bold text-center text-foreground dark:text-gray-300 mb-8">
          Skills & Tools
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
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
    <div className="group flex flex-col items-center bg-top dark:bg-top-dark p-4 rounded-lg shadow-md dark:shadow-[0_4px_6px_rgba(255,255,255,0.1)] hover:shadow-lg dark:hover:shadow-[0_6px_8px_rgba(255,255,255,0.15)] transform transition-transform duration-300 ease-in-out hover:scale-105">
      <Icon size={32} className={`${color} group-hover:opacity-75`} />
      <span className="mt-2 text-xs font-medium text-gray-800 dark:text-gray-300">
        {label}
      </span>
    </div>
  );
}