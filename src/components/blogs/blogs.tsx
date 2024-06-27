import React from 'react';

interface Blog {
  date: string;
  type: string;
  title: string;
  description: string;
  author: string;
  occupation: string;
}

const blogs: Blog[] = [
  {
    date: 'June 10, 2024',
    type: 'Tech',
    title: 'Understanding TypeScript',
    description: 'A comprehensive guide to getting started with TypeScript for modern web development.',
    author: 'John Doe',
    occupation: 'Software Engineer',
  },
  {
    date: 'May 23, 2024',
    type: 'Career',
    title: 'How to Succeed in Tech Interviews',
    description: 'Tips and strategies to excel in technical interviews and land your dream job.',
    author: 'Jane Smith',
    occupation: 'Senior Developer',
  },
  {
    date: 'April 15, 2024',
    type: 'Health',
    title: 'Maintaining Work-Life Balance',
    description: 'Strategies to achieve a healthy work-life balance while working in tech.',
    author: 'Emily Johnson',
    occupation: 'Life Coach',
  }
  // Add more blog entries as needed
];

export default function CodermallhiBlogs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-customBlue">Blogs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Articles</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore my latest blog posts on various topics, including tech, career advice, and personal development.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.title}
                className="relative p-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <p className="text-sm text-gray-500">{blog.date} · {blog.type}</p>
                <h3 className="mt-2 text-xl font-medium text-gray-900">{blog.title}</h3>
                <p className="mt-2 text-base text-gray-600">{blog.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">{blog.author}</p>
                  <p className="text-sm text-gray-600">{blog.occupation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
