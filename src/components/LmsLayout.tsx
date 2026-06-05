import { ReactNode } from "react";
import LmsSidebar from "./LmsSidebar";

interface Props {
  children: ReactNode;
}

export default function LmsLayout({
  children,
}: Props) {
  return (
    <div
      className="min-h-screen text-white flex bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('/aviation-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#020817]/85"></div>

      <div className="relative z-10 flex w-full">
        <LmsSidebar />

        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}