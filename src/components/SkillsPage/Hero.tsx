import PageHeader from "../universal/PageHeader";

export default function Hero() {
  return (
    <div className="min-h-[100dvh] w-full px-[10%] lg:px-[20%]">
      <PageHeader
        title="My Tech Stack"
        subtitle="The technologies and tools I use to build, innovate, and create."
      />
    </div>
  );
}
