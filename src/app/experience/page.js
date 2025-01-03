"use client";

export default function Experience() {
  const experiences = [
    {
      company: "Locbit Inc.",
      roles: [
        {
          title: "Software Engineer Intern",
          date: "July 2024 - September 2024",
          description:
            "Developed APIs to integrate interactive data visualizations, collaborated with cross-functional teams to enhance IoT strategies, and optimized API integration for better application performance.",
        },
        {
          title: "Software Engineer Intern",
          date: "June 2023 - August 2023",
          description:
            "Built programs using Google's APIs to identify IoT opportunities, enhanced front-end experiences, and improved UX for better customer engagement.",
        },
      ],
    },
    {
      company: "CollegePlan AI",
      roles: [
        {
          title: "Software Engineer Intern",
          date: "June 2024 - October 2024",
          description:
            "Developed chat completion APIs, redesigned core algorithms for scalability, and implemented testing frameworks to improve platform performance and stability.",
        },
      ],
    },
    {
      company: "Kid-Kode",
      roles: [
        {
          title: "Co-Founder",
          date: "June 2020 - August 2024",
          description:
            "Designed programming curricula, tutored students in foundational coding skills, and created engaging hands-on projects to prepare students for the tech industry.",
        },
      ],
    },
    {
      company: "Shirdi Sai Baba Spiritual Center",
      roles: [
        {
          title: "Director",
          date: "June 2019 - Present",
          description:
            "Led programs to expand membership, organized charitable events, and collaborated with local organizations to distribute meals and aid the community.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#2B2B2B] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-[#D0D0D0] text-center mb-12">
          My Experience
        </h1>

        {/* Experience Section */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg dark:shadow-[0_6px_8px_rgba(255,255,255,0.1)] hover:shadow-xl dark:hover:shadow-[0_8px_10px_rgba(255,255,255,0.2)] transition-shadow duration-300 bg-[#E0E0E0] dark:bg-[#1E1E1E] border border-[#F5F5F5] dark:border-[#2B2B2B] p-6"
            >
              {/* Company Name */}
              <h2 className="text-3xl font-bold text-gray-800 dark:text-[#D0D0D0] mb-4">
                {experience.company}
              </h2>

              <div className="space-y-6">
                {experience.roles.map((role, i) => (
                  <div key={i} className="group pl-4 border-l-4 border-gray-500 dark:border-gray-300">
                    {/* Role Title */}
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      {role.title}
                    </h3>
                    {/* Dates */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">{role.date}</p>
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}