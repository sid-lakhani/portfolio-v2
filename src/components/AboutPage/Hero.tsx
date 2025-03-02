import Link from "next/link";
import React from "react";
import PageHeader from "../universal/PageHeader";

export default function Hero() {
  return (
    <div className="min-h-[100dvh] w-full px-[10%] lg:px-[20%]">
      <PageHeader title="Know Me Better" subtitle="A glimpse into who I am and what I do." />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 lg:gap-0 mt-6 md:px-4 mb-12">
        <div className="flex text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-poppins flex-col items-start gap-2 tracking-tight">
          <p className="mt-4">
            I&apos;m a passionate developer, tech enthusiast, and gamer who
            loves building cool stuff on the web. I thrive on problem-solving,
            exploring new technologies, and pushing the boundaries of
            what&apos;s possible. With experience in JavaScript, TypeScript, and
            frameworks like Next.js and React, I specialize in crafting
            seamless, high-performance web apps. Whether it&apos;s optimizing
            user experiences with Tailwind CSS, integrating APIs, or
            experimenting with new tech, I&apos;m always looking for ways to
            build better, faster, and more efficient solutions.
          </p>
          <h2 className="mt-6 font-sans font-semibold text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="mt-4">
            When I&apos;m not coding, you&apos;ll probably find me immersed in
            gaming, vibing to music, or pushing my limits in sports. Tech,
            music, and competition fuel my energy, and I&apos;m always up for a
            challenge—whether it&apos;s debugging a tricky issue or hitting a
            game-winning moment.
          </p>
          <p>Let&apos;s build something awesome together!</p>
          <p className="text-black dark:text-white border-b">
            <Link href="/contact">Get in touch</Link>
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
