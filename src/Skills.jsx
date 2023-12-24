import React from 'react';

export default function Skills() {
  const skillCategory = (title, items) => (
    <div className="mb-8 group transition">
      <h2 className="text-2xl font-semibold mb-4 group-hover:text-orange-300 transition-colors duration-500">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="mb-2 group-hover:opacity-100 transition-opacity">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex-grow bg-blue-900 p-8 min-h-screen text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="flex flex-col space-y-8">
          {skillCategory('Languages', ['Python (Advanced)', 'JavaScript (Advanced)', 'Java (Intermediate)'])}
          {skillCategory('Frameworks/Technologies', ['Node.js', 'React.js', 'Flask', 'Django', 'MongoDB', 'PostgresQL'])}
          <div className="mb-8 group">
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-orange-300 transition-colors duration-500">Personal Skills</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2 group-hover:opacity-100 transition-opacity">
                <span className="group-hover:text-orange-300 transition-colors duration-500">Proactivity</span>: As I'm constantly trying to grow my technical and interpersonal skills, I need to hold myself accountable as my own boss. I set my own goals for myself first, then recognize what the team needs and reach out to help accordingly.
              </li>
              <li className="mb-2 group-hover:opacity-100 transition-opacity">
                <span className="group-hover:text-orange-300 transition-colors duration-500">Co-operation</span>: Working in teams is sometimes tough, because the challenge is not only to complete individual activities, but it's the constant mirage of deadlines. As they approach quickly, it often becomes a hassle and individuals can get thrown off balance. However, keeping calm and following a well-communicated game plan is often my way of dealing with this pressure to achieve the desired goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
