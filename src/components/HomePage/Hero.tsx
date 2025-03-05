import Typewriter from "@/fancy/components/text/typewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-start justify-center lg:px-[20%]">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-0 lg:-mt-8">
        <div className="flex flex-col items-start gap-2 tracking-tighter">
          <h2 className="font-poppins text-lg md:text-xl lg:text-[1.5vw] text-gray-900 dark:text-gray-300">
            Hey, welcome to my portfolio! 👋
          </h2>
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-[2.5vw] font-normal text-gray-900 dark:text-gray-300">
            I&apos;m{" "}
            <span className="text-black dark:text-white font-semibold text-4xl md:text-5xl lg:text-[3.5vw]">
              Siddhesh Lakhani
            </span>
          </h1>
          <div className="font-mono text-sm md:text-base lg:text-lg lg:mt-4 bg-gray-900 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
            <span className="text-blue-400">{"const "}</span>
            <span className="text-yellow-400">{"role "}</span>
            <span className="text-white">{"= "}</span>
            <Typewriter
              text={[
                "'Full Stack Developer';",
                "'Software Engineer';",
                "'Tech Enthusiast';",
                "'Problem Solver';",
              ]}
              speed={60}
              className="text-green-400 dark:text-green-300 border-b"
              waitTime={1000}
              deleteSpeed={40}
              cursorChar={"_"}
            />
            <span className="text-white">{""}</span>
          </div>
        </div>
        <div className="w-[400px] h-[400px] rounded-full flex justify-center items-center">
          <Image
            src="/me.jpg"
            width={400}
            height={400}
            alt="Hero"
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
