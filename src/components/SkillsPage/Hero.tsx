import { skills } from "@/lib/constants";
import PageHeader from "../universal/PageHeader";
import { IconType } from "react-icons";

export default function Hero() {
  return (
    <div className="min-h-screen w-full px-[10%] lg:px-[20%]">
      <PageHeader
        title="My Tech Stack"
        subtitle="The technologies and tools I use to build, innovate, and create."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 mb-24">
        {Object.entries(skills).map(([category, items]) =>
          items.map(({ name, icon: Icon }: { name: string; icon: IconType }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <Icon className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-gray-200" />
              <h3 className="text-base lg:text-lg font-semibold mt-3 text-gray-900 dark:text-white">
                {name}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1 capitalize">
                {category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
