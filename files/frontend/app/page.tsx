"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Flow from "@/components/Flow";
import Features from "@/components/Features";
import Powers from "@/components/Powers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080C14] min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Flow />
      <Features />
      <Powers />
      <Footer />
    </main>
  );
}
