import React from 'react';
import { Star, Users, Trophy } from 'lucide-react';

function AchievementsGrid() {
  const achievements = [
    {
      title: "Webathon'24 Winner",
      icon: Trophy,
      date: "April 2024",
      description: "Ranked 1st out of 90 participants. Built a sports inventory management system with advanced user and admin features.",
    },
    {
      title: "Google Digital Marketing Certified",
      icon: Star,
      date: "March 2023",
      description: "Completed Google’s Digital Marketing course covering SEO, SEM, and social media strategies.",
    },
    {
      title: "MS Learn Club Event Organizer",
      icon: Users,
      date: "Dec 2023 – Aug 2024",
      description: "Organized a coding contest and full-stack workshop that benefited over 200 participants.",
    },
  ];

  return (
    <div className="bg-blue-50 px-6 md:px-24 py-6 ">
      <h2   className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Achievements</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map(({ title, description, icon: Icon, date }, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white shadow-md p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-sm text-gray-500 italic mb-2">{date}</p>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsGrid;
