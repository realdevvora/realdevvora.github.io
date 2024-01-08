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
    <div className="flex-grow bg-blue-900 p-8 min-h-screen text-white pt-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="flex flex-col space-y-8">
          {skillCategory('Languages', ['Python (Advanced)', 'JavaScript (Advanced)', 'Java (Intermediate)'])}
          {skillCategory('Frameworks/Technologies', ['Node.js', 'React.js', 'Flask', 'Django', 'MongoDB', 'PostgresQL'])}
        </div>
      </div>
    </div>
  );
}
