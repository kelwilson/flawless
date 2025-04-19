// import FlawlessLogo from "./ui/flawless-logo";
// import styles from './ui/home.modules.css'
// import Image from "next/image";
import Search from "./ui/Search";
import Link from "next/link";
import {lusitana} from './ui/fonts'
import './globals.css'
import { Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <main className=" bg-slate-200 h-fit -z-50 main-wrap">
       {/* Hero Section */}


       <div className=" mr-10 ml-10 bg-fuchsia-400 rounded-3xl rounded-tl-none relative wrapper">
         {/* <div className=" absolute bg-blue-200 top-5 w-[30%]"> */}
          {/* <FlawlessLogo/> */}
        {/* </div>  */}
        <div className={`${lusitana.className} flex justify-between p-10 ml-44`} >
            <section className=" mt-20">
            <h1 className="text-6xl font-700 space-x-4">Welcome to Flawless, where<br />  beauty meets perfection </h1>
            <p className="mt-4 text-lg"> Whether its a quick touch up or a full transformation, come have an exquisite experience <br /> with our exceptional touch of magic ! </p>
           
          <div className="bg-white rounded-full mt-5 p-5 w-[900px]">

            <ul className="flex items-center ml-[2px] mr-[2px] gap-5 w-full">
              <li className="bg-sky-200 p-3 rounded-full w-[20%] ">
                <Link
                href={'#'}
                className="btn btn-ghost hidden md:block m:10 text-3xl"> Home
                </Link>
              </li>
              <li className="bg-sky-200 p-3 rounded-full w-[20%]">
                <Link
                href={'#'}
                className="btn btn-ghost hidden md:block m:10 text-3xl"> Institute
                </Link>
              </li>
              <li className="relative first:mr-5 [&:not(:first-child)]:before:content-[' '] [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:left-0 [&:not(:first-child)]:before:top-1/2 [&:not(:first-child)]:before:-translate-y-1/2 [&:not(:first-child)]:before:w-px [&:not(:first-child)]:before:h-10 [&:not(:first-child)]:pl-5 [&:not(:first-child)]:pr-5 [&:not(:first-child)]:before:bg-gray-300 text-gray-700">
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
        <div className='bottom-sm-box'></div>
        <div className='other-sm-box'>
        <div className='inner-box'></div>

        </div>
      </div>

      <div className='lifestyle-top'>
        <div className="lifestyle-mini"></div>
      </div>
      <section className="mr-10 ml-10 rounded-3xl rounded-tl-none bg-sky-700 m-5 mt-10 pb-5 bottom-section ">
        <div className={` ${lusitana.className} flex gap-10 w-[100%] justify-between p-10 ml-44`}>
           <div className="flex flex-col items-center p-10">
            <h2 className="text-6xl font-700 space-x-4">Life style and <br /> wellness</h2>

              <div className="flex gap-10 justify-center items-center">
              <button className="mt-6 mb-5 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200">
                Book Now
              </button>  

            <ul className="flex justify-center items-center gap-5 relative first:mr-5 [&:not(:first-child)]:before:content-[' '] [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:left-0 [&:not(:first-child)]:before:top-1/2 [&:not(:first-child)]:before:-translate-y-1/2 [&:not(:first-child)]:before:w-px [&:not(:first-child)]:before:h-10 [&:not(:first-child)]:pl-5 [&:not(:first-child)]:pr-5 [&:not(:first-child)]:before:bg-gray-300 text-gray-700 ">
              <li className="flex justify-center items-center rounded-full bg-slate-300 w-10 h-10 "><Link href={'#'}><Instagram /></Link></li>
              <li className="flex justify-center items-center rounded-full bg-slate-300 w-10 h-10 "><Link href={'#'}><Facebook /></Link></li>
            </ul>
                </div>
            </div>

            <div className=" flex flex-1 gap-5 w-[100%] items-center">
              <article className="flex justify-center items-center  h-[100%] w-[20%] border-gray-200 border rounded-xl">

                <div className='flex flex-col justify-space-between items-center '>

                <div className="flex justify-self-start">
                <svg className="text-6xl text-rose-100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"> Icon from IconPark Outline by ByteDance - https://github.com/bytedance/IconPark/blob/master/LICENSE<g fill="none" stroke="currentColor" stroke-width="4"><path d="M11 12.138c0-.079.059-.146.137-.156L32.082 9.28C37.342 8.6 42 12.697 42 18s-4.659 9.399-9.918 8.72l-20.945-2.702a.16.16 0 0 1-.137-.156z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M11 12L4 8v20l7-4"></path><path d="m38 25l-6.694 15.898A5.07 5.07 0 0 1 26.634 44c-3.625 0-6.078-3.695-4.672-7.036L27 25"></path><circle cx="35" cy="18" r="9"></circle></g></svg>
                <svg className="-rotate-90 text-6xl text-rose-100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE<path fill="currentColor" d="m236.52 187.09l-143-97.87a36 36 0 1 0-14.38 17.27l21.39 21.69l-21.38 21.36a35.91 35.91 0 1 0 14.38 17.27l26.91-18.41L170 198.64a32.26 32.26 0 0 0 22.7 9.37a31.5 31.5 0 0 0 4.11-.27h.28l36.27-6.11a8 8 0 0 0 3.19-14.5Zm-162.38-97A20 20 0 1 1 80 76a20 20 0 0 1-5.86 14.13Zm0 104A20 20 0 1 1 80 180a20 20 0 0 1-5.86 14.15Zm61-101.5l34.8-35.19a32.19 32.19 0 0 1 26.84-9.14h.28l36 6.07a8.21 8.21 0 0 1 6.09 4.42a8 8 0 0 1-2.67 10.12l-69.93 47.85a4 4 0 0 1-4.51 0l-26.31-18a4 4 0 0 1-.55-6.07Z"></path></svg>
                </div>

                  <h2 className="text-white text-lg">Hair Dressing</h2>
                </div>

              </article>
              <article className="flex justify-center items-center h-[100%] w-[20%] border-gray-200 border rounded-xl">

                <div className='flex flex-col justify-between items-center'>
                <svg className="text-rose-100 text-6xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE<g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M9.84 20.275c-.419.972-1.585 1.533-2.668.979c-2.046-1.049-3.454-2.248-4.315-3.58c-.871-1.349-1.14-2.766-1.019-4.15C2.074 10.841 3.784 8.29 5.2 6.4C7.084 3.888 9.48 2.5 12 2.5s4.916 1.388 6.8 3.9c1.401 1.868 3.24 4.434 3.54 7.125c.155 1.397-.1 2.832-1.008 4.194c-.894 1.342-2.373 2.54-4.538 3.585c-1.083.523-2.238-.047-2.643-1.023c-.722.454-1.478.719-2.15.719c-.676 0-1.437-.268-2.162-.725ZM6.8 7.6c1.616-2.154 3.47-3.1 5.2-3.1s3.584.946 5.2 3.1c1.454 1.938 2.922 4.082 3.152 6.147c.109.98-.065 1.933-.684 2.863c-.626.938-1.751 1.92-3.668 2.857v-.901c.866-1.15 1.5-2.692 1.5-4.566q0-.575-.061-1.113a1 1 0 0 0-.984-.887a4.5 4.5 0 0 1-4.425-3.977a1.01 1.01 0 0 0-1.268-.847C8.368 7.86 6.5 10.405 6.5 14c0 1.874.634 3.416 1.5 4.566v.864c-1.787-.928-2.856-1.904-3.463-2.843c-.607-.938-.793-1.902-.706-2.887c.18-2.055 1.54-4.196 2.97-6.1ZM8.5 14c0-2.222.85-3.674 1.843-4.412a6.51 6.51 0 0 0 5.157 4.336c.012 1.408-.468 2.789-1.424 3.832C13.244 18.663 12.366 19 12 19s-1.243-.337-2.075-1.244C9.138 16.897 8.5 15.633 8.5 14"></path></g></svg>
                  <h2 className="text-white text-lg">Iconic Hair care tips</h2>
                </div>

              </article>
              <article className="flex justify-center items-center h-[100%] w-[20%] border-gray-200 border rounded-xl">

                <div className='flex flex-col justify-center items-center'>
                  {/* <svg className="text-rose-100 text-5xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"> Icon from Teenyicons by smhmd - https://github.com/teenyicons/teenyicons/blob/master/LICENSE <path fill="currentColor" fillRule="evenodd" d="M12 2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5v-10A1.5 1.5 0 0 1 1.5 2H3V0h1v2h7V0h1zM6 8H3V7h3zm6-1H9v1h3zm-6 4H3v-1h3zm3 0h3v-1H9z" clipRule="evenodd"></path></svg> */}
                  <svg className="text-rose-100 text-5xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"> Icon from Teenyicons by smhmd - https://github.com/teenyicons/teenyicons/blob/master/LICENSE <path fill="none" stroke="currentColor" d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"></path></svg>
                  <h2 className="text-white text-lg">Appointments</h2>
                </div>
                
              </article>
              <article className="flex justify-center items-center h-[100%] w-[20%] border-gray-200 border rounded-xl">

                <div className='flex flex-col justify-center items-center'>
                  <div className="flex">
                  {/* <svg className="text-rose-100 text-6xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">Icon from Streamline by Streamline - https://creativecommons.org/licenses/by/4.0/<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"></path></svg> */}
                  {/* <svg className="text-rose-100 text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE <path fill="currentColor" d="M11.5 8.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM7.308 21.116q-.633 0-1.067-.434t-.433-1.066t.433-1.067q.434-.433 1.067-.433t1.066.433t.434 1.067t-.434 1.066t-1.066.434m9.384 0q-.632 0-1.066-.434t-.434-1.066t.434-1.067q.434-.433 1.066-.433t1.067.433q.433.434.433 1.067q0 .632-.433 1.066q-.434.434-1.067.434M2 3.5v-1h2.448l4.096 8.616h6.635q.173 0 .308-.087q.134-.087.23-.24L19.213 4.5h1.14l-3.784 6.835q-.217.365-.565.573t-.762.208H8.1l-1.215 2.23q-.154.231-.01.5t.433.27h10.884v1H7.308q-.875 0-1.309-.735t-.018-1.485l1.504-2.68L3.808 3.5z"></path></svg> */}
                  <svg className="text-rose-100 text-6xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE <path fill="currentColor" d="M6.506 21q-.492 0-.818-.37t-.265-.86h2.921L9.287 16h2.057l1.443-5.77H6.404l.217-1.807q.081-.615.54-1.02Q7.622 7 8.238 7h1.628l.058-.5q.2-1.664 1.162-2.582T13.712 3q1.465 0 2.393 1.11t.787 2.582L16.854 7h2.454q.727 0 1.202.54t.388 1.268l-1.327 10.769q-.08.615-.528 1.02q-.447.403-1.062.403zM2 17.384l.25-1h4.48l-.25 1zm2-3.769l.25-1h5.48l-.25 1zM10.866 7h4.994l.038-.308Q16 5.617 15.316 4.81Q14.633 4 13.577 4q-1.183 0-1.849.653T10.923 6.5z"></path></svg>
                  {/* <svg className="text-rose-100 text-9xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE<path fill="currentColor" d="m2 17.385l.25-1h4.48l-.25 1zm2-3.77l.25-1h5.48l-.25 1zm14.537 6.404l.5-4.038l.705-5.808l.27-2.167zM6.557 21q-.478 0-.825-.28q-.348-.28-.348-.72h12.537q.27 0 .462-.173t.23-.442l1.303-10.687q.038-.27-.154-.48t-.462-.212h-2.538l-.314 2.529q-.03.213-.192.345t-.375.12q-.195-.011-.326-.17q-.132-.159-.101-.353l.302-2.471h-4.994l-.314 2.523q-.03.213-.192.348T9.88 11q-.194-.012-.329-.173t-.104-.356l.302-2.465H6.673q.08-.523.525-.765Q7.642 7 8.173 7h1.693l.057-.5q.2-1.663 1.163-2.582T13.712 3q1.465 0 2.393 1.11t.787 2.582L16.854 7h2.588q.67.006 1.116.508q.446.501.36 1.17l-1.327 10.77q-.081.673-.586 1.113T17.827 21zm4.309-14h4.994l.038-.308Q16 5.617 15.316 4.81Q14.633 4 13.577 4q-1.183 0-1.849.653T10.923 6.5z"></path></svg> */}
                  </div>
                  <h2 className="text-white text-lg">Hair Products</h2>
                </div>

              </article>
            </div>
            </div>
      </section>
    </main>
    
  );
}
