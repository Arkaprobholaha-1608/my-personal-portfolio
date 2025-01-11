"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Languages - Python, C, Java</li>
        <li>
          Web Stack - HTML, CSS, JavaScript, ReactJS, NodeJS, Firebase, NextJS
        </li>
        <li>Databases - SQL, MongoDB, PostgreSQL</li>
        <li>Version Control - Git</li>
        <li>
          DevOps - CI/CD (Jenkins, GitLab), Docker, Kubernetes, AWS, Azure
        </li>
        <li>OS Experience - Windows, Linux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Institute of Engineering and Management Kolkata</li>
        <li>Pathfinder HS Public School Jodhpur Park, Kolkata</li>
        <li>
          Kamarpukur R.K. Mission Multi-Purpose School(HS), Kamarpukur, Hooghly
        </li>
        ,
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics</li>
        <li>IBM Data Analyst</li>
        <li>DeepLearning.AI GenAI for Everyone</li>
        <li>Google IT Automation with Python</li>
        <li>AWS Cloud DevOps</li>
      </ul>
    ),
  },
  {
    title: "Internship Experience",
    id: "internship",
    content: (
      <ul className="list-disc pl-2">
        <li>Brainwave Matrix Solutions</li>
        <li>Cognifyz Technologies</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Highly motivated and detail-oriented individual with a strong
            foundation in problem-solving, project management, and analytical
            thinking. Experienced in collaborating with teams to deliver
            innovative solutions and optimize processes. Skilled in leveraging
            insights and efficient workflows to meet objectives. Committed to
            continuous learning and delivering quality outcomes aligned with
            organizational goals.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("internship")}
              active={tab === "internship"}
            >
              {" "}
              Internship Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
