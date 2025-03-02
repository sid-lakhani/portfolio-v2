type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ subtitle, title }: PageHeaderProps) => {
    return (
      <>
        <div className="container max-w-[1024px] mx-auto flex flex-col pt-12 lg:pt-24 gap-2">
          <h1 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl text-black dark:text-white lg:ml-16 tracking-wide">
            {title}
          </h1>
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-400 lg:ml-16 italic">
            {subtitle}
          </p>
        </div>
        <div className="h-[0.5px] w-full bg-black/50 dark:bg-white/50 mt-12"></div>
      </>
    );
  };
  
  export default PageHeader;