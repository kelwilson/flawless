import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Search() {
    // function search(formData) {
    //   const query = formData.get("query");
    //   alert(`You searched for '${query}'`);
    // }
    return (
        <div className="relative flex flex-shrink-0 justify-between items-center gap-5 w-full bg-white">
          <div className="w-full ">
            <input aria-label="search box" type="text" className="grow outline-none border-none focus:outline-none w-[410px] pt-4 pb-4 pr-5 pl-5" placeholder="Search Services" />
          </div>
          
         <div className="bg-orange-500 p-2 rounded-full self-end">
           <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-10 w-10 opacity-70 rotate-90 text-white">
          <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd" />
          </svg>
         </div>
        
        {/* <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 "
          // placeholder={placeholder}
          // onChange={(e) => {
          //   handleSearch(e.target.value);
          // }}
          // defaultValue={searchParams.get('query')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 scale-x-[-1] text-gray-500 peer-focus:text-gray-900" /> */}
      </div>
    );
  }