import { ScissorsIcon } from '@heroicons/react/24/outline';
import logo from './home.modules.css'

export default function FlawlessLogo() {
  return (
    <div
      className={`logo flex flex-row items-center leading-none text-black size-[200] bg-red-200`}
    > 

{/* <svg width="200" height="100">
  <defs>
    <path id="curve" d="M 30,75 Q 150,30 270,75" fill="transparent"/>   // curving text
  </defs>
  <text fill="black" font-size="20">
    <textPath href="#curve" startOffset="11%">
      Flawless
    </textPath>
  </text>
</svg> */}
     
      <strong> <ScissorsIcon className="h-5 w-5 rotate-[15deg]" /> </strong> 
      <p className="text-[15px] "><strong>Flawless</strong> </p>
     

    </div>
  );
}