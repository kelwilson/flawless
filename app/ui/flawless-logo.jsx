import { ScissorsIcon } from '@heroicons/react/24/outline';
import logo from './home.modules.css'
import Image from 'next/image';
import Link from 'next/link';

export default function FlawlessLogo() {
  return (
    <div
      className={` `}
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
     <Link 
     href={'#'}
     >
       <Image
      src={'/logo/flawless.png'}
      width={200}
      height={200}
      className='drop-shadow-md p-3'
      alt='flawless-logo'
      />
     </Link>
   
     

    </div>
  );
}