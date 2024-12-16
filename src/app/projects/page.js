"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ShelterLink",
      description:
        "An AI-powered platform leveraging real-time data to optimize shelter occupancy and streamline resource allocation.",
      image: "/images/shelterlink.jpg",
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
      image: "/images/guessthetoon.jpg",
      technologies: ["Node.js", "Express", "OpenAI API", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/saisreenadh/GuessTheToon",
    },
    {
      title: "Path Planner",
      description:
        "A travel app that helps users plan trips, organize destinations, and view routes on an interactive map.",
      image: "/images/pathplanner.jpg",
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
      image: "/images/facemaskdetection.jpg",
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
      image: "/images/3dbrain.jpg",
      technologies: ["Python", "Matplotlib"],
      link: "https://github.com/saisreenadh/3D-Brain",
    },
    {
      title: "AI Nutrition App",
      description:
        "Provides personalized dietary advice using AI, collecting preferences for tailored health recommendations.",
      image: "/images/ainutritionapp.jpg",
      technologies: ["Python", "Google Vertex AI"],
      link: "https://github.com/saisreenadh/AI-Nutrition-App",
    },
    {
      title: "License Plate Sorter",
      description:
        "Efficiently manages car registration data, sorts it by expiration date, and flags expiring registrations.",
      image: "/images/licenseplatesorter.jpg",
      technologies: ["Java"],
      link: "https://github.com/saisreenadh/License-Plate-Sorter",
    },
    {
      title: "2048 Game",
      description:
        "A stylish 2048 game built with Java and Swing! Slide tiles, combine them, and reach the 2048 tile.",
      image: "/images/2048game.jpg",
      technologies: ["Java", "Swing"],
      link: "https://github.com/saisreenadh/2048-Game",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-teal-600 text-center mb-12">
          Some of My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative h-[30rem]">
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col h-[calc(100%-14rem)] justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="text-sm text-gray-500">
                      <strong>Technologies:</strong> {project.technologies.join(", ")}
                    </div>
                  </div>
                  {project.link && (
                    <div className="mt-4 text-center text-gray-600 group-hover:text-teal-600 transition-colors">
                      Click to view on GitHub
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}