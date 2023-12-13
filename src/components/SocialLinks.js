import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/sathwik-nayak-a188ab131/",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/sathwik9887/",
    },
    {
      id: 3,
      name: "Email",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:sathwiknayak199@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      name: "CustomLink",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "#your-custom-link-url",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={link.style}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 text-white"
            >
              <>
                {link.name}
                {link.icon}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
