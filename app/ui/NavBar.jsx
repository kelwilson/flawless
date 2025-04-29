import NavLinks from "./Nav-links";
import FlawlessLogo from "./flawless-logo";
import {lusitana} from './fonts'
import {  SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,} from '@clerk/nextjs'
import '../globals.css'


export default function NavBar () {
    return (
        <div className="flex items-center bg-slate-200 h-[150px] z-0 w-[100%]">
        <div className="flex w-[50%] h-[100px]  relative">
        <div className=" invert-top h-[120px] w-[75%] bg-emerald-500 mt-[2rem] z-10 flex justify-center items-center ml-10 rounded-t-3xl relative"><FlawlessLogo/>
         <div className=" invert-skew h-[100px] w-[10%] bg-emerald-500 skew-x-12 absolute right-4 top-8 rounded-tr-3xl"></div> 
         <div className='invert-curve'></div>
        
        </div>
         </div>
            <div className="flex w-[80%] h-[100%] justify-between items-center p-2 rounded-l-full border-4 mt-3 ">

            <header className= {`${lusitana.className} text-2xl flex justify-end items-center p-4 gap-10 h-16 `}>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
      <NavLinks/>
      </div>
      </div>
    )
}