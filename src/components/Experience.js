import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import next from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import github from "../assets/github.png";

const technologies = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Next.js", image: next },
  { name: "Tailwind CSS", image: tailwind },
  { name: "JavaScript", image: javascript },
  { name: "Node.js", image: node },
  { name: "React", image: react },
  { name: "GitHub", image: github },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-500 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-8 py-12 sm:px-0">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={tech.image} alt={tech.name} className="w-20 mx-auto" />
              <p className="mt-4">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
