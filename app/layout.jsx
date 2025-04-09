import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/nav-bar";
import FlawlessLogo from "./ui/flawless-logo";
import { lusitana } from "./ui/fonts";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="flex items-center bg-slate-200 h-[150px] z-0 ">
          <div className="flex w-[45%] h-[100px]  relative">
          <div className="h-[100px] w-[80%] bg-blue-400 mt-[2rem] z-10 flex justify-center items-center ml-10 rounded-t-3xl "><FlawlessLogo className={'m-4'}/></div>
           <div className="h-[100px] w-[20%] bg-blue-400 skew-x-12 absolute right-4 top-8 rounded-tr-3xl"></div> 
           </div>
              <div className="flex items-end w-[55%] h-[100%] justify-evenly p-5 rounded-l-full border-4 border-indigo-600">
  
              <header className= {`${lusitana.className} text-2xl flex justify-end items-center p-4 gap-4 h-16 `}>
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
        <Navbar/>
        </div>
        </div>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
