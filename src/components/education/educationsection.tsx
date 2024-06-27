// import React from 'react';

// const EducationSection = () => {
//   return (
//     <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
//         {/* Education content column */}
//         <div className="md:w-1/2 md:pl-4" style={{marginTop: '100px'}}>
//           <h2 className="text-4xl font-bold text-black mb-4 text-center md:text-left">Education</h2>
//           <div className="flex flex-col space-y-4">
//             <div>
//               <h3 className="text-xl font-semibold text-black">Bachelor of Science (Information Engineering)</h3>
//               <p className="text-gray-700">HAW Hamburg (Hamburg University of Applied Science) | Hamburg, Germany</p>
//               <p className="text-green-500">Sep 2018 - March 2023</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-black">Bachelor of Science (General Science)</h3>
//               <p className="text-gray-700">Kurukshetra University | Kurukshetra, India</p>
//               <p className="text-green-500">Sep 2011 - June 2015</p>
//             </div>
//             {/* Add more education items as needed */}
//           </div>
//         </div>
//         {/* Big character "M" column */}
//         <div className="text-custom-color font-bold leading-none md:w-1/2 flex justify-center">
//           <span className="text-9xl md:text-45rem text-green-600 bg-text-gradient [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] bg-clip-text" style={{fontSize: '65rem', lineHeight: '0.6', paddingTop: '0', paddingBottom: '0', marginRight: '-85%' }}>m</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationSection;



import React from 'react';
import { BookOpenIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Bachelor of Science (Information Engineering)',
    description:
      'HAW Hamburg (Hamburg University of Applied Science) | Hamburg, Germany',
    icon: BookOpenIcon,
    term: 'Sep 2018 - March 2023',
  },
  {
    name: 'Bachelor of Science (General Science)',
    description: 'Kurukshetra University | Kurukshetra, India',
    icon: BookOpenIcon,
    term: 'Sep 2011 - June 2015',
  },
]

export default function ExperienceSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-customBlue">Education</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Academic Journey</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              My academic background has equipped me with the knowledge and skills to excel in the tech industry, driving innovation and success in every project I undertake.
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
            src="/images/project.jpeg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl sm:w-[45rem] md:-ml-4 lg:ml-12"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}