import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Search() {
    // function search(formData) {
    //   const query = formData.get("query");
    //   alert(`You searched for '${query}'`);
    // }
    return (
        <div className="relative flex flex-1 flex-shrink-0">
          <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search Services" />
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd" />
        </svg>
        </label>
        {/* <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
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