export default function Education() {
  const educationData = [
    {
      period: "June 2022 – Present",
      degree: "B.E. in Computer Engineering",
      institution: "Birla Vishvakarma Mahavidyalaya (BVM), Vallabh Vidyanagar",
      highlights: [
        "Current CGPA: 8.9",
        "Core coursework: Data Structures & Algorithms, Database Systems, Operating Systems, Computer Networks",
        "Practical exposure to web development, machine learning, and cloud computing",
        "Collaborated on team projects using Agile methodologies",
        "Active participation in coding contests and technical workshops",
      ],
    },
    {
      period: "2020 – 2022",
      degree: "Higher Secondary (Science Stream - PCM)",
      institution: "BAPS Swaminarayan Vidyamandir, Anand",
      highlights: [
        "Percentage: 89%",
        "Focused on Mathematics, Physics, and Chemistry",
        "Engaged in leadership and cultural activities",
      ],
    },
  ];

  return (
    <div className="bg-blue-50 px-6 md:px-24 py-6  font-poppins text-gray-900">
      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
      >
        Education
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-6"
          >
            <p className="text-sm text-blue-600 font-medium mb-1">
              {edu.period}
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              {edu.degree}
            </h3>
            <h4 className="text-md text-gray-600 mb-3">{edu.institution}</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {edu.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
