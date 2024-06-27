// import React from 'react';

// // Define the data
// const coreCompetenciesData = [
//   {
//     "title": "Backend Development",
//     "skills": [
//       {"name": "Python", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "Node.js", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "Django", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "Express", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "Java", "level": "Advanced", "color": "#96A1A8"},
//       {"name": "C-Programming", "level": "Advanced", "color": "bg-customBlue"}
//     ]
//   },
//   {
//     "title": "Frontend Development",
//     "skills": [
//       {"name": "HTML", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "CSS/SASS", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "Tailwind CSS", "level": "Intermediate", "color": "#96A1A8"},
//       {"name": "JavaScript", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "React", "level": "Advanced", "color": "bg-customBlue"}
//     ]
//   },
//   {
//     "title": "Database Management System",
//     "skills": [
//       {"name": "MySQL", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "MongoDB", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "PostgreSQL", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "Firebase", "level": "Advanced", "color": "bg-customBlue"}
//     ]
//   },
//   {
//     "title": "APIs Development",
//     "skills": [
//       {"name": "RESTful APIs", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "GraphQL", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "SOAP", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "OpenAPI/Swagger", "level": "Advanced", "color": "bg-customBlue"}
//     ]
//   },
//   {
//     "title": "DevOps & Tools",
//     "skills": [
//       {"name": "Docker", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "Kubernetes", "level": "Advanced", "color": "bg-customBlue"},
//       {"name": "Git", "level": "Intermediate", "color": "bg-customBlue"},
//       {"name": "Jenkins", "level": "Advanced", "color": "#96A1A8"}
//     ]
//   }
// ];

// const CoreCompetenciesSection = () => {
//   return (
//     <div className="bg-custom-bg-color py-8 my-40">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-black mb-8">Core Competencies</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {coreCompetenciesData.map((competency, index) => (
//             <div key={index} className="bg-custom-color rounded-lg p-4">
//               <h3 className="text-xl font-semibold text-black mb-4">{competency.title}</h3>
//               <ul className="text-gray-200 flex flex-wrap">
//                 {competency.skills.map((skill, i) => (
//                   <li key={i} className="mb-3 mt-3 mr-3 text-white">
//                     <span style={{ backgroundColor: skill.color }} className="rounded px-2 py-1 text-2xs mr-2 bg-customBlue [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]">{skill.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center justify-center mt-8">
//           <div className="mr-4">
//             <span className="w-4 h-4 rounded-full inline-block mr-2 bg-customBlue [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]"></span>
//             <span className="text-black">Master Level</span>
//           </div>
//           <div>
//             <span className="w-4 h-4 rounded-full inline-block mr-2 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]" style={{ backgroundColor: '#96A1A8' }}></span>
//             <span className="text-black">Competence Level</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreCompetenciesSection;

import React from 'react';
import { ServerIcon, ComputerDesktopIcon, ServerStackIcon, CommandLineIcon, FolderIcon } from '@heroicons/react/20/solid';

interface Skill {
  name: string;
  subSkills: string[];
  wellGroomed: boolean;
}

const coreCompetencies: Skill[] = [
  {
    name: 'Backend Development',
    subSkills: ['Node.js', 'Express.js', 'Java', 'Spring Boot'],
    wellGroomed: true,
  },
  {
    name: 'Frontend Development',
    subSkills: ['React', 'Angular', 'Vue.js'],
    wellGroomed: true,
  },
  {
    name: 'Database Management System',
    subSkills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    wellGroomed: true,
  },
  {
    name: 'APIs Development',
    subSkills: ['RESTful APIs', 'GraphQL', 'SOAP'],
    wellGroomed: false,
  },
  {
    name: 'DevOps & Tools',
    subSkills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    wellGroomed: false,
  },
];

const icons: Record<string, React.ElementType> = {
  'Backend Development': ServerIcon,
  'Frontend Development': ComputerDesktopIcon,
  'Database Management System': FolderIcon,
  'APIs Development': CommandLineIcon,
  'DevOps & Tools': ServerStackIcon,
};

export default function CoreCompetencies() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-customBlue">Core Competencies</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Professional Skills</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I have developed a wide range of skills throughout my career, focusing on both backend and frontend development, database management, and DevOps.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreCompetencies.map((competency) => {
              const IconComponent = icons[competency.name];
              return (
                <div key={competency.name} className="relative p-6 border rounded-lg shadow-sm">
                  <dt className="flex items-center">
                    <IconComponent className="h-6 w-6 text-customBlue" aria-hidden="true" />
                    <span className="ml-4 text-lg font-medium text-gray-900">{competency.name}</span>
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {competency.subSkills.map((subSkill, index) => (
                      <span
                        key={index}
                        className={`inline-block ${competency.wellGroomed ? 'text-customBlue' : 'text-gray-500'} mr-2`}
                      >
                        {subSkill}
                      </span>
                    ))}
                  </dd>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <div className="flex items-center mt-4">
              <div className="flex items-center mr-6">
                <span className="inline-block w-4 h-4 bg-customBlue rounded-full mr-2"></span>
                <span className="text-gray-600">Master Level</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-gray-500 rounded-full mr-2"></span>
                <span className="text-gray-600">Competence Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
