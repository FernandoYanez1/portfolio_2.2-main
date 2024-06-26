"use client";

import React, { useState } from "react";
import NavBarLogo from "./components/NavBarLogo";
import NavBarTheme from "./components/NavBarTheme";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import useScrollToAnchor from "@/hooks/useScrollToAnchor";
import { Toggle } from "@/components/ui/toggle";

const linksForNavBar = [
  {
    name: "Home",
    path: "#home",
    icon: "",
  },
  {
    name: "Sobre",
    path: "#about",
    icon: "",
  },

  {
    name: "Tecnologias",
    path: "#technologies",
    icon: "",
  },
  {
    name: "Projetos",
    path: "#projects",
    icon: "",
  },
  {
    name: "Contatos",
    path: "#contato",
    icon: "",
  },
];

export const NavBar = () => {
  const [state, setState] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const scrollToAnchor = useScrollToAnchor();
  return (
    <nav className="w-full  md:border-0 fixed top-0 left-0 dark:bg-[#09090b] bg-white z-30 shadow-sm md:px-10 lg:px-10">
      <div className="items-center px-2 lg:px-0 max-w-screen-xl mx-auto md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <button
            onClick={() => {
              scrollToAnchor("#home");
            }}
          >
            <NavBarLogo />
          </button>
          <div className="md:hidden">
            <button
              className=" outline-none p-2 rounded-md  focus:border"
              onClick={() => setState(!state)}
            >
              {state ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="flex justify-center md:justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="flex items-center md:items-start flex-col gap-4 md:gap-0 lg:gap-4 md:flex-row ">
                  {linksForNavBar.map((link) => (
                    <NavigationMenuLink
                      key={link.name}
                      style={{
                        cursor: "pointer",
                        fontWeight:
                          link.name === activePage ? "bold" : "normal",
                        background: link.name === activePage ? "#9bb3cb" : "",
                      }}
                      className={`${navigationMenuTriggerStyle()} ${
                        link.name === activePage
                          ? "bg-[#9bb3cb] dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)]  shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
                          : ""
                      }`}
                      onClick={() => {
                        scrollToAnchor(link.path);
                        setActivePage(link.name);
                      }}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  ))}
                  <NavBarTheme />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
      </div>
    </nav>
  );
};
