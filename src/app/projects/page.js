"use client";

export default function Projects() {
  const projects = [
    {
      title: "ShelterLink",
      description:
        "An AI-powered platform leveraging real-time data to optimize shelter occupancy and streamline resource allocation.",
      technologies: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "Google Vertex AI",
        "Firebase",
        "GenKit",
        "React",
      ],
      link: null,
    },
    {
      title: "GuessTheToon",
      description:
        "An AI-powered word-guessing game with fun challenges and engaging gameplay for cartoon enthusiasts.",
      technologies: ["Node.js", "Express", "OpenAI API", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/saisreenadh/GuessTheToon",
    },
    {
      title: "Path Planner",
      description:
        "A travel app that helps users plan trips, organize destinations, and view routes on an interactive map.",
      technologies: [
        "Node.js",
        "Express",
        "Mongoose",
        "Passport.js (Google OAuth)",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Leaflet.js",
        "MongoDB",
      ],
      link: "https://github.com/saisreenadh/Path-Planner",
    },
    {
      title: "Face Mask Detection",
      description:
        "Detects masks in real-time using deep learning and computer vision techniques with color-coded feedback.",
      technologies: [
        "OpenCV",
        "TensorFlow/Keras",
        "Numpy",
        "Haar Cascade Classifier",
        "Python",
      ],
      link: "https://github.com/saisreenadh/Mask-Detector",
    },
    {
      title: "3D Brain Project",
      description:
        "Visualizes real-time brain activity using EEG data and a 3D brain model for interactive learning.",
      technologies: ["Python", "Matplotlib"],
      link: "https://github.com/saisreenadh/3D-Brain",
      inProgress: true,
    },
    {
      title: "AI Nutrition App",
      description:
        "Provides personalized dietary advice using AI, collecting preferences for tailored health recommendations.",
      technologies: ["Python", "Google Vertex AI"],
      link: "https://github.com/saisreenadh/AI-Nutrition-App",
    },
    {
      title: "License Plate Sorter",
      description:
        "Efficiently manages car registration data, sorts it by expiration date, and flags expiring registrations.",
      technologies: ["Java"],
      link: "https://github.com/saisreenadh/License-Plate-Sorter",
    },
    {
      title: "2048 Game",
      description:
        "A stylish 2048 game built with Java and Swing! Slide tiles, combine them, and reach the 2048 tile.",
      technologies: ["Java", "Swing"],
      link: "https://github.com/saisreenadh/2048-Game",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F0F1] dark:bg-[#3A3A3A] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-16">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="relative rounded-lg border-2 border-[#1C1C1E] dark:border-[#EAEAEB] bg-[#EAEAEB] dark:bg-[#1C1C1E] 
                shadow-md dark:shadow-[0_6px_8px_rgba(255,255,255,0.1)] hover:shadow-lg dark:hover:shadow-[0_8px_10px_rgba(255,255,255,0.2)] 
                transition-transform duration-300 transform group-hover:scale-105 h-[22rem] flex flex-col p-6"
              >
                {/* In Progress Banner */}
                {project.inProgress && (
                  <div className="absolute top-0 right-0 bg-[#FFD700] text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg">
                    In Progress
                  </div>
                )}

                {/* Project Title */}
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-2 group-hover:underline">
                  {project.title}
                </h2>

                {/* Project Description */}
                <p className="text-gray-700 dark:text-gray-400 mb-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                {project.link ? (
                  <div className="mt-auto text-sm font-medium text-center text-gray-800 dark:text-[#E0E0E0] group-hover:text-[#444444] dark:group-hover:text-[#E0E0E0]">
                    Explore Project
                  </div>
                ) : (
                  <div className="mt-auto text-sm text-center text-gray-500">
                    Link Not Available
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}