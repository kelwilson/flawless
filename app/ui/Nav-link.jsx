import Navbar from "./Nav-bar";
import FlawlessLogo from "./flawless-logo";
import {lusitana} from './fonts'
import {  SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,} from '@clerk/nextjs'
import '../globals.css'


export default function NavLink () {
    return (
        <div className="flex items-center bg-slate-200 h-[150px] z-0 ">
        <div className="flex w-[45%] h-[100px]  relative">
        <div className=" invert-top h-[100px] w-[60%] bg-blue-400 mt-[2rem] z-10 flex justify-center items-center ml-10 rounded-t-3xl relative"><FlawlessLogo className={'m-4'}/>
         <div className=" invert-skew h-[100px] w-[10%] bg-green-400 skew-x-12 absolute right-4 top-8 rounded-tr-3xl"></div> 
        
        </div>
         </div>
            <div className="flex items-end w-[55%] h-[100%] justify-evenly p-5 rounded-l-full border-4 ">

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
    )
}