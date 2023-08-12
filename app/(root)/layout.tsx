import { Navbar } from "@/components/navbar/navbar";
import React from "react";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default LayoutRoot;
