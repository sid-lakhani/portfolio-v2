import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import PageHeader from "../universal/PageHeader";
import Link from "next/link";

export default function ContactLinks() {
  return (
    <div className="min-h-screen w-full px-[10%] lg:px-[20%] flex flex-col items-center">
      <PageHeader title="Get in Touch" subtitle="Let's create something extraordinary—reach out today!" />

      {/* Contact Card */}
      <div className="mt-8 w-full max-w-md sm:max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-6 flex flex-col gap-5">
        {/* Location */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <FaMapMarkerAlt className="text-xl text-gray-500 dark:text-gray-400" />
          <span className="text-lg font-medium">Mumbai, India</span>
        </div>

        {/* Email */}
        <Link
          href="mailto:lakhani.siddhesh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition"
        >
          <FaEnvelope className="text-xl text-gray-500 dark:text-gray-400" />
          <span className="text-lg font-medium">lakhani.siddhesh@gmail.com</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/sid-lakhani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition"
        >
          <FaGithub className="text-xl text-gray-500 dark:text-gray-400" />
          <span className="text-lg font-medium">sid-lakhani</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/siddheshlakhani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition"
        >
          <FaLinkedin className="text-xl text-gray-500 dark:text-gray-400" />
          <span className="text-lg font-medium">Siddhesh Lakhani</span>
        </Link>

        {/* Phone */}
        <Link
          href="tel:+917021969223"
          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition"
        >
          <FaPhone className="scale-x-[-1] text-xl text-gray-500 dark:text-gray-400" />
          <span className="text-lg font-medium">+91 70219 69223</span>
        </Link>

        {/* Resume Download Button */}
        <Link
          href="/Siddhesh_Lakhani_Resume.pdf" // Ensure the file is in the public folder
          download
          className="mt-4 bg-accent hover:bg-accent/80 text-white  font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-md"
        >
          📄 Download Resume
        </Link>
      </div>
    </div>
  );
}
