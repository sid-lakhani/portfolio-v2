import { socials } from "@/lib/constants";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full overflow-hidden">
      <div className="sticky bg-gray-900 dark:bg-gray-300 bottom-0 left-0 h-fit lg:h-80 flex justify-center items-center">
        <div className="relative w-full h-full flex justify-end px-12 text-right items-start py-12 text-white dark:text-black">
          <div className="z-10 font-poppins flex space-x-8 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <Link href="/"><li className="hover:underline cursor-pointer">Home</li></Link>
              <Link href="/about"><li className="hover:underline cursor-pointer">About</li></Link>
            </ul>
            <ul>
              <Link href="/blogs"><li className="hover:underline cursor-pointer">Blogs</li></Link>
              <Link href="/projects"><li className="hover:underline cursor-pointer">Projects</li></Link>
            </ul>
            <ul>
              <Link href="/Resume.pdf"><li className="hover:underline cursor-pointer">Resume</li></Link>
              <Link href="/skills"><li className="hover:underline cursor-pointer">Skills</li></Link>
              <Link href="/contact"><li className="hover:underline cursor-pointer">Contact</li></Link>
            </ul>
            <ul>
              {socials.map((social) => (
                <Link key={social.url} href={social.url}>
                  <li className="cursor-pointer hover:underline">{social.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <h2 className="z-0 absolute bottom-0 left-0 translate-y-1/3 text-5xl md:text-[100px] lg:text-[140px] text-white dark:text-black font-poppins italic">
            sidlakhani
          </h2>
        </div>
      </div>
    </div>
  );
}
