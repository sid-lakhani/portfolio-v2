import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-start justify-start px-[10%] lg:px-[20%] pt-12 lg:pt-24 gap-2">
      <h1 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl text-black dark:text-white lg:ml-16 tracking-wide">
        Know Me Better
      </h1>
      <h2 className="font-sans text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-400 lg:ml-16 italic">
        Who I am and what I do.
      </h2>
      <div className="h-[0.5px] w-full bg-black/50 dark:bg-white/50 mt-12"></div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 lg:gap-0 mt-6 md:px-4 mb-12">
        <div className="flex text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-poppins flex-col items-start gap-2 tracking-tight">
          <p className="mt-4">
            I'm a passionate developer, tech enthusiast, and gamer who loves
            building cool stuff on the web. I thrive on problem-solving,
            exploring new technologies, and pushing the boundaries of what’s
            possible. With experience in JavaScript, TypeScript, and frameworks
            like Next.js and React, I specialize in crafting seamless,
            high-performance web apps. Whether it's optimizing user experiences
            with Tailwind CSS, integrating APIs, or experimenting with new tech,
            I'm always looking for ways to build better, faster, and more
            efficient solutions.
          </p>
          <h2 className="mt-6 font-sans font-semibold text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
            Let's Connect
          </h2>
          <p className="mt-4">
            When I’m not coding, you’ll probably find me immersed in gaming,
            vibing to music, or pushing my limits in sports. Tech, music, and
            competition fuel my energy, and I’m always up for a
            challenge—whether it’s debugging a tricky issue or hitting a
            game-winning moment.
          </p>
          <p>Let’s build something awesome together!</p>
          <p className="text-black dark:text-white border-b">
            <Link href="/contact">Get in touch
            </Link>
          </p>
        </div>
        <div className="w-[300px] h-[300px] rounded-full flex justify-center items-center bg-black dark:bg-white text-white dark:text-black">
          {/* <Image src="/me.jpg" width={300} height={300} alt="Hero" classname="rounded-full overflow-scroll" /> */}
          Image
        </div>
      </div>
    </div>
  );
}
