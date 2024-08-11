"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations,getLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Navbar = ({params}) => {
  const router = useRouter();
  const pathname = usePathname();
  // const locale = params.locale 
  const about = useTranslations("About");
  const navLinks = [
    {
      title: about('title'),
      path: "#about",
    },
    {
      title: "Contact",
      path: "#contact",  
    },
  ];

  
  console.log("params",params)


  const [navbarOpen, setNavbarOpen] = useState(false);

  async function changeLanguage (pathname) {
    console.log("appel")
    router.push(`${pathname}`);

  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] relative overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="hero image"
                className="absolute top-0 left-0 w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </motion.div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu mr-5 hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
           
            <li>
              <button  onClick={ () =>changeLanguage(pathname)} >
              {about('otherLang')}
              </button>
            </li>
           
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
