"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#2B2B2B] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-[#D0D0D0] text-center mb-12">
          Some of My Projects
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on medium screens
            1024: { slidesPerView: 3 }, // Show 3 slides on large screens
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 
                  bg-[#E0E0E0] dark:bg-[#1E1E1E] border border-[#F5F5F5] dark:border-[#2B2B2B] flex flex-col"
                >
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
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 dark:text-[#D0D0D0] mb-2">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                      </div>
                    </div>
                    {project.link && (
                      <div className="text-center group-hover:text-[#444444] dark:group-hover:text-[#D0D0D0] transition-colors duration-300 mt-4">
                        Click to view on GitHub
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
