import React from 'react'
import { Star, Users, UserCheck } from 'lucide-react'

function LeadershipGrid() {
  const leadership = [
    {
      title: 'Vice President',
      subtitle: 'CodeChef College Chapter',
      icon: Star,
      date: 'Nov 2024 – Present',
      description:
        'Promoted competitive programming through events and initiatives, doubling club participation.',
    },
    {
      title: 'Event Manager',
      subtitle: 'Microsoft Learn Student Club',
      icon: Users,
      date: 'Dec 2023 – Aug 2024',
      description:
        'Led organization of coding competitions and workshops, improving engagement and skill development.',
    },
    {
      title: 'Volunteer',
      subtitle: 'BAPS Bal Mandal',
      icon: UserCheck,
      date: 'Aug 2018 – Present',
      description:
        'Led community events such as Bal Parayan and de-addiction campaigns impacting over 1000 participants.',
    },
  ]

  return (
    <div className="bg-blue-50 px-6 md:px-24 py-6">
      <h2   className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Leadership & Volunteering</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {leadership.map(({ title, subtitle, icon: Icon, date, description }, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white shadow-md p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon className="text-blue-600" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mb-2">{date}</p>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeadershipGrid
