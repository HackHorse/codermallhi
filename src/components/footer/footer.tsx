import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden py-12">
      {/* Background shape */}
      <div
        className="absolute inset-0 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"
          style={{
            zIndex: -1,
          }}
        >
          <div
            className="relative aspect-w-16 aspect-h-9 w-full"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              backgroundColor: '#07009B',
              backgroundImage: 'linear-gradient(to right, #07009B, #1649FF)',
              opacity: 0.3,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h2 className="text-3xl font-bold text-customBlue">
              Got a cool idea? Let’s make some magic together!
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-800">
              Whether you have a project in mind or just want to say hello, feel free to reach out.
            </p>
            <a
              href="mailto:info@codermallhi.com"
              className="mt-6 inline-block bg-customBlue text-white py-2 px-4 rounded-lg hover:bg-customBlue-dark transition duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="text-center lg:text-right lg:w-1/2">
            <p className="text-gray-400">&copy; 2024. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              Designed and developed by <a href="https://codermallhi.com" className="text-customBlue">codermallhi</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
