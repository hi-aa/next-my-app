import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BottomNavigation from "@/component/common/bottom-navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="">{children}</main>;
}
