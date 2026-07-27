import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Products from "@/components/Products";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Process />
        <Products />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
