"use client";

import React from "react";
import FloatingDock from "./ui/FloatingDock";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="w-full h-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="w-full h-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="w-full h-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="w-full h-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="w-full h-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <div className="h-[35rem] w-full flex items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
}




// export default function Navbar() {
//   return (
//     <nav className="w-fit mx-auto mt-8 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-md">
//       <div className="flex items-center space-x-8">
//         <a href="#home" className="text-black font-bold">Kirthi Shetty</a>
//         <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
//         <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
//       </div>
//     </nav>
//   );
// }
