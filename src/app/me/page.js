"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#2B2B2B] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 dark:text-[#D0D0D0] mb-12">
          About Me
        </h1>

        {/* Content Section */}
        <div className="bg-[#E0E0E0] dark:bg-[#1E1E1E] rounded-lg shadow-md dark:shadow-[0_6px_8px_rgba(255,255,255,0.15)] p-8 space-y-6 text-gray-800 dark:text-[#D0D0D0]">
          {/* Introduction */}
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="font-bold">Sreenadh (shree-nod)</span>! I'm a Stanford student double majoring in
            <span className="font-bold"> Computer Science</span> with a specialization in <span className="font-bold">AI</span>.
          </p>

          {/* Section 1 */}
          <p className="text-lg leading-relaxed">
            I focus particularly in areas like <span className="font-bold">AI-driven solutions</span> and
            <span className="font-bold"> human-computer interaction</span>. I've co-founded
            <span className="font-bold"> Kid-Kode</span>, an initiative dedicated to empowering the next generation of programmers, and served as a
            <span className="font-bold"> Director at the Shirdi Sai Baba Spiritual Center</span>, where I led community-focused programs and charitable events.
          </p>

          {/* Section 2 */}
          <p className="text-lg leading-relaxed">
            I've interned at <span className="font-bold">Locbit Inc.</span>, where I developed APIs and optimized IoT strategies, and at
            <span className="font-bold"> CollegePlan AI</span>, where I contributed to scalable algorithms and robust testing frameworks.
          </p>

          {/* Section 3 */}
          <p className="text-lg leading-relaxed">
            I’ve worked on projects at the intersection of <span className="font-bold">AI, IoT, and education</span>. I aim to leverage my interest in
            <span className="font-bold"> computer science</span> to create innovative and impactful solutions.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          {/* GitHub */}
          <a
            href="https://github.com/saisreenadh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 bg-[#E0E0E0] dark:bg-[#1E1E1E] rounded-lg shadow-md dark:shadow-[0_6px_8px_rgba(255,255,255,0.15)] hover:shadow-lg dark:hover:shadow-[0_8px_10px_rgba(255,255,255,0.2)] hover:scale-105 transform transition-transform duration-300"
          >
            <FaGithub size={28} className="text-gray-800 dark:text-[#D0D0D0]" />
            <span className="text-gray-800 dark:text-[#D0D0D0] font-semibold">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sreenadh-yandapalli/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 bg-[#E0E0E0] dark:bg-[#1E1E1E] rounded-lg shadow-md dark:shadow-[0_6px_8px_rgba(255,255,255,0.15)] hover:shadow-lg dark:hover:shadow-[0_8px_10px_rgba(255,255,255,0.2)] hover:scale-105 transform transition-transform duration-300"
          >
            <FaLinkedin size={28} className="text-gray-800 dark:text-[#D0D0D0]" />
            <span className="text-gray-800 dark:text-[#D0D0D0] font-semibold">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:syandapalli@stanford.edu"
            className="flex items-center space-x-3 px-6 py-3 bg-[#E0E0E0] dark:bg-[#1E1E1E] rounded-lg shadow-md dark:shadow-[0_6px_8px_rgba(255,255,255,0.15)] hover:shadow-lg dark:hover:shadow-[0_8px_10px_rgba(255,255,255,0.2)] hover:scale-105 transform transition-transform duration-300"
          >
            <FaEnvelope size={28} className="text-gray-800 dark:text-[#D0D0D0]" />
            <span className="text-gray-800 dark:text-[#D0D0D0] font-semibold">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}