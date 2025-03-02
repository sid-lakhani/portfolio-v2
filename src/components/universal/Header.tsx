import { ThemeToggle } from "../theme/theme-switch";
import { navLinks, socials } from "@/lib/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-6 mx-auto w-[90%] max-w-6xl flex items-center justify-between px-8 py-3 bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-full border border-black/10 dark:border-white/10 z-[999]">
      <h1 className="text-2xl font-poppins font-medium tracking-tight text-gray-900 hover:text-black dark:text-white hover:dark:text-white transition-colors duration-100 ">
        <Link href={"/"}>sidlakhani</Link>
      </h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-300  transition-colors duration-100"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex flex-row items-center gap-2">
        {/* Socials */}
        {socials.map((social) => (
          <Link 
            key={social.url}
            href={social.url}
            className="cursor-pointer bg-black/200 hover:bg-black/10 dark:hover:bg-white/10 duration-100 transition-colors p-2 rounded-md"
          >
            <social.logo className="text-gray-900 dark:text-white size-5" />
          </Link>
          ))}
        <ThemeToggle />
      </div>
    </header>
  );
}
