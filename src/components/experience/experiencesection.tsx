// import React from 'react';

// const ExperienceSection = () => {
//   return (
//     <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
//         {/* Big character "O" column */}
//         <div className="text-custom-color font-bold leading-none md:w-1/2 flex justify-center">
//           <span className="text-9xl md:text-45rem text-green-600" style={{fontSize: '75rem', lineHeight: '0.6', paddingTop: '0', paddingBottom: '0', marginLeft: '-97%', marginTop: '-20%' }}>o</span>
//         </div>
        
//         {/* Experience content column */}
//         <div className="md:w-1/2 md:pl-4">
//           <h2 className="text-4xl font-bold text-black mb-4 text-center md:text-left">Experience</h2>
//           <div className="flex flex-col space-y-4">
//             <div>
//               <h3 className="text-xl font-semibold text-black">Back End Developer</h3>
//               <p className="text-gray-700">UNIRAG Studienplatzvermittlung GmbH & Co. KG | Hamburg, Germany</p>
//               <p className="text-green-500">Mar 2023 - Present</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-black">Full Stack Developer</h3>
//               <p className="text-gray-700">Medistart | Hamburg, Germany</p>
//               <p className="text-green-500">June 2020 - Feb 2023</p>
//             </div>
//             {/* Add more experience items as needed */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceSection;

import React from 'react';
import { ServerIcon, ServerStackIcon, CommandLineIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Back End Developer',
    description:
      'UNIRAG Studienplatzvermittlung GmbH & Co. KG | Hamburg, Germany',
    icon: ServerStackIcon,
    term: 'Mar 2023 - Present',
  },
  {
    name: 'Full Stack Developer',
    description: 'Medistart | Hamburg, Germany',
    icon: CommandLineIcon,
    term: 'June 2020 - Feb 2023',
  },
]

export default function ExperienceSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-customBlue">Experience</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enhanced Development Processes</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              My expertise spans multiple programming languages and frameworks, driving high-quality results and contributing to the success of diverse projects.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-customBlue" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                    <p className="text-customBlue-light">{feature.term}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/images/coding.jpeg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl sm:w-[45rem] md:-ml-4 lg:ml-16"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
