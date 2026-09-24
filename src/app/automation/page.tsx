import Navbar from "@/components/Navbar";
import Automation from "@/components/Automation";
import Footer from "@/components/Footer";

export default function AutomationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <Automation />
      </main>
      <Footer />
    </>
  );
}
