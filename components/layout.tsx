import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-auto w-full relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
