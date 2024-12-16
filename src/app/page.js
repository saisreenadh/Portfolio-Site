"use client";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
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
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-200 via-blue-200 to-white opacity-50 blur-3xl"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 relative z-10">
          Hi, I'm{" "}
          <span className="animated-gradient">
            Sreenadh
          </span>{" "}
          👋
        </h1>
        <p className="text-lg md:text-2xl mt-4 relative z-10 max-w-3xl">
          Stanford CS & Psychology Student | Innovator | Problem Solver
        </p>
        <div className="mt-10 flex space-x-6 relative z-10">
          <a
            href="/projects"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="mailto:syandapalli89@gmail.com"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/saisreenadh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition-transform transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sreenadh-yandapalli/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:syandapalli89@gmail.com"
            className="bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </header>

      {/* Technology Stack Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Tools
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <FaPython size={40} className="text-teal-500 group-hover:text-teal-600" />
            <span className="mt-2 text-sm text-gray-600">Python</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <SiJavascript size={40} className="text-yellow-500 group-hover:text-yellow-600" />
            <span className="mt-2 text-sm text-gray-600">JavaScript</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <FaJava size={40} className="text-red-500 group-hover:text-red-600" />
            <span className="mt-2 text-sm text-gray-600">Java</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <SiCplusplus size={40} className="text-blue-500 group-hover:text-blue-600" />
            <span className="mt-2 text-sm text-gray-600">C++</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <SiReact size={40} className="text-cyan-500 group-hover:text-cyan-600" />
            <span className="mt-2 text-sm text-gray-600">React</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <SiCss3 size={40} className="text-blue-400 group-hover:text-blue-500" />
            <span className="mt-2 text-sm text-gray-600">CSS</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <SiHtml5 size={40} className="text-orange-500 group-hover:text-orange-600" />
            <span className="mt-2 text-sm text-gray-600">HTML</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <FaAws size={40} className="text-orange-500 group-hover:text-orange-600" />
            <span className="mt-2 text-sm text-gray-600">AWS</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <SiFirebase size={40} className="text-yellow-500 group-hover:text-yellow-600" />
            <span className="mt-2 text-sm text-gray-600">Firebase</span>
          </div>
          <div className="group flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <FaDatabase size={40} className="text-teal-400 group-hover:text-teal-500" />
            <span className="mt-2 text-sm text-gray-600">SQL</span>
          </div>
        </div>
      </section>
    </div>
  );
}