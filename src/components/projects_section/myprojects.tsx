"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/UI/wobble-card";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  size: string;
}

const projects: Project[] = [
  {
    name: 'Project One',
    description: 'This is a brief description of Project One.',
    imageUrl: '/images/coding.jpeg',
    size: 'large', // Add size property
  },
  {
    name: 'Project Two',
    description: 'This is a brief description of Project Two.',
    imageUrl: '/images/coding.jpeg',
    size: 'small', // Add size property
  },
  {
    name: 'Project Three',
    description: 'This is a brief description of Project Three.',
    imageUrl: '/images/coding.jpeg',
    size: 'small', // Add size property
  },
  {
    name: 'Project Four',
    description: 'This is a brief description of Project Four.',
    imageUrl: '/images/coding.jpeg',
    size: 'small', // Add size property
  },
  {
    name: 'Project Five',
    description: 'This is a brief description of Project Four.',
    imageUrl: '/images/coding.jpeg',
    size: 'small', // Add size property
  },
  {
    name: 'Project Six',
    description: 'This is a brief description of Project Four.',
    imageUrl: '/images/coding.jpeg',
    size: 'large', // Add size property
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-customBlue">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Recent Work</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some of my recent projects showcasing my skills in various domains.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-8xl mx-auto w-full mt-12">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-customBlack min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/images/project.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-customBlack min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/images/project.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
        </div>
      </div>
    </div>
  );
}
