'use client'

// import FlawlessLogo from './flawless-logo'
import Link from 'next/link';
import { lusitana } from './fonts';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import '@/app/globals.css';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', /* href: '/dashboard', icon: HomeIcon*/ },
    {
      name: 'Services',
      // href: '/dashboard/invoices',  // Comment it out and put the appropriate links
    //   icon: DocumentDuplicateIcon,
    },
    { name: 'Hair-Styles',/* href: '/dashboard/customers', icon: UserGroupIcon*/ },
    { name: 'Appointments',/* href: '/dashboard/customers', icon: UserGroupIcon*/ },
  ];

  export default function Navbar() {
    // const pathname = usePathname();
    return (
      <>

      {/* <FlawlessLogo/> */}
    
  <div className="flex content-end">
  {/* <div className="navbar bg-base-100"> */}
  {/* <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a> 
  </div> */}
  <div className="flex justify-around items-center gap-10">
    <ul className={`${lusitana.className} menu menu-horizontal px-1 `}>
    
        {links.map((link, i) => {
          // const LinkIcon = link.icon;
          return (
          
   
    <Link 
              key={link.name}
              href={'/'}  
              className="relative first:mr-5 [&:not(:first-child)]:before:content-[' '] [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:left-0 [&:not(:first-child)]:before:top-1/2 [&:not(:first-child)]:before:-translate-y-1/2 [&:not(:first-child)]:before:w-px [&:not(:first-child)]:before:h-10 [&:not(:first-child)]:pl-5 [&:not(:first-child)]:pr-5 [&:not(:first-child)]:before:bg-gray-300 text-gray-700"

              // className={clsx(
              //   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              //   {
              //     'bg-sky-100 text-blue-600': pathname === link.href,
              //   },
              // )}
            >
              {/* <LinkIcon className="w-6" /> */}

           {/* <li className="hidden md:block"><a>{link.name}</a></li> */}
           <p className="btn btn-ghost hidden md:block m:10 text-3xl">{link.name} {/*{indexof(link.name[i]) != 0 && indexof(link.name[i] != link.lenth-1 ? '|' : '') } */}</p>
           </Link>
               );
        })}
        
    </ul>
  </div>
</div>
    
      </>
    );
  }





