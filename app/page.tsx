"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const sectionsRef = useRef(new Array());
  const [activeSection, setActiveSection] = useState("section_about");

  useEffect(() => {
    console.log(activeSection);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.7) {
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="h-full bg-foreground  p-4 ">
      <div className="flex justify-between">
        <div className="flex">
          <div className="h-8 5 w-8 5 bg-black rounded-[50%] mr-[4px]"></div>
          <div className="h-8 5 w-8 5 bg-black rounded-[50%] mr-[4px]"></div>
          <div className="h-8 5 w-8 5 bg-black rounded-[50%] "></div>
        </div>
        <Link href="#">
          <Image
            className=" mr-[20px]"
            src="/exit.svg"
            width="34"
            height="34"
            alt="Picture of exit"
          />
        </Link>
      </div>
      <div className="bg-black w-full flex rounded-2xl px-12 py-20 justify-between mt-[20px] ">
        <div className="flex flex-col">
          <div className="flex pb-[35px] items-center">
            <h1 className="text-7xl mr-[50px] ">Bilal Nour</h1>
            <div className="h-[15rem] w-[15rem] mb-[-50px] bg-white rounded-[50%]"></div>
          </div>
          <h2 className="text-4xl pb-[20px]">Junior full-stack</h2>
          <h3 className="text-xl pb-[90px] w-[60%]">
            Trying to build the best website i can so one day they are pixel
            perfect
          </h3>
          <div className="flex items-center pb-[46px]">
            <div
              className={`bg-foreground flex mr-[2rem] ${
                activeSection == "section_about"
                  ? " w-[15rem] h-[6px]"
                  : "w-[10rem] h-[3px]"
              }`}
            ></div>
            <Link href="#section_about">
              {" "}
              <h3
                className={`${
                  activeSection == `{section_about" ? "text-3xl" : "text-xl}`
                }`}
              >
                About
              </h3>
            </Link>
          </div>
          <div className="flex items-center pb-[46px]">
            <div
              className={` ease-out bg-foreground flex mr-[2rem] ${
                activeSection == "section_exp"
                  ? " w-[15rem] h-[6px]"
                  : "w-[10rem] h-[3px]"
              }`}
            ></div>
            <Link href="#section_exp">
              <h3
                className={`ease-in ${
                  activeSection == "section_exp" ? "text-3xl" : "text-xl"
                }`}
              >
                Experience
              </h3>
            </Link>
          </div>
          <div className="flex items-center pb-[110px]">
            <div
              className={` bg-foreground flex mr-[2rem] ${
                activeSection == "section_projects"
                  ? " w-[15rem] h-[6px]"
                  : "w-[10rem] h-[3px]"
              }`}
            ></div>
            <Link href="#section_projects">
              <h3
                className={`${
                  activeSection == "section_projects" ? "text-3xl" : "text-xl"
                }`}
              >
                Projects
              </h3>
            </Link>
          </div>
          <div className="flex">
            <Link href="#">
              {" "}
              <Image
                className="mr-[30px]"
                src="/logo-linkedin.svg"
                width="50"
                height="50"
                alt="Linkedin logo"
              />
            </Link>
            <Link href="#">
              {" "}
              <Image
                src="/github.svg"
                width="50"
                height="50"
                alt="Github logo"
              />
            </Link>
          </div>
        </div>
        <div className="w-[55%] h-[42rem] overflow-y-auto overflow-x-hidden">
          <div className="w-[85%] flex flex-col">
            <section
              className="w-full justify-center"
              key="section_about"
              id="section_about"
              ref={(el) => {
                if (el) sectionsRef.current[0] = el;
              }}
            >
              <h3 className="text-3xl mb-[3rem]">About</h3>
              <p className="text-xl  mb-[3rem]">
                I started my programming journey back in 2023 where as a student
                i felt it would be interesting to learn a skill that would allow
                me to create amazing and unique projects, with a limitless
                amount of creativity. I was drawn to web dev as unlike other
                forms of programming it is much more visual (at least the
                front-end).
              </p>
              <p className="text-xl mb-[3rem]">
                This is my portfolio and honestly the real start of my journey i
                hope to fill this page with all the cool projects i do across as
                the many languages i will learn ( not Prolog ).
              </p>
              <p className="text-xl mb-[3rem]">
                I am currently a student studying at Leiden university who
                competes competitively in track and field. i major in data
                science and artificial intelligence. Thank you for reading and i
                hope you like some of the cool projects i have done.
              </p>
            </section>
            <section
              className="w-full justify-center flex-col"
              key="section_exp"
              id="section_exp"
              ref={(el) => {
                if (el) sectionsRef.current[1] = el;
              }}
            >
              <h3 className="text-3xl  mb-[3rem] ">Experience</h3>
              <div className="flex overflow-y-hidden overflow-x-auto w-full  mb-[1.5rem] pb-[1rem]">
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white "></div>
              </div>
              <p className="text-xl mb-[3rem]">
                I am currently a student studying at Leiden university who
                competes competitively in track and field. i major in data
                science and artificial intelligence. Thank you for reading and i
                hope you like some of the cool projects i have done.
              </p>
            </section>
            <section
              className="w-full justify-center flex-col"
              key="section_projects"
              id="section_projects"
              ref={(el) => {
                if (el) sectionsRef.current[2] = el;
              }}
            >
              <h3 className="text-3xl mb-[3rem]">Projects</h3>
              <div className="flex overflow-y-hidden overflow-x-auto w-full  mb-[1.5rem] pb-[1rem]">
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white mr-[1rem]"></div>
                <div className="h-[20rem] w-[30rem] flex-shrink-0 bg-white "></div>
              </div>
              <p className="text-xl mb-[3rem]">
                I am currently a student studying at Leiden university who
                competes competitively in track and field. i major in data
                science and artificial intelligence. Thank you for reading and i
                hope you like some of the cool projects i have done.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
