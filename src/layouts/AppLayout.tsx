import { ReactNode } from "react";

import Sidebar from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: Props) {

  return (

    <div
      className="
        min-h-screen
        flex
        text-white
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage:
            "url('/images/erp-bg.jpg')",
        }}
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-[#020817]/55
          backdrop-blur-[1px]
        "
      />

      {/* LIGHT EFFECT */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-blue-500/5
          pointer-events-none
        "
      />

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex-1
          ml-[250px]
        "
      >

        {children}

      </div>

    </div>
  );
}