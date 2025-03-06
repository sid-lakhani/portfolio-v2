import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import PageHeader from "../universal/PageHeader";
import Link from "next/link";

export default function ContactLinks() {
  return (
    <div className="min-h-screen w-full px-6 md:px-[10%] lg:px-[20%] flex flex-col items-center">
      <PageHeader title="Get in Touch" subtitle="Let's create something extraordinary—reach out today!" />

      {/* Contact Card */}
      <div className="mt-8 w-full max-w-md sm:max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-5 text-gray-900 dark:text-white">
        {/* Location */}
        <div className="flex items-center gap-3 text-gray-300">
          <FaMapMarkerAlt className="text-lg" />
          <span>Mumbai, India</span>
        </div>

        {/* Email */}
        <Link
          href="mailto:lakhani.siddhesh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-300 hover:text-white transition"
        >
          <FaEnvelope className="text-lg" />
          <span>lakhani.siddhesh@gmail.com</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/sid-lakhani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-300 hover:text-white transition"
        >
          <FaGithub className="text-lg" />
          <span>sid-lakhani</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/siddheshlakhani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-300 hover:text-white transition"
        >
          <FaLinkedin className="text-lg" />
          <span>Siddhesh Lakhani</span>
        </Link>

        {/* Phone */}
        <Link
          href="tel:+917021969223"
          className="flex items-center gap-3 text-gray-300 hover:text-white transition"
        >
          <FaPhone className="scale-x-[-1] text-lg" />
          <span>+91 70219 69223</span>
        </Link>
      </div>
    </div>
  );
}
