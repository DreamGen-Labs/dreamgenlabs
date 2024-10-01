import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-[60vh]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
