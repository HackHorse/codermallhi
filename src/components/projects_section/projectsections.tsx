'use client'
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/UI/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function MyProjects() {
  return (
    <div className="mb-40">
      <h2 className="text-4xl font-bold mb-14 ml-28 text-black">Projects</h2>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton image={item.image} />}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton: React.FC<{ image: string }> = ({ image }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-slate-950">
    <img src={image} alt="Project" className="w-full h-full object-cover rounded-xl" />
  </div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: "/images/app.jpg", // Add your image path here
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: "/images/app.jpg", // Add your image path here
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-white" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    image: "/images/app.jpg", // Add your image path here
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-white" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    image: "/images/app.jpg", // Add your image path here
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-white" />,
  },
];
