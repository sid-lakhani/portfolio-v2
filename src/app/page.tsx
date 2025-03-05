import Hero from "@/components/HomePage/Hero";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
