import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import HeroSection from "@/components/hero/hero";
import { MyProjects } from "@/components/projects_section/projectsections";
import ExperienceSection from "@/components/experience/experiencesection";
import EducationSection from "@/components/education/educationsection";
import CoreCompetenciesSection from "@/components/skills/corecompetence";
import { Blogs } from "@/components/blogs/blogsection";
import CodermallhiBlogs from "@/components/blogs/blogs";
import Techs from "@/components/skills/techs";
import Projects from "@/components/projects_section/myprojects";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <Techs />
      <EducationSection />
      <CoreCompetenciesSection />
      <Projects />
      <CodermallhiBlogs />
      <Footer />
    </>
  );
}
