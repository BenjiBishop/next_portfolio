// "use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
const HeroSection =   () => {
  
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Benjamin",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Admin DB",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Developer by passion, engineer by profession. Discover my universe,
            a universe where creativity meets functionality.
          </p>
          <div>
            <Link
              href="#about"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              href="/images/benjamin_cv.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Cv
              </span>
            </a>
            {/* <button class="button inline-block items-center justify-center gap-4 text-white font-extrabold text-lg leading-tight tracking-wider bg-primary border-2 border-secondary rounded-lg shadow-button transform -skew-x-10 transition-transform duration-100 filter drop-shadow-lg">
    Click me
  </button> */}
            {/* ssh root@109.199.109.179
LcNz9fvBsGJBS2q */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/profil.jpeg"
              alt="hero image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
