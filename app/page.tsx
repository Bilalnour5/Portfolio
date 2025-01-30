import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-auto   m-6 bg-[#EBE7DC]  p-4 ">
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
      <div className="bg-black h-[100%] w-full flex rounded-2xl px-12 py-20 justify-between mt-[20px] ">
        <div className="flex flex-col sticky">
          <div className="flex pb-[35px] items-center">
            <h1 className="text-7xl mr-[50px] ">Bilal Nour</h1>
            <div className="h-[10rem] w-[10rem] mb-[-50px] bg-white"></div>
          </div>
          <h2 className="text-4xl pb-[20px]">Junior full-stack</h2>
          <h3 className="text-xl pb-[90px] w-[60%]">
            Trying to build the best website i can so one day they are pixel
            perfect
          </h3>
          <div className="flex items-center pb-[46px]">
            <div className="w-[15rem] h-[7px] bg-foreground flex mr-[3rem]"></div>
            <Link href="#">
              {" "}
              <h3 className="text-2xl ">About</h3>
            </Link>
          </div>
          <div className="flex items-center pb-[46px]">
            <div className="w-[10rem] h-[3px] bg-foreground mr-[2rem]"></div>
            <Link href="#">
              <h3 className="text-xl ">Experience</h3>
            </Link>
          </div>
          <div className="flex items-center pb-[144px]">
            <div className="w-[10rem] h-[3px] bg-foreground mr-[2rem]"></div>
            <Link href="#">
              <h3 className="text-xl">Projects</h3>
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
          <div className="w-[85%] flex justify-center flex-col">
            <p className="text-xl  mb-[3rem]">
              I started my programming journey back in 2023 where as a student i
              felt it would be interesting to learn a skill that would allow me
              to create amazing and unique projects, with a limitless amount of
              creativity. I was drawn to web dev as unlike other forms of
              programming it is much more visual (at least the front-end).
            </p>
            <p className="text-xl mb-[3rem]">
              This is my portfolio and honestly the real start of my journey i
              hope to fill this page with all the cool projects i do across as
              the many languages i will learn ( not Prolog ).
            </p>
            <p className="text-xl mb-[3rem]">
              I am currently a student studying at Leiden university who
              competes competitively in track and field. i major in data science
              and artificial intelligence. Thank you for reading and i hope you
              like some of the cool projects i have done.
            </p>
            <div className="h-[20rem] bg-white w-full"></div>
            <p className="text-xl mb-[3rem]">
              I am currently a student studying at Leiden university who
              competes competitively in track and field. i major in data science
              and artificial intelligence. Thank you for reading and i hope you
              like some of the cool projects i have done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
