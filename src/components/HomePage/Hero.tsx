import React from "react";
import Typewriter from "@/fancy/components/text/typewriter";
import Image from "next/image";

export default function Hero() {
  const roles = [
    '"Full Stack Developer";',
    '"Software Engineer";',
    '"Tech Enthusiast";',
    '"Problem Solver";',
  ];
  return (
    <div className="relative z-10 h-[93dvh] w-full flex flex-col items-start justify-center px-[25rem] whitespace-pre">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-2 tracking-tighter">
          <h2 className="font-poppins text-2xl text-gray-900 dark:text-gray-300 ">
            Hey, welcome to my portfolio! 👋
          </h2>
          <h1 className="font-poppins text-6xl font-normal text-gray-900 dark:text-gray-300">
            I'm{" "}
            <span className="text-black dark:text-white font-semibold">
              Siddhesh Lakhani
            </span>
          </h1>
          <div className="font-mono text-lg mt-4 bg-gray-900 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
            <span className="text-blue-400">{"const "}</span>
            <span className="text-yellow-400">{"role "}</span>
            <span className="text-white">{"= "}</span>
            <Typewriter
              text={roles}
              speed={60}
              className="text-green-400 dark:text-green-300 border-b"
              waitTime={1000}
              deleteSpeed={40}
              cursorChar={"_"}
            />
            <span className="text-white">{""}</span>
          </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-full flex justify-center items-center bg-black dark:bg-white text-white dark:text-black">
          {/* <Image src="/me.jpg" width={300} height={300} alt="Hero" classname="rounded-full overflow-scroll" /> */}
          Image
        </div>
      </div>
    </div>
  );
}
