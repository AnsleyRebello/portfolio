"use client";
import React from "react";
import { FloatingNav } from "../../../components/ui/floating-navbar";
import { IconHome,IconAddressBook, IconUser } from "@tabler/icons-react";
// import { AboutHeader } from "./AboutHeader";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#Spotlightpreview",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#project",
      icon: <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
     
    </div>
  );
}

