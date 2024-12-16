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
      company: "EssayPlan AI",
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-100 text-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-teal-600 text-center mb-12">
          My Experience
        </h1>

        {/* Experience Section */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {/* Company Name */}
                <h2 className="text-3xl font-bold text-gray-800">{experience.company}</h2>
                <div className="mt-4 space-y-6">
                  {experience.roles.map((role, i) => (
                    <div
                      key={i}
                      className="group border-l-4 border-teal-500 pl-4 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    >
                      {/* Role Title */}
                      <h3 className="text-xl font-semibold text-gray-700 group-hover:text-teal-600">
                        {role.title}
                      </h3>
                      {/* Dates */}
                      <p className="text-sm text-gray-500">{role.date}</p>
                      {/* Description */}
                      <p className="text-gray-600 mt-2">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}