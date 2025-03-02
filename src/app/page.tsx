import Hero from "@/components/HomePage/Hero";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
