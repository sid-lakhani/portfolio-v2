import Link from "next/link";
import React from "react";
import PageHeader from "../universal/PageHeader";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen w-full px-[10%] lg:px-[20%]">
      <PageHeader
        title="Know Me Better"
        subtitle="A glimpse into who I am and what I do."
      />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12 lg:gap-0 lg:mt-6 md:px-4 pb-24">
        <div className="flex text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-poppins flex-col items-start lg:gap-2 tracking-tight">
          <p className="lg:mt-4">
            I&apos;m a passionate <strong>developer</strong>,{" "}
            <strong>tech enthusiast</strong>, and <strong>gamer</strong> who
            loves building cool stuff on the web. My journey started with{" "}
            <strong>JavaScript </strong>
            and <strong>TypeScript</strong>, crafting seamless, high-performance
            web apps with
            <strong> Next.js</strong>, <strong>React</strong>, and{" "}
            <strong>Tailwind CSS</strong>. Lately, I&apos;ve been diving deeper
            into <strong>Linux</strong>—tweaking my workflow, optimizing
            performance, and exploring self-hosting—currently running{" "}
            <strong>Garuda Linux</strong> for its speed and flexibility.
          </p>
          <p className="mt-4">
            I believe in <strong>minimalism</strong>, both in design and
            functionality. That reflects in my work, whether it's a{" "}
            <strong>clean, efficient codebase</strong> or a
            <strong> sleek, no-frills portfolio</strong> that focuses on what
            truly matters.
            <strong> Problem-solving</strong> is what drives me, whether
            it&apos;s <strong>debugging tricky code</strong>,{" "}
            <strong>integrating APIs</strong>, or{" "}
            <strong>fine-tuning my system</strong> for peak efficiency.
          </p>
          <h2 className="mt-6 font-sans font-semibold text-2xl md:text-3xl lg:text-4xl text-black dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="mt-4">
            When I&apos;m not coding, you&apos;ll probably find me immersed in
            <strong> gaming</strong>, vibing to <strong>music</strong>, or
            pushing my limits in <strong>sports</strong>.
            <strong> Tech, music, and competition</strong> fuel my energy, and
            I&apos;m always up for a challenge—whether it&apos;s{" "}
            <strong>debugging a tricky issue</strong> or{" "}
            <strong>hitting a game-winning moment</strong>.
          </p>
          <p className="mt-4">
            Let&apos;s build something awesome together!
          </p>
          <p className="text-black dark:text-white underline mt-2 flex flex-row gap-2">
            <Link href="/contact">
              <strong>Get in touch</strong>
            </Link>
            <Link href="/resume.pdf">
              <strong className="ml-2">My Resume</strong>
            </Link>
          </p>
        </div>
        <div className="w-[400px] h-[400px] rounded-full flex justify-center items-center">
          <Image
            src="/about.png"
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
