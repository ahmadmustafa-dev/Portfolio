import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="mx-auto flex min-h-[50vh] w-full max-w-5xl items-center justify-center px-6 py-24 text-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neon-400">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-fog-50 sm:text-5xl">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-fog-300">
              Need a custom website, plugin, automation, or a polished digital product? Reach out and let&apos;s talk.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
