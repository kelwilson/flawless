// import FlawlessLogo from "./ui/flawless-logo";
// import styles from './ui/home.modules.css'
import Image from "next/image";
import Search from "./ui/search";
import Link from "next/link";
import {lusitana} from './ui/fonts'
import './globals.css'
import { Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <main className=" bg-slate-200 h-fit ">
       {/* Hero Section */}


       <div className=" mr-10 ml-10 bg-fuchsia-400 rounded-3xl rounded-tl-none relative">
         {/* <div className=" absolute bg-blue-200 top-5 w-[30%]"> */}
          {/* <FlawlessLogo/> */}
        {/* </div>  */}
        <div className={`${lusitana.className} flex justify-between p-10 ml-44`} >
            <section className=" mt-20">
            <h1 className="text-6xl font-700 space-x-4">Welcome to Flawless, where<br />  beauty meets perfection </h1>
            <p className="mt-4 text-lg"> Whether its a quick touch up or a full transformation, come have an exquisite experience <br /> with our exceptional touch of magic ! </p>
           
          <div className="bg-slate-100 rounded-full w-[100%] mt-5 pt-7 pb-7">

            <ul className="flex justify-center items-center ml-[2px] mr-[2px] gap-5">
              <li className="bg-sky-200 p-3 rounded-full w-[25%]">
                <Link
                href={'#'}
                className="btn btn-ghost hidden md:block m:10 text-3xl"> Home
                </Link>
              </li>
              <li className="bg-sky-200 p-3 rounded-full w-[25%]">
                <Link
                href={'#'}
                className="btn btn-ghost hidden md:block m:10 text-3xl"> Institute
                </Link>
              </li>
              <li className="relative before:content-[' '] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-10 :pl-5 :pr-5 before:bg-green-300 text-gray-700">
              <Search/>
              </li>
            </ul>

          </div>

          </section>
          <div className='home-bg'>
              {/* <Image
              src={'/asset/kelwilson.png'}
              alt="salon image"
              width={450}
              height={600}
              // layout="fill"  -- you can't use the layout property value 'fill' and the image property together only one can be used 
              // objectFit="cover"
              // quality={100}
              // className={styles.backgroundImage}      // in css modules styles you import them as JavaScript objects - using CSS Modules, styles is an imported object that contains all your class names as properties.
              className='rounded-3xl'
            /> */}
          </div>
        </div>
      </div>

      <section className="mr-10 ml-10 rounded-3xl rounded-tl-none   bg-sky-700 m-5 pb-5 ">
        <div className={` ${lusitana.className} flex gap-10 w-[100%] justify-between p-10 ml-44`}>
           <div className="flex flex-col  p-10 ">
            <h2 className="text-6xl font-700 space-x-4">Life style and <br /> wellness</h2>

                <div className="flex gap-10 justify-center items-center">
                   <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
                Book Now
            </button>  

            <ul className="flex gap-5 justify-center items-center">
              <li><Instagram /></li>
              <li><Facebook /></li>
            </ul>
                </div>
         

            </div>

            <div className=" flex flex-1 gap-5 w-[100%]">
              <article className="h-[150px] w-[10%] bg-green-950 rounded-xl">

              </article>
              <article className="h-[150px] w-[10%] bg-green-950 rounded-xl">

              </article>
              <article className="h-[150px] w-[10%] bg-green-950 rounded-xl">
                
              </article>
              <article className="h-[150px] w-[10%] bg-green-950 rounded-xl">

              </article>
            </div>
            </div>
      </section>
        
    </main>
    
  );
}
