import { ThemeToggle } from "../theme/theme-switch";
import { navLinks, socials } from "@/lib/constants";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="sticky top-6 mx-auto w-[90%] md:w-[80%] max-w-6xl flex items-center justify-between px-8 py-3 dark:bg-black/30 bg-white/30 backdrop-blur-md rounded-full border border-accent/50 dark:border-accent/50 z-[999]">
      <h1 className="text-2xl font-poppins font-medium tracking-tight text-gray-900 hover:text-accent hover:underline dark:text-white hover:dark:text-accent transition-all duration-300">
        <Link href={"/"}>sidlakhani</Link>
      </h1>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex gap-6 text-sm lg:text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="font-poppins text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-100"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Dropdown Menus for Mobile */}
      <div className="flex md:hidden gap-4">
        {/* Pages Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer focus:outline-none">
            <div className="grid w-5 gap-1">
              <div className="flex justify-between">
                <div className="h-[2px] w-[27%] bg-black dark:bg-white rounded-xl"></div>
                <div className="h-[2px] w-[57%] bg-black dark:bg-white rounded-xl"></div>
              </div>
              <div className="h-[2px] w-5 bg-black dark:bg-white rounded-xl"></div>
              <div className="flex w-5 justify-between">
                <div className="h-[2px] w-[57%] bg-black dark:bg-white rounded-xl"></div>
                <div className="h-[2px] w-[27%] bg-black dark:bg-white rounded-xl"></div>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="translate-y-5 bg-white dark:bg-black border border-gray-900 dark:border-gray-300">
            <DropdownMenuLabel className="border-b border-gray-900 dark:border-gray-300 font-poppins">
              Navigation
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.url} className="font-poppins">
                <Link href={link.url} className="w-full">{link.name}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="border-y border-gray-900 dark:border-gray-300 font-poppins">
              Socials
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {socials.map((social) => (
              <DropdownMenuItem key={social.url}>
                <Link href={social.url} className="flex w-full items-center gap-2 font-poppins">
                  <social.logo className="size-4 md:size-5" />
                  {social.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* Socials & Theme - Desktop */}
      <div className="hidden md:flex flex-row items-center gap-2">
        {socials.map((social) => (
          <Link
            key={social.url}
            href={social.url}
            className="cursor-pointer bg-black/200 hover:bg-black/10 dark:hover:bg-white/10 duration-300 transition-colors p-2 rounded-md"
          >
            <social.logo className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-300 lg:size-5 md:size-4" />
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </header>
  );
}
