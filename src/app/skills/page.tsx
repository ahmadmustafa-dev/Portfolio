import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
